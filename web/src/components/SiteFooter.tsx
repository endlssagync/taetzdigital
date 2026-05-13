import "./SiteFooter.css"

export function SiteFooter() {
  return (
    <>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__brand">
            <img
              className="site-footer__logo"
              src="/taetz-logo-footer.png"
              alt="Taetz Digital"
              width={512}
              height={288}
              decoding="async"
              loading="lazy"
            />
          </div>
          <p className="site-footer__tagline">
            Performance ads and conversion websites for oil, gas, and field services teams.
          </p>
          <nav className="site-footer__nav" aria-label="Footer">
            <a className="site-footer__link" href="#">
              Privacy
            </a>
            <span className="site-footer__dot" aria-hidden>
              ·
            </span>
            <a className="site-footer__link" href="#">
              Terms
            </a>
            <span className="site-footer__dot" aria-hidden>
              ·
            </span>
            <a className="site-footer__link" href="mailto:hello@taetzdigital.com">
              Contact
            </a>
          </nav>
          <p className="site-footer__legal">© {new Date().getFullYear()} Taetz Digital. All rights reserved.</p>
        </div>
      </footer>

      <a
        className="float-support"
        href="mailto:hello@taetzdigital.com"
        aria-label="Message Taetz Digital"
      >
        <svg
          className="float-support__icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </>
  )
}
