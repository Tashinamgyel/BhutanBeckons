import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { JourneyCard } from "@/components/JourneyCard";
import { MediaFrame } from "@/components/MediaFrame";
import { RouteThread } from "@/components/RouteThread";
import { SectionHeading } from "@/components/SectionHeading";
import { journeys } from "@/data/journeys";
import { photos } from "@/data/photos";

export default function HomePage() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-hero__image">
          <Image
            src={`${photos.paroValley.src}?hero=home`}
            alt={photos.paroValley.alt}
            fill
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
            style={{ objectPosition: photos.paroValley.objectPosition }}
          />
        </div>
        <div className="home-hero__content content-shell">
          <p className="eyebrow">Private journeys · Kingdom of Bhutan</p>
          <h1 id="home-hero-title">The kingdom is calling.</h1>
          <p className="home-hero__lead">
            Travel slowly through a place where mountains shape the road and every welcome feels personal.
          </p>
          <ButtonLink href="/journeys" inverse>
            Find your journey
          </ButtonLink>
        </div>
      </section>

      <section className="home-intro">
        <div className="content-shell home-intro__grid">
          <div>
            <p className="eyebrow">Why Bhutan Beckons</p>
            <h2>Not a checklist. A story you enter.</h2>
          </div>
          <div className="home-intro__copy">
            <p>
              We create private journeys across Bhutan for people who would rather understand a place than hurry through it.
            </p>
            <p>
              Each route grows from local knowledge: the right valley for the season, the table worth lingering at, and the quiet hour when a monastery belongs to the mountain again.
            </p>
          </div>
        </div>
      </section>

      <section className="home-journeys">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Our journeys"
            title="Begin with a feeling."
            intro="A small collection of thoughtfully paced ways into Bhutan, each flexible enough to become your own."
            align="split"
          />
          <div className="journey-grid">
            {journeys.slice(0, 3).map((journey, index) => (
              <JourneyCard key={journey.slug} journey={journey} featured={index === 0} />
            ))}
          </div>
          <div style={{ marginTop: "clamp(3rem, 6vw, 6rem)" }}>
            <ButtonLink href="/journeys">Explore all journeys</ButtonLink>
          </div>
        </div>
      </section>

      <section className="home-craft">
        <div className="content-shell home-craft__grid">
          <MediaFrame
            media={photos.kichuLhakhang}
            className="home-craft__image"
            sizes="(max-width: 760px) 100vw, 62vw"
          />
          <div>
            <p className="eyebrow">Experience, not itinerary</p>
            <h2>Made by people who live here.</h2>
            <p>
              The moments that remain with you are rarely staged. A garden path beside an old lhakhang. Tea after a long road. A guide telling you why a valley matters to their family.
            </p>
            <ButtonLink href="/experiences" inverse>
              Meet Bhutan through experience
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="home-route">
        <div className="content-shell">
          <SectionHeading
            eyebrow="The route thread"
            title="Follow the line. Leave room for wonder."
            intro="A journey has a route, but the route is never the whole story. We connect Bhutan’s valleys in an order that feels natural, with time to notice what lies between."
            align="split"
          />
          <RouteThread locations={["Paro", "Thimphu", "Punakha", "Phobjikha", "Bumthang"]} />
        </div>
      </section>

      <section className="closing-band">
        <div className="content-shell closing-band__inner">
          <h2>Make the kingdom yours.</h2>
          <div className="closing-band__copy">
            <p>
              Tell us what draws you to Bhutan. We will shape the pace, places, and details around the way you want to travel.
            </p>
            <ButtonLink href="/contact" inverse>
              Plan my journey
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
