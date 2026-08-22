interface PageIntroProps {
  eyebrow: string;
  title: string;
  intro: string;
}

export function PageIntro({ eyebrow, title, intro }: PageIntroProps) {
  return (
    <header className="page-intro content-shell">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-intro__copy">{intro}</p>
    </header>
  );
}
