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
          <Link href="/travel-info">Travel Info</Link>
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
          <div className="site-footer__methods" aria-label="Direct contact channels">
            <a
              className="site-footer__method"
              href="https://wa.me/61819871288"
              aria-describedby="whatsapp-tashi-owner"
            >
              <span className="site-footer__method-label">WhatsApp</span>
              <span className="site-footer__method-value" translate="no">+61 819 871 288</span>
              <span className="site-footer__owner" id="whatsapp-tashi-owner" role="tooltip">
                Tashi Namgyel · Owner
              </span>
            </a>
            <a
              className="site-footer__method"
              href="https://wa.me/97517722593"
              aria-describedby="whatsapp-dorji-owner"
            >
              <span className="site-footer__method-label">WhatsApp</span>
              <span className="site-footer__method-value" translate="no">+975 17 722 593</span>
              <span className="site-footer__owner" id="whatsapp-dorji-owner" role="tooltip">
                Dorji Rabten · Owner
              </span>
            </a>
            <a
              className="site-footer__method"
              href="weixin://dl/chat?tashinamgyel_"
              aria-describedby="wechat-tashi-owner"
            >
              <span className="site-footer__method-label">WeChat</span>
              <span className="site-footer__method-value" translate="no">tashinamgyel_</span>
              <span className="site-footer__owner" id="wechat-tashi-owner" role="tooltip">
                Tashi Namgyel · Owner
              </span>
            </a>
          </div>
          <a
            className="site-footer__social"
            href="https://www.facebook.com/profile.php?id=61594284317512"
            target="_blank"
            rel="noreferrer"
            aria-label="Bhutan Beckons on Facebook (opens in a new tab)"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M14 8.5V11h3.5l-.55 4H14v9h-4v-9H7v-4h3V8.25C10 4.7 12.15 3 15.35 3c1.25 0 2.65.2 2.65.2v3.55h-1.85C14.7 6.75 14 7.45 14 8.5Z" />
            </svg>
            <span>Facebook</span>
          </a>
        </div>
      </div>
      <div className="content-shell site-footer__base">
        <p>© {new Date().getFullYear()} Bhutan Beckons</p>
        <p>Travel deeper. Tread lightly.</p>
      </div>
    </footer>
  );
}
