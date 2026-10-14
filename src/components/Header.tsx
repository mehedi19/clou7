"use client";

import { useEffect, useState } from "react";
import { nav, solutions } from "@/data/content";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { ButtonLink } from "./Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    setDark(document.documentElement.dataset.theme === "dark");
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const toggleTheme = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("c7-theme", next);
    } catch {}
    setDark(!dark);
  };

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header__inner">
        <a href="#top" className="header__logo" aria-label="Cloud 7 home">
          <Logo />
        </a>

        <nav className="header__nav" aria-label="Primary">
          {nav.map((item) =>
            item.label === "Solutions" ? (
              <div className="dropdown" key={item.label}>
                <a href={item.href} className="header__link">
                  {item.label}
                  <Icon name="chevron" size={14} />
                </a>
                <div className="dropdown__panel" role="menu">
                  {solutions.items.map((s) => (
                    <a key={s.id} href={`#solutions`} role="menuitem" className="dropdown__item">
                      <span className="dropdown__icon">
                        <Icon name={s.icon} size={18} />
                      </span>
                      {s.title.replace("Cloud 7 for ", "")}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a key={item.label} href={item.href} className="header__link">
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="header__actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <Icon name={dark ? "sun" : "moon"} size={18} />
          </button>
          <ButtonLink href="#contact" className="header__cta">
            Become a Partner
          </ButtonLink>
          <button
            className="icon-btn header__burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>

      <div className={`drawer ${open ? "is-open" : ""}`}>
        <nav className="container drawer__nav" aria-label="Mobile">
          {nav.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
              <Icon name="arrow" size={18} />
            </a>
          ))}
          <ButtonLink href="#contact" onClick={() => setOpen(false)} arrow>
            Become a Partner
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
