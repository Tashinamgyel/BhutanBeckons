import Link from "next/link";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  inverse?: boolean;
}

export function ButtonLink({ href, children, inverse = false }: ButtonLinkProps) {
  return (
    <Link className={`button-link${inverse ? " button-link--inverse" : ""}`} href={href}>
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </Link>
  );
}
