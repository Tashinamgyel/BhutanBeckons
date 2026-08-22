import Link from "next/link";

const primaryNavigation = [
  { href: "/destinations", label: "Destinations" },
  { href: "/experiences", label: "Experiences" },
  { href: "/journeys", label: "Journeys" },
  { href: "/journal", label: "Bhutan Journal" },
  { href: "/about", label: "About us" },
];

function NavigationLinks() {
  return (
    <>
      {primaryNavigation.map((item) => (
        <Link key={item.href} href={item.href}>
          {item.label}
        </Link>
      ))}
    </>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner content-shell">
        {/* A native anchor guarantees home navigation if client routing is unavailable at the edge. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a className="wordmark wordmark--header" href="/" aria-label="Bhutan Beckons home" translate="no">
          <span>Bhutan</span>
          <span>Beckons</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <NavigationLinks />
        </nav>

        <Link className="header-contact" href="/contact">
          Plan a journey <span aria-hidden="true">→</span>
        </Link>

        <details className="mobile-menu">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            <NavigationLinks />
            <Link href="/partner-with-us">Partner with us</Link>
            <Link href="/contact">Plan a journey</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
