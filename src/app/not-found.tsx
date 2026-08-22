import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <section className="not-found content-shell">
      <p className="eyebrow">The path ends here</p>
      <h1>Page not found.</h1>
      <p>This page may have moved, but the kingdom is still waiting.</p>
      <ButtonLink href="/journeys">Return to journeys</ButtonLink>
    </section>
  );
}
