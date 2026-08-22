import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { PlanningForm } from "@/components/PlanningForm";

export const metadata: Metadata = {
  title: "Plan Your Journey",
  description: "Start a conversation with Bhutan Beckons about a private, carefully paced journey through Bhutan.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Begin a conversation"
        title="Plan your journey"
        intro="You do not need to have every detail decided. Tell us what draws you to Bhutan and how you like to travel."
      />
      <section className="content-section">
        <div className="content-shell contact-layout">
          <aside className="contact-details">
            <p className="eyebrow">Bhutan Beckons</p>
            <address>Thimphu<br />Kingdom of Bhutan</address>
            <p><a href="mailto:hello@bhutanbeckons.com">hello@bhutanbeckons.com</a></p>
            <p>We usually reply within two working days in Bhutan.</p>
          </aside>
          <PlanningForm />
        </div>
      </section>
    </>
  );
}
