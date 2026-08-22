import type { Metadata } from "next";
import { MediaFrame } from "@/components/MediaFrame";
import { PageIntro } from "@/components/PageIntro";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Meet the valleys and regions that shape a journey through Bhutan, from Paro and Punakha to Phobjikha and Bumthang.",
};

const destinations = [
  {
    name: "Paro",
    descriptor: "Valley of arrival",
    copy: "Farmhouses, blue pine, and the cliff-held silhouette of Taktsang make Paro both Bhutan’s threshold and one of its most affecting valleys.",
    media: { src: "/images/bhutan-valley-dawn.jpg", alt: "A Bhutanese dzong above a forested valley at dawn" },
  },
  {
    name: "Thimphu",
    descriptor: "The human-scale capital",
    copy: "A capital without traffic lights, where contemporary Bhutan unfolds among markets, small museums, workshops, and hillside temples.",
    media: { src: "/images/bhutan-weaver.jpg", alt: "A Bhutanese artisan working at a traditional loom" },
  },
  {
    name: "Punakha",
    descriptor: "Rivers and rice fields",
    copy: "Warmer air, terraced fields, and Bhutan’s great rivers meet at a dzong whose courtyards hold centuries of national memory.",
    media: { alt: "Punakha valley and river", label: "Punakha valley photography", tone: "gilt" as const },
  },
  {
    name: "Phobjikha",
    descriptor: "The wide quiet",
    copy: "A glacial valley of wetlands and farmsteads, best known as the winter home of black-necked cranes and for the space it gives the mind.",
    media: { alt: "Phobjikha glacial valley", label: "Phobjikha valley photography", tone: "juniper" as const },
  },
  {
    name: "Bumthang",
    descriptor: "Bhutan’s sacred heartland",
    copy: "Four valleys of old temples, buckwheat fields, village breweries, and stories that bring Bhutan’s spiritual history close to everyday life.",
    media: { alt: "Bumthang valley and temple", label: "Bumthang photography", tone: "oxblood" as const },
  },
];

export default function DestinationsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Across the kingdom"
        title="Destinations"
        intro="Bhutan is not one landscape. Each valley changes the light, the language of the road, and the shape of the days that follow."
      />
      <section className="content-section">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Valley by valley"
            title="Let geography set the pace."
            intro="Routes are shaped around altitude, season, and the quality of time between places—not around how many names fit on a map."
            align="split"
          />
          <div className="content-grid">
            {destinations.map((destination, index) => (
              <article className={`content-card${index === 0 ? " content-card--wide" : ""}`} key={destination.name}>
                <MediaFrame media={destination.media} className="content-card__media" />
                <p className="eyebrow">{destination.descriptor}</p>
                <h2>{destination.name}</h2>
                <p>{destination.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="statement-section">
        <div className="content-shell">
          <blockquote>“The road is part of what Bhutan asks you to notice.”</blockquote>
        </div>
      </section>
    </>
  );
}
