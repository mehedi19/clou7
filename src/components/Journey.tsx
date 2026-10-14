"use client";

import { useEffect, useState } from "react";
import { journey } from "@/data/content";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Reveal } from "./Reveal";
import { SectionHead } from "./Button";

/** Horizontal timeline. Steps light up in sequence on scroll-in; click any step for detail. */
export function Journey() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.35, once: true });
  const reduced = useReducedMotion();
  const [reached, setReached] = useState(-1);
  const [selected, setSelected] = useState(0);
  const total = journey.steps.length;

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setReached(total - 1);
      return;
    }
    let i = -1;
    const id = setInterval(() => {
      i += 1;
      setReached(i);
      setSelected(i);
      if (i >= total - 1) clearInterval(id);
    }, 480);
    return () => clearInterval(id);
  }, [inView, reduced, total]);

  const pct = reached < 0 ? 0 : (reached / (total - 1)) * 100;

  return (
    <section id="journey" className="section section--soft">
      <div className="container">
        <Reveal>
          <SectionHead eyebrow={journey.eyebrow} title={journey.title} center />
        </Reveal>

        <div className="timeline" ref={ref}>
          <div className="timeline__scroll">
            <ol className="timeline__track" style={{ ["--n" as string]: total }}>
              <span className="timeline__rail" aria-hidden="true">
                <i style={{ width: `${pct}%` }} />
              </span>
              {journey.steps.map((s, i) => (
                <li key={s.title}>
                  <button
                    className={`step ${i <= reached ? "is-reached" : ""} ${i === selected ? "is-selected" : ""}`}
                    onClick={() => setSelected(i)}
                    aria-current={i === selected ? "step" : undefined}
                  >
                    <span className="step__dot">{i + 1}</span>
                    <span className="step__title">{s.title}</span>
                  </button>
                </li>
              ))}
            </ol>
          </div>

          <div className="timeline__detail" aria-live="polite" key={selected}>
            <span className="timeline__num display" aria-hidden="true">0{selected + 1}</span>
            <div>
              <h3 className="display h3">{journey.steps[selected].title}</h3>
              <p>{journey.steps[selected].text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
