"use client";

import { useEffect, useRef } from "react";
import { bangladesh } from "@/data/content";
import { ButtonLink } from "./Button";
import { Counter } from "./Counter";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

export function WhyBangladesh() {
  const ref = useRef<HTMLElement>(null);

  // Light parallax on decorative orbs.
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      const r = el.getBoundingClientRect();
      const progress = (window.innerHeight - r.top) / (window.innerHeight + r.height);
      el.style.setProperty("--py", `${(progress - 0.5) * 120}px`);
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="why-bangladesh" ref={ref} className="section bd">
      <div className="bd__orb bd__orb--1" aria-hidden="true" />
      <div className="bd__orb bd__orb--2" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <header className="section-head is-light">
            <p className="eyebrow">{bangladesh.eyebrow}</p>
            <h2 className="display h2">{bangladesh.title}</h2>
          </header>
        </Reveal>

        <div className="bd__counters">
          {bangladesh.counters.map((c, i) => (
            <Reveal key={c.label} delay={i * 100} className="bd__counter">
              <strong className="display">
                <Counter value={c.value} suffix={c.suffix} />
              </strong>
              <span>{c.label}</span>
            </Reveal>
          ))}
        </div>

        <ul className="bd__tiles">
          {bangladesh.tiles.map((t, i) => (
            <Reveal as="li" key={t.label} delay={i * 70} className="bd__tile">
              <Icon name={t.icon} size={22} />
              <strong>{t.big}</strong>
              <span>{t.label}</span>
            </Reveal>
          ))}
        </ul>

        <Reveal className="bd__cta">
          <h3 className="display h3">{bangladesh.cta.label}.</h3>
          <ButtonLink href={bangladesh.cta.href} variant="light" arrow>
            Start the conversation
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
