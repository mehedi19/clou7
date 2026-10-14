import { footer } from "@/data/content";
import { ButtonLink } from "./Button";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="cta-band">
          <h2 className="display h2">
            Expand into <em>Bangladesh</em> with one integration.
          </h2>
          <div className="cta-band__actions">
            <ButtonLink href="#contact" variant="light" arrow>Become a Partner</ButtonLink>
            <ButtonLink href="#contact" variant="ghost">Schedule a Meeting</ButtonLink>
          </div>
        </div>

        <div className="footer__grid">
          <div className="footer__brand">
            <Logo light />
            <p>Digital commerce infrastructure for global platforms entering Bangladesh.</p>
          </div>
          {footer.columns.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h3>{c.title}</h3>
              <ul>
                {c.links.map((l) => (
                  <li key={l}><a href="#top">{l}</a></li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Cloud 7 Limited. All rights reserved.</p>
          <ul>
            {footer.legal.map((l) => (
              <li key={l}><a href="#top">{l}</a></li>
            ))}
          </ul>
          <ul>
            {footer.social.map((s) => (
              <li key={s}><a href="#top">{s}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
