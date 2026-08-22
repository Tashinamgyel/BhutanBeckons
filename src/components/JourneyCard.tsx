import Link from "next/link";
import type { Journey } from "@/data/types";
import { MediaFrame } from "./MediaFrame";

interface JourneyCardProps {
  journey: Journey;
  featured?: boolean;
}

export function JourneyCard({ journey, featured = false }: JourneyCardProps) {
  return (
    <article className={`journey-card${featured ? " journey-card--featured" : ""}`}>
      <Link href={`/journeys/${journey.slug}`} aria-label={`Explore ${journey.name}`}>
        <MediaFrame
          media={journey.heroMedia}
          className="journey-card__media"
          sizes={featured ? "(max-width: 760px) 100vw, 66vw" : "(max-width: 760px) 100vw, 38vw"}
        />
        <div className="journey-card__body">
          <p className="utility-line">
            {journey.themes.join(" · ")} · {journey.durationDays} days
          </p>
          <h3>{journey.name}</h3>
          <p>{journey.tagline}</p>
          <span className="text-link">Enter this journey <span aria-hidden="true">→</span></span>
        </div>
      </Link>
    </article>
  );
}
