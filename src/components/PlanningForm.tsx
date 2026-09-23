"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type PlanningField = "name" | "email" | "journey" | "guests" | "message";
type PlanningErrors = Partial<Record<PlanningField, string>>;
type PlanningStatus = "idle" | "sending" | "sent" | "error";

const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN?.trim();
const telegramChatId = process.env.TELEGRAM_CHAT_ID?.trim();

const planningFields: PlanningField[] = ["name", "email", "journey", "guests", "message"];
const journeyOptions = [
  "Not sure yet",
  "Whispers of the Kingdom",
  "The Tiger’s Path",
  "Kingdom for Two",
  "The Quiet Kingdom",
  "A Taste of Bhutan",
] as const;

function telegramMessage(payload: {
  name: string;
  email: string;
  journey: string;
  dates: string;
  guests: string;
  message: string;
}) {
  const reference = `BB-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
  const received = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Thimphu",
  }).format(new Date());

  return [
    "Bhutan Beckons — journey enquiry",
    "",
    `Reference: ${reference}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Journey: ${payload.journey}`,
    `Travel timing: ${payload.dates || "Flexible — please discuss directly"}`,
    `Guests: ${payload.guests || "Not specified"}`,
    "",
    "What they are looking for:",
    payload.message,
    "",
    `Received: ${received} (Bhutan)`,
    "",
    "Please contact the traveller directly using the email address above.",
  ].join("\n");
}

function FieldError({ field, errors }: { field: PlanningField; errors: PlanningErrors }) {
  return errors[field] ? (
    <small className="field-error" id={`planning-${field}-error`}>
      {errors[field]}
    </small>
  ) : null;
}

export function PlanningForm() {
  const [status, setStatus] = useState<PlanningStatus>("idle");
  const [errors, setErrors] = useState<PlanningErrors>({});
  const [submissionError, setSubmissionError] = useState("");
  const requestRef = useRef<AbortController | null>(null);
  const timeoutRef = useRef<number | undefined>(undefined);
  const confirmationRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(
    () => () => {
      requestRef.current?.abort();
      window.clearTimeout(timeoutRef.current);
    },
    [],
  );

  useEffect(() => {
    if (status === "sent") confirmationRef.current?.focus();
  }, [status]);

  function clearError(field: PlanningField) {
    setErrors((currentErrors) => {
      if (!currentErrors[field]) return currentErrors;
      const nextErrors = { ...currentErrors };
      delete nextErrors[field];
      return nextErrors;
    });
  }

  function showFieldErrors(nextErrors: PlanningErrors) {
    setErrors(nextErrors);
    const firstInvalidField = planningFields.find((field) => nextErrors[field]);

    if (firstInvalidField) {
      window.requestAnimationFrame(() => {
        const input = formRef.current?.elements.namedItem(firstInvalidField);
        if (input instanceof HTMLElement) input.focus();
      });
    }

    return Boolean(firstInvalidField);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (requestRef.current) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const value = (field: string) => String(formData.get(field) ?? "").trim();
    const payload = {
      name: value("name"),
      email: value("email"),
      journey: value("journey"),
      dates: value("dates"),
      guests: value("guests"),
      message: value("message"),
      website: value("website"),
    };
    const nextErrors: PlanningErrors = {};
    const emailInput = form.elements.namedItem("email");

    if (!payload.name) nextErrors.name = "Enter your name.";
    if (!payload.email) nextErrors.email = "Enter your email address.";
    else if (emailInput instanceof HTMLInputElement && emailInput.validity.typeMismatch) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!journeyOptions.some((journey) => journey === payload.journey)) {
      nextErrors.journey = "Choose a journey, or select “Not sure yet”.";
    }
    if (payload.guests) {
      const guests = Number(payload.guests);
      if (!Number.isInteger(guests) || guests < 1 || guests > 24) {
        nextErrors.guests = "Enter a guest count from 1 to 24.";
      }
    }
    if (!payload.message) nextErrors.message = "Tell us what would make this journey yours.";

    setSubmissionError("");
    if (showFieldErrors(nextErrors)) {
      setStatus("error");
      return;
    }

    if (payload.website) {
      form.reset();
      setStatus("sent");
      return;
    }

    if (!telegramBotToken || !telegramChatId) {
      setStatus("error");
      setSubmissionError(
        "Online enquiries are not configured yet. Please email hello@bhutanbeckons.com instead.",
      );
      return;
    }

    const controller = new AbortController();
    requestRef.current = controller;
    timeoutRef.current = window.setTimeout(() => controller.abort(), 20_000);
    setStatus("sending");

    try {
      const telegramBody = new URLSearchParams({
        chat_id: telegramChatId,
        text: telegramMessage(payload),
        protect_content: "true",
      });

      await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: telegramBody,
        signal: controller.signal,
      });

      form.reset();
      setErrors({});
      setStatus("sent");
    } catch {
      if (requestRef.current !== controller) return;
      setStatus("error");
      setSubmissionError(
        "We couldn’t dispatch your enquiry. Check your connection or email us before sending again to avoid a duplicate.",
      );
    } finally {
      window.clearTimeout(timeoutRef.current);
      if (requestRef.current === controller) requestRef.current = null;
    }
  }

  if (status === "sent") {
    return (
      <div className="planning-confirmation" ref={confirmationRef} tabIndex={-1} role="status">
        <p className="eyebrow">Enquiry sent</p>
        <h2>We will be in touch.</h2>
        <p>
          Your journey details were sent to Bhutan Beckons. We will contact you using the email address you provided.
        </p>
        <button className="form-button" type="button" onClick={() => setStatus("idle")}>
          Plan another journey →
        </button>
      </div>
    );
  }

  return (
    <form className="planning-form" ref={formRef} noValidate onSubmit={handleSubmit} aria-busy={status === "sending"}>
      <fieldset className="planning-fields" disabled={status === "sending"}>
        <legend className="visually-hidden">Your journey enquiry</legend>
        <div className="form-honeypot" aria-hidden="true">
          <label htmlFor="planning-website">Leave this field empty</label>
          <input id="planning-website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="form-field">
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            maxLength={120}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "planning-name-error" : undefined}
            onInput={() => clearError("name")}
            required
          />
          <FieldError field="name" errors={errors} />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            spellCheck={false}
            maxLength={254}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "planning-email-error" : undefined}
            onInput={() => clearError("email")}
            required
          />
          <FieldError field="email" errors={errors} />
        </div>
        <div className="form-field">
          <label htmlFor="journey">Journey</label>
          <select
            id="journey"
            name="journey"
            autoComplete="off"
            defaultValue="Not sure yet"
            aria-invalid={Boolean(errors.journey)}
            aria-describedby={errors.journey ? "planning-journey-error" : undefined}
            onChange={() => clearError("journey")}
          >
            {journeyOptions.map((journey) => (
              <option key={journey}>{journey}</option>
            ))}
          </select>
          <FieldError field="journey" errors={errors} />
        </div>
        <div className="form-field">
          <label htmlFor="dates">When would you like to travel?</label>
          <input
            id="dates"
            name="dates"
            autoComplete="off"
            maxLength={120}
            placeholder="Month, year, or flexible…"
          />
        </div>
        <div className="form-field form-field--wide">
          <label htmlFor="guests">Number of guests</label>
          <input
            id="guests"
            name="guests"
            type="number"
            min="1"
            max="24"
            inputMode="numeric"
            autoComplete="off"
            aria-invalid={Boolean(errors.guests)}
            aria-describedby={errors.guests ? "planning-guests-error" : undefined}
            onInput={() => clearError("guests")}
          />
          <FieldError field="guests" errors={errors} />
        </div>
        <div className="form-field form-field--wide">
          <label htmlFor="message">What would make this journey yours?</label>
          <textarea
            id="message"
            name="message"
            autoComplete="off"
            maxLength={1600}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "planning-message-error" : undefined}
            onInput={() => clearError("message")}
            required
            placeholder="Tell us about your pace, interests, and anything that matters to you…"
          />
          <FieldError field="message" errors={errors} />
        </div>
        <button className="form-button" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending enquiry…" : "Start planning →"}
        </button>
      </fieldset>

      <div className="form-status" aria-live="polite" aria-atomic="true">
        {submissionError ? <p className="form-note form-note--error">{submissionError}</p> : null}
        {status === "error" && !submissionError ? (
          <p className="form-note form-note--error">Check the highlighted details and try again.</p>
        ) : null}
        {status === "sending" ? <p className="form-note">Sending your enquiry to Bhutan Beckons…</p> : null}
      </div>
      <p className="form-note">
        Your details are sent to our Telegram chat and used only to reply to this enquiry.
      </p>
    </form>
  );
}
