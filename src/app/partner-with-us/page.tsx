import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageIntro } from "@/components/PageIntro";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Partner With Us",
  description: "Work with Bhutan Beckons to offer distinctive, locally operated private journeys across Bhutan.",
};

export default function PartnerPage() {
  return (
    <>
      <PageIntro
        eyebrow="For travel partners"
        title="Partner with us"
        intro="A thoughtful ground partner in Bhutan for agencies and advisors who value strong stories, responsive care, and journeys their clients can remember by name."
      />
      <section className="content-section">
        <div className="content-shell">
          <SectionHeading eyebrow="Working together" title="Local depth. Clear communication." />
          <div className="content-grid">
            <article className="content-card"><h3>Distinctive journeys</h3><p>Sell named, story-led experiences with clear positioning instead of interchangeable itineraries.</p></article>
            <article className="content-card"><h3>Responsive planning</h3><p>Receive practical, candid guidance on routing, seasonality, pace, and the details your client values.</p></article>
            <article className="content-card"><h3>Care on the ground</h3><p>Give travellers a consistent local point of contact from airport welcome through their final departure.</p></article>
          </div>
        </div>
      </section>
      <section className="statement-section"><div className="content-shell"><blockquote>“A good partnership should feel as considered as the journey itself.”</blockquote></div></section>
      <section className="closing-band">
        <div className="content-shell closing-band__inner">
          <h2>Let’s build something lasting.</h2>
          <div className="closing-band__copy"><p>Tell us about your clients, markets, and preferred way of working.</p><ButtonLink href="mailto:partners@bhutanbeckons.com" inverse>Start a partnership</ButtonLink></div>
        </div>
      </section>
    </>
  );
}
