import type { Metadata } from "next";
import { JourneyCard } from "@/components/JourneyCard";
import { PageIntro } from "@/components/PageIntro";
import { journeys } from "@/data/journeys";

export const metadata: Metadata = {
  title: "Journeys",
  description:
    "Explore 5 thoughtfully paced journeys through western Bhutan, from a compact mountain escape to a full overland passage.",
};

export default function JourneysPage() {
  return (
    <>
      <PageIntro
        eyebrow="The collection"
        title="Journeys"
        intro="Curated experiences across the Kingdom. Begin with the story that speaks to you; we will shape the details around your pace."
      />
      <section className="catalogue" aria-label="Bhutan journeys">
        <div className="content-shell journey-grid">
          {journeys.map((journey, index) => (
            <JourneyCard
              key={journey.slug}
              journey={journey}
              featured={index === 0}
              eagerImage={index === 0}
            />
          ))}
        </div>
      </section>
    </>
  );
}
