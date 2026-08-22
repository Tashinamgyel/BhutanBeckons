"use client";

import { FormEvent } from "react";

export function PlanningForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const journey = String(data.get("journey") ?? "Not sure yet");
    const dates = String(data.get("dates") ?? "Flexible");
    const guests = String(data.get("guests") ?? "Not specified");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Journey enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nJourney: ${journey}\nDates: ${dates}\nGuests: ${guests}\n\nWhat they are looking for:\n${message}`,
    );
    window.location.href = `mailto:hello@bhutanbeckons.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="planning-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" autoComplete="name" required />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" autoComplete="email" spellCheck={false} required />
      </div>
      <div className="form-field">
        <label htmlFor="journey">Journey</label>
        <select id="journey" name="journey" autoComplete="off" defaultValue="Not sure yet">
          <option>Not sure yet</option>
          <option>Whispers of the Kingdom</option>
          <option>The Tiger’s Path</option>
          <option>Kingdom for Two</option>
          <option>The Quiet Kingdom</option>
          <option>A Taste of Bhutan</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="dates">When would you like to travel?</label>
        <input id="dates" name="dates" autoComplete="off" placeholder="Month, year, or flexible…" />
      </div>
      <div className="form-field form-field--wide">
        <label htmlFor="guests">Number of guests</label>
        <input id="guests" name="guests" type="number" min="1" max="24" inputMode="numeric" autoComplete="off" />
      </div>
      <div className="form-field form-field--wide">
        <label htmlFor="message">What would make this journey yours?</label>
        <textarea id="message" name="message" autoComplete="off" required placeholder="Tell us about your pace, interests, and anything that matters to you…" />
      </div>
      <p className="form-note">Selecting “Start planning” opens a prepared email in your mail app. We use your details only to reply to this enquiry.</p>
      <button className="form-button" type="submit">Start planning →</button>
    </form>
  );
}
