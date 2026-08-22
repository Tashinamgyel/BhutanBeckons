import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="content-shell site-footer__grid">
        <div>
          <Link className="wordmark wordmark--footer" href="/" translate="no">
            <span>Bhutan</span>
            <span>Beckons</span>
          </Link>
          <p>Journeys made slowly, locally, and with care.</p>
        </div>
        <nav aria-label="Explore Bhutan Beckons">
          <p className="footer-label">Explore</p>
          <Link href="/journeys">Journeys</Link>
          <Link href="/destinations">Destinations</Link>
          <Link href="/experiences">Experiences</Link>
          <Link href="/journal">Bhutan Journal</Link>
        </nav>
        <nav aria-label="Work with Bhutan Beckons">
          <p className="footer-label">Together</p>
          <Link href="/about">About us</Link>
          <Link href="/partner-with-us">Partner with us</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="site-footer__contact">
          <p className="footer-label">From Bhutan</p>
          <p>Thimphu, Kingdom of Bhutan</p>
          <a href="mailto:hello@bhutanbeckons.com">hello@bhutanbeckons.com</a>
        </div>
      </div>
      <div className="content-shell site-footer__base">
        <p>© {new Date().getFullYear()} Bhutan Beckons</p>
        <p>Travel deeper. Tread lightly.</p>
      </div>
    </footer>
  );
}
