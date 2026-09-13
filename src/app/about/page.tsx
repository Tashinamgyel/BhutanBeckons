import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { MediaFrame } from "@/components/MediaFrame";
import { PageIntro } from "@/components/PageIntro";
import { SectionHeading } from "@/components/SectionHeading";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "About Us",
  description: "Bhutan Beckons creates thoughtful private journeys grounded in local knowledge, personal care, and a lighter way of travelling.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="From Bhutan, with care"
        title="About us"
        intro="We believe the best way to share Bhutan is to stay close to what makes it whole: its people, living culture, landscapes, and sense of time."
      />
      <section className="content-section">
        <div className="content-shell home-craft__grid">
          <MediaFrame
            media={photos.kichuLhakhang}
            className="home-craft__image"
            sizes="(max-width: 760px) 100vw, 62vw"
          />
          <div>
            <p className="eyebrow">Our way of working</p>
            <h2>Local knowledge, personally held.</h2>
            <p>Bhutan Beckons is shaped by people who know these valleys as home. We work with guides, hosts, makers, and properties whose care can be felt in the details.</p>
            <p>Every journey begins as a conversation. We listen for the pace you enjoy, the questions you bring, and the moments you want room to remember.</p>
          </div>
        </div>
      </section>
      <section className="content-section">
        <div className="content-shell">
          <SectionHeading eyebrow="What guides us" title="A lighter footprint. A deeper connection." />
          <div className="content-grid">
            <article className="content-card"><h3>Travel slowly</h3><p>Fewer changes of place create more time for context, conversation, and genuine rest.</p></article>
            <article className="content-card"><h3>Keep value local</h3><p>We favour local guides, makers, hosts, and independently rooted experiences wherever possible.</p></article>
            <article className="content-card"><h3>Respect the invitation</h3><p>Bhutan is not a backdrop. We enter homes, temples, and landscapes with humility and clear local guidance.</p></article>
          </div>
        </div>
      </section>
      <section className="closing-band">
        <div className="content-shell closing-band__inner">
          <h2>Come closer to Bhutan.</h2>
          <div className="closing-band__copy"><p>Begin with a feeling, a season, or simply a question. We will take it from there.</p><ButtonLink href="/contact" inverse>Speak with us</ButtonLink></div>
        </div>
      </section>
    </>
  );
}
