import type { Metadata } from "next";
import { MediaFrame } from "@/components/MediaFrame";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Bhutan Journal",
  description: "Field notes from Bhutan on seasons, culture, food, paths, and travelling with greater attention.",
};

const notes = [
  { title: "When the cranes return to Phobjikha", category: "Seasons", date: "Field note · Winter", excerpt: "The valley changes when the black-necked cranes arrive—not loudly, but in the way people look up and make room.", media: { alt: "Cranes in the Phobjikha valley", label: "Phobjikha winter photography", tone: "juniper" as const } },
  { title: "Why the road to Punakha should take all morning", category: "On the road", date: "Field note · Western Bhutan", excerpt: "There are journeys where the pauses explain more than the destination: a high pass, a roadside kettle, a village path below the clouds.", media: { src: "/images/bhutan-valley-dawn.jpg", alt: "Layered Bhutanese mountains at dawn" } },
  { title: "A table set around the chilli", category: "Food", date: "Field note · Local life", excerpt: "Ema datshi is often introduced as Bhutan’s national dish. At home, it is better understood as a conversation between season, appetite, and family habit.", media: { alt: "A Bhutanese farmhouse meal", label: "Bhutanese food photography", tone: "gilt" as const } },
  { title: "The patience inside a handwoven kira", category: "Craft", date: "Field note · Thimphu", excerpt: "Look closely at the cloth and time becomes visible: counted threads, remembered patterns, and decisions made one line at a time.", media: { src: "/images/bhutan-weaver.jpg", alt: "A Bhutanese weaver working at a handloom" } },
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
