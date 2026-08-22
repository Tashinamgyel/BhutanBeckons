import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { MediaFrame } from "@/components/MediaFrame";
import { RouteThread } from "@/components/RouteThread";
import { SectionHeading } from "@/components/SectionHeading";
import { getJourney, journeys } from "@/data/journeys";

interface JourneyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return journeys.map((journey) => ({ slug: journey.slug }));
}

export async function generateMetadata({ params }: JourneyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const journey = getJourney(slug);

  if (!journey) {
    return {};
  }

  return {
    title: journey.name,
    description: `${journey.subtitle} ${journey.tagline}`,
    openGraph: {
      title: `${journey.name} | Bhutan Beckons`,
      description: journey.subtitle,
      images: journey.heroMedia.src ? [{ url: journey.heroMedia.src, alt: journey.heroMedia.alt }] : [],
    },
  };
}

export default async function JourneyPage({ params }: JourneyPageProps) {
  const { slug } = await params;
  const journey = getJourney(slug);

  if (!journey) {
    notFound();
  }

  const practicalRows = [
    ["Best time to travel", journey.practicalInfo.bestTimeToTravel],
    ["Difficulty", journey.practicalInfo.difficulty],
    ["Recommended for", journey.practicalInfo.recommendedFor],
    ["Group size", journey.practicalInfo.groupSize],
    ["Starting point", journey.practicalInfo.startingPoint],
    ["Duration", journey.practicalInfo.duration],
  ];

  return (
    <>
      <section className="journey-hero" aria-labelledby="journey-title">
        <div className="journey-hero__image">
          {journey.heroMedia.src ? (
            <Image
              src={journey.heroMedia.src}
              alt={journey.heroMedia.alt}
              fill
              loading="eager"
              fetchPriority="high"
              sizes="100vw"
            />
          ) : null}
        </div>
        <div className="journey-hero__content content-shell">
          <p className="eyebrow">A Bhutan Beckons journey</p>
          <h1 id="journey-title">{journey.name}</h1>
          <p className="journey-hero__subtitle">{journey.subtitle}</p>
          <p className="utility-line">
            {journey.durationDays} days · {journey.themes.join(" · ")}
          </p>
          <ButtonLink href="/contact" inverse>
            Plan this journey
          </ButtonLink>
        </div>
      </section>

      <section className="journey-section journey-story">
        <div className="content-shell journey-story__grid">
          <div>
            <p className="eyebrow">The story</p>
            <h2>{journey.tagline}</h2>
          </div>
          <div className="journey-story__copy">
            {journey.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="journey-section" aria-labelledby="highlights-title">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Experience highlights"
            title="What stays with you."
            intro="The defining moments of this journey, chosen for depth rather than spectacle."
            align="split"
          />
          <div className="highlights-grid">
            {journey.highlights.map((highlight) => (
              <article className="highlight-card" key={highlight.title}>
                <MediaFrame media={highlight.image} className="highlight-card__media" />
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="journey-section" aria-labelledby="itinerary-title">
        <div className="content-shell itinerary-layout">
          <aside className="itinerary-aside">
            <p className="eyebrow">The journey</p>
            <h2 id="itinerary-title">Day by day, never hurried.</h2>
            <RouteThread locations={journey.routeMap} compact />
          </aside>
          <ol className="itinerary-list">
            {journey.itinerary.map((day) => (
              <li className="itinerary-day" key={day.dayNumber}>
                <span className="itinerary-day__number">{String(day.dayNumber).padStart(2, "0")}</span>
                <div>
                  <h3>{day.title}</h3>
                  <p className="itinerary-day__location">Location · {day.location}</p>
                  <p>{day.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="journey-section" aria-labelledby="included-title">
        <div className="content-shell">
          <SectionHeading eyebrow="The details" title="What’s included." />
          <div className="included-grid">
            <div className="included-column">
              <h3 id="included-title">Included</h3>
              <ul>
                {journey.included.map((item) => (
                  <li key={item}><span aria-hidden="true">✓</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="included-column">
              <h3>Not included</h3>
              <ul>
                {journey.notIncluded.map((item) => (
                  <li key={item}><span aria-hidden="true">×</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="journey-section" aria-labelledby="stay-title">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Where you’ll stay"
            title="Places with a sense of place."
            intro="Properties are selected for warmth, location, and the way they belong to their landscape. Final choices follow your preferred travel style."
            align="split"
          />
          <div className="stay-grid">
            {journey.accommodations.map((stay) => (
              <article className="stay-card" key={`${stay.propertyName}-${stay.location}`}>
                <MediaFrame media={stay.image} className="stay-card__media" />
                <h3 id={stay === journey.accommodations[0] ? "stay-title" : undefined}>{stay.propertyName}</h3>
                <p className="utility-line">{stay.location}</p>
                <p>{stay.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="journey-section" aria-labelledby="gallery-title">
        <div className="content-shell">
          <SectionHeading eyebrow="Gallery" title="The Kingdom through your eyes." />
          <div className="gallery-grid" id="gallery-title">
            {journey.gallery.map((media, index) => (
              <MediaFrame
                key={`${media.alt}-${index}`}
                media={media}
                sizes="(max-width: 430px) 100vw, (max-width: 760px) 50vw, 40vw"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="journey-section" aria-labelledby="practical-title">
        <div className="content-shell">
          <SectionHeading eyebrow="Good to know" title="Practical, when you need it." />
          <div className="practical-list" id="practical-title">
            {practicalRows.map(([label, value], index) => (
              <details key={label} open={index === 0}>
                <summary>
                  <span>{label}</span>
                  <span>{value}</span>
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{value}. We will confirm the details for your dates when we shape your journey.</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {journey.customizable ? (
        <section className="content-shell customize-note">
          <h2>This journey can be customized.</h2>
          <p>The pace, stays, and experiences can be shaped around the way you want to travel.</p>
        </section>
      ) : null}

      <section className="closing-band">
        <div className="content-shell closing-band__inner">
          <h2>Make this journey yours.</h2>
          <div className="closing-band__copy">
            <p>No two journeys need to be the same. Tell us what you’re looking for and our travel specialists will tailor this experience around you.</p>
            <ButtonLink href={`/contact?journey=${journey.slug}`} inverse>Plan my journey</ButtonLink>
            <nav className="channel-links" aria-label="Contact options">
              <a href="/contact?channel=whatsapp">WhatsApp</a>
              <a href="/contact?channel=wechat">WeChat</a>
              <a href="mailto:hello@bhutanbeckons.com">Email</a>
              <a href="/contact?channel=call">Call</a>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
