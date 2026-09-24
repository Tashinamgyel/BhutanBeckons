import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Travel Information",
  description:
    "Essential Bhutan travel information from Bhutan Beckons, including SDF rates, entry documents, advance booking advice, and cancellation terms.",
};

const policyReviewDate = new Date("2026-09-24T00:00:00+06:00");
const policyReviewLabel = new Intl.DateTimeFormat("en", {
  month: "long",
  year: "numeric",
  timeZone: "Asia/Thimphu",
}).format(policyReviewDate);

const sectionLinks = [
  { href: "#booking-ahead", label: "Booking ahead" },
  { href: "#sdf", label: "Sustainable Development Fee" },
  { href: "#entry", label: "Entry & travel documents" },
  { href: "#cancellations", label: "Cancellations" },
  { href: "#before-you-go", label: "Before you go" },
];

const cancellationTerms = [
  { notice: "20 days or more", outcome: "No Bhutan Beckons cancellation fee" },
  { notice: "15–19 days", outcome: "75% of the journey amount is refunded" },
  { notice: "10–14 days", outcome: "50% of the journey amount is refunded" },
  { notice: "9 days or fewer", outcome: "No refund" },
];

export default function TravelInfoPage() {
  return (
    <>
      <PageIntro
        eyebrow="Before you travel"
        title="Travel information"
        intro="A clear guide to Bhutan’s visitor fees, entry documents, booking timelines, and the practical details worth knowing before you set out."
      />

      <section className="travel-info content-shell" aria-label="Bhutan travel information">
        <aside className="travel-info__aside">
          <p className="eyebrow">On this page</p>
          <nav aria-label="Travel information sections">
            {sectionLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <p className="travel-info__reviewed">
            Official information last reviewed <time dateTime="2026-09-24">{policyReviewLabel}</time>.
          </p>
        </aside>

        <div className="travel-info__body">
          <section id="booking-ahead" className="travel-info__section">
            <p className="eyebrow">Plan with room to choose</p>
            <h2>Book ahead when you can.</h2>
            <p className="travel-info__lead">
              Bhutan has a limited number of flights and the most sought-after stays fill early, particularly during spring, autumn, and festival periods. Booking in advance gives us more freedom to shape your preferred route, flight dates, and accommodation.
            </p>
            <p>
              Last-minute journeys may still be possible. We will always check the best available options and be candid about what can be confirmed.
            </p>
          </section>

          <section id="sdf" className="travel-info__section">
            <p className="eyebrow">Visitor contribution</p>
            <h2>Sustainable Development Fee</h2>
            <p className="travel-info__lead">
              Bhutan’s Sustainable Development Fee supports conservation, culture, public services, infrastructure, and long-term opportunities for Bhutanese communities. It is set by the Royal Government of Bhutan and is separate from your journey arrangements.
            </p>
            <dl className="travel-fees">
              <div>
                <dt>Most international adults</dt>
                <dd>USD 100 <span>per person, per night</span></dd>
              </div>
              <div>
                <dt>Indian adults</dt>
                <dd>Nu./INR 1,200 <span>per person, per night</span></dd>
              </div>
            </dl>
            <p>
              Children aged 6–11 pay half the adult SDF; children under 6 are exempt. Rates and concessions can change, so we confirm the applicable amount when preparing your proposal.
            </p>
            <a className="travel-info__source" href="https://bhutan.travel/faqs">
              Check current SDF guidance on Bhutan Travel <span aria-hidden="true">↗</span>
            </a>
          </section>

          <section id="entry" className="travel-info__section">
            <p className="eyebrow">Immigration</p>
            <h2>Entry & travel documents</h2>
            <div className="travel-info__columns">
              <div>
                <h3>Indian nationals</h3>
                <p>Carry one of the following original documents:</p>
                <ul>
                  <li>A valid Indian passport with at least 6 months’ validity beyond your intended departure from Bhutan; or</li>
                  <li>A valid Indian Voter Identity Card.</li>
                </ul>
                <p>
                  Travellers under 18 may use a passport or birth certificate when accompanied by a parent or legal guardian. Indian visitors require an entry permit, which can be arranged online before travel or at the port of entry. Applying in advance helps avoid a possible wait on arrival.
                </p>
              </div>
              <div>
                <h3>Other nationalities</h3>
                <p>
                  Most visitors need a valid passport and an approved e-visa before travelling. Bhutan’s official guidance says a correctly completed application may take up to 5 working days, so allow time for processing before confirming tight connections.
                </p>
                <p>
                  Visitors from Bangladesh and the Maldives follow separate visa-on-arrival provisions. We will confirm the process that applies to your passport when planning your journey.
                </p>
              </div>
            </div>
            <div className="travel-info__sources" aria-label="Official immigration links">
              <a className="travel-info__source" href="https://bhutan.travel/visa">
                Official visitor visa guidance <span aria-hidden="true">↗</span>
              </a>
              <a className="travel-info__source" href="https://www.doi.gov.bt/?lang=en&page_id=566">
                Bhutan Department of Immigration <span aria-hidden="true">↗</span>
              </a>
            </div>
          </section>

          <section id="cancellations" className="travel-info__section">
            <p className="eyebrow">Reservation terms</p>
            <h2>If plans need to change.</h2>
            <p className="travel-info__lead">
              We hope every planned journey reaches Bhutan, but we understand that circumstances can change. The following schedule applies to cancellations made before the journey’s confirmed start date.
            </p>
            <div className="travel-info__table-wrap">
              <table className="cancellation-table">
                <caption>Bhutan Beckons cancellation schedule</caption>
                <thead>
                  <tr>
                    <th scope="col">Notice before arrival</th>
                    <th scope="col">Refund</th>
                  </tr>
                </thead>
                <tbody>
                  {cancellationTerms.map((term) => (
                    <tr key={term.notice}>
                      <th scope="row">{term.notice}</th>
                      <td>{term.outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="travel-info__fine-print">
              This schedule applies to the ground arrangements described in your confirmed proposal. Airline tickets, visa or permit fees, bank charges, and other third-party services may carry their own non-refundable terms. Any SDF refund is processed under Department of Immigration rules. Your final proposal and confirmation will state the terms that apply to your journey.
            </p>
          </section>

          <section id="before-you-go" className="travel-info__section">
            <p className="eyebrow">Worth preparing</p>
            <h2>A few more things to know.</h2>
            <div className="travel-preparation">
              <article>
                <h3>Travel insurance</h3>
                <p>Comprehensive cover is strongly recommended, including journey cancellation, medical care, emergency evacuation, and the activities you plan to undertake.</p>
              </article>
              <article>
                <h3>Flights & connections</h3>
                <p>Mountain weather can affect schedules. Leave comfortable connection time and keep essential medication and one change of clothes in your hand luggage.</p>
              </article>
              <article>
                <h3>Health & altitude</h3>
                <p>Tell us about mobility needs, allergies, or medical considerations early. If you have concerns about altitude or trekking, speak with your doctor before travel.</p>
              </article>
              <article>
                <h3>What to wear</h3>
                <p>Bring layers, rain protection, sun protection, and well-worn walking shoes. Shoulders and knees should be covered when entering temples and dzongs.</p>
              </article>
              <article>
                <h3>Money & connectivity</h3>
                <p>Cards work in many hotels and larger shops, but carry some cash for small purchases outside the main towns. Mobile coverage varies on mountain roads and in remote valleys.</p>
              </article>
              <article>
                <h3>Respecting sacred places</h3>
                <p>Follow your guide’s direction, remove shoes where requested, move quietly during rituals, and always ask before photographing people or religious interiors.</p>
              </article>
            </div>
          </section>

          <aside className="travel-info__note">
            <p className="eyebrow">A final note</p>
            <h2>Rules can change. Your welcome does not.</h2>
            <p>
              Government fees, entry requirements, and airline schedules may be updated after this page is published. Before payment, Bhutan Beckons will confirm the current requirements for your nationality, dates, and route.
            </p>
          </aside>
        </div>
      </section>

      <section className="closing-band">
        <div className="content-shell closing-band__inner">
          <h2>Ready when you are.</h2>
          <div className="closing-band__copy">
            <p>Tell us when you hope to travel and what matters most. We will help make the practical details feel simple.</p>
            <ButtonLink href="/contact" inverse>Plan my journey</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
