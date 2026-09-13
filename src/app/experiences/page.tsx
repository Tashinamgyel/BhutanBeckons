import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { MediaFrame } from "@/components/MediaFrame";
import { PageIntro } from "@/components/PageIntro";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Experiences",
  description: "Discover Bhutan through culture, food, walking, nature, wellbeing, and local connection.",
};

const experiences = [
  { title: "Living culture", copy: "Enter monasteries in the quiet hours, meet craftspeople at work, and understand traditions as part of the present—not a performance of the past.", media: photos.kichuLhakhang },
  { title: "Paths and peaks", copy: "Walk from gentle valley trails to high ridges, always with the time, support, and local knowledge to make effort feel rewarding.", media: photos.phuntsholingCloudSea },
  { title: "Food and farm life", copy: "Follow flavour to its source: market chillies, red-rice fields, farmhouse kitchens, and the people who turn a harvest into hospitality.", media: photos.riceStalk },
  { title: "Nature and wildlife", copy: "Move through crane valleys, subtropical forest, and alpine country with guides who recognise the landscape as habitat, livelihood, and home.", media: photos.mistyValley },
  { title: "Wellbeing and stillness", copy: "Find restoration in forest walks, hot-stone baths, simple movement, and days designed with enough quiet to hear yourself think.", media: photos.appleBlossom },
  { title: "Private celebrations", copy: "Mark a beginning, anniversary, or long-awaited reunion with privacy, thoughtful rituals, and details that feel personal rather than produced.", media: photos.bhutanFlag },
];

export default function ExperiencesPage() {
  return (
    <>
      <PageIntro
        eyebrow="How Bhutan is felt"
        title="Experiences"
        intro="The itinerary tells you where. Experience is what gives the journey meaning—and what you carry home."
      />
      <section className="content-section">
        <div className="content-shell content-grid">
          {experiences.map((experience, index) => (
            <article className={`content-card${index === 0 ? " content-card--wide" : ""}`} key={experience.title}>
              <MediaFrame media={experience.media} className="content-card__media" />
              <h2>{experience.title}</h2>
              <p>{experience.copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="closing-band">
        <div className="content-shell closing-band__inner">
          <h2>Start with what moves you.</h2>
          <div className="closing-band__copy">
            <p>Tell us the experiences you want more of. We will connect them into a journey that feels whole.</p>
            <ButtonLink href="/contact" inverse>Share what draws you</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
