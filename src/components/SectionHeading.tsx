interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "split";
}

export function SectionHeading({ eyebrow, title, intro, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
      </div>
      {intro ? <p className="section-heading__intro">{intro}</p> : null}
    </div>
  );
}
