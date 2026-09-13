import type { Metadata } from "next";
import { MediaFrame } from "@/components/MediaFrame";
import { PageIntro } from "@/components/PageIntro";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Bhutan Journal",
  description: "Field notes from Bhutan on seasons, culture, food, paths, and travelling with greater attention.",
};

const notes = [
  { title: "When mist settles over the valley", category: "Seasons", date: "Field note · Monsoon", excerpt: "A valley changes when cloud lowers to the fields—not loudly, but in the way paths, farmhouses, and distant slopes reveal themselves one at a time.", media: photos.paroValley },
  { title: "Why the southern road deserves the long way", category: "On the road", date: "Field note · Southern Bhutan", excerpt: "There are journeys where the pauses explain more than the destination: a high bend, a roadside kettle, and a sea of cloud below the road.", media: photos.thimphuPhuntsholingHighway },
  { title: "What red rice says about the season", category: "Food", date: "Field note · Local life", excerpt: "A grain of red rice begins in the valley long before it reaches the table, carrying the weather, the harvest, and a family’s way of cooking with it.", media: photos.riceStalk },
  { title: "A garden held beside Kyichu Lhakhang", category: "Living culture", date: "Field note · Paro", excerpt: "Architecture, flowers, and daily ritual meet without ceremony here; the oldest places in Bhutan remain part of the present tense.", media: photos.kichuLhakhang },
];

export default function JournalPage() {
  return (
    <>
      <PageIntro
        eyebrow="Notes from the kingdom"
        title="Bhutan Journal"
        intro="Stories for the curious traveller: what changes with the season, what deserves context, and what becomes visible when you slow down."
      />
      <section className="content-section">
        <div className="content-shell journal-grid">
          {notes.map((note) => (
            <article className="journal-card" key={note.title}>
              <MediaFrame media={note.media} className="journal-card__media" />
              <time>{note.date}</time>
              <p className="eyebrow">{note.category}</p>
              <h2>{note.title}</h2>
              <p>{note.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
