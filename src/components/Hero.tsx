"use client";

import { useEffect, useRef } from "react";
import { hero } from "@/data/content";
import { ButtonLink } from "./Button";
import { Icon } from "./Icon";
import { WorldMap } from "./WorldMap";

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Soft pointer-follow glow (disabled for reduced motion via CSS).
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
      el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section id="top" ref={ref} className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="eyebrow hero__eyebrow rise" style={{ ["--d" as string]: "0ms" }}>
          <span className="eyebrow__dot" />
          {hero.eyebrow}
        </p>
        <h1 className="display h1 rise" style={{ ["--d" as string]: "80ms" }}>
          {hero.titleBefore} <em>{hero.titleAccent}</em>
        </h1>
        <p className="lead hero__sub rise" style={{ ["--d" as string]: "180ms" }}>
          {hero.sub}
        </p>
        <div className="hero__ctas rise" style={{ ["--d" as string]: "280ms" }}>
          <ButtonLink href={hero.ctas.primary.href} arrow>
            {hero.ctas.primary.label}
          </ButtonLink>
          <ButtonLink href={hero.ctas.secondary.href} variant="secondary">
            {hero.ctas.secondary.label}
          </ButtonLink>
          <a href={hero.ctas.tertiary.href} className="link-arrow">
            {hero.ctas.tertiary.label}
            <Icon name="arrowUpRight" size={16} />
          </a>
        </div>
      </div>

      <div className="container">
        <div className="hero__stage rise" style={{ ["--d" as string]: "380ms" }}>
          <WorldMap />
          <ul className="hero__channels" aria-label="Supported payment channels">
            {hero.channels.map((c, i) => (
              <li key={c.label} style={{ ["--i" as string]: i }}>
                <Icon name={c.icon} size={18} />
                {c.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
