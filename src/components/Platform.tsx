"use client";

import { useEffect, useRef, useState } from "react";
import { platform } from "@/data/content";
import { Button, SectionHead } from "./Button";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

const STEP_MS = 900;

const LOG = [
  "POST /v1/payments → request received",
  "Risk score 0.02 · routed to best channel",
  "Channel authorised the payment",
  "Funds captured · reconciliation queued",
  "Consumer confirmed · webhook delivered ✓",
];

/** Interactive architecture diagram: click "Simulate a payment" or select any stage. */
export function Platform() {
  const [step, setStep] = useState(-1); // -1 idle, 0..4 running
  const [running, setRunning] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const run = () => {
    if (running) return;
    setPicked(null);
    setRunning(true);
    setStep(0);
  };

  useEffect(() => {
    if (!running) return;
    if (step >= platform.stages.length - 1) {
      timer.current = setTimeout(() => setRunning(false), STEP_MS + 400);
    } else {
      timer.current = setTimeout(() => setStep((s) => s + 1), STEP_MS);
    }
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [running, step]);

  const highlight = running || step >= 0 ? step : -1;
  const shown = picked ?? (step >= 0 ? step : null);

  return (
    <section id="platform" className="section platform">
      <div className="container">
        <Reveal>
          <SectionHead eyebrow={platform.eyebrow} title={platform.title} sub={platform.sub} center />
        </Reveal>

        <Reveal className="flow-card">
          <div className="flow" role="list">
            {platform.stages.map((s, i) => (
              <div className="flow__item" role="listitem" key={s.id}>
                <button
                  className={`flow__node ${i <= highlight && highlight >= 0 ? "is-lit" : ""} ${
                    i === highlight && running ? "is-current" : ""
                  } ${picked === i ? "is-picked" : ""}`}
                  onClick={() => {
                    if (!running) setPicked(i);
                  }}
                  aria-pressed={picked === i}
                >
                  <span className="flow__icon"><Icon name={s.icon} size={24} /></span>
                  <strong>{s.title}</strong>
                  {s.id === "channels" && (
                    <span className="flow__chips">
                      {platform.channelList.map((c) => (
                        <i key={c}>{c}</i>
                      ))}
                    </span>
                  )}
                </button>
                {i < platform.stages.length - 1 && (
                  <span className={`flow__link ${i < highlight ? "is-lit" : ""}`} aria-hidden="true">
                    <i />
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="flow__foot">
            <div className="flow__console" aria-live="polite">
              {shown === null ? (
                <p className="muted">Select a stage, or run a simulated payment to watch it travel through the platform.</p>
              ) : (
                <>
                  <p className="flow__console-title">{platform.stages[shown].title}</p>
                  <p>{platform.stages[shown].text}</p>
                  {step >= 0 && picked === null && <code>{LOG[shown]}</code>}
                </>
              )}
            </div>
            <Button onClick={run} disabled={running} arrow>
              {running ? "Processing…" : step >= 0 ? "Run again" : "Simulate a payment"}
            </Button>
          </div>
        </Reveal>

        <ul className="cap-grid">
          {platform.capabilities.map((c, i) => (
            <Reveal as="li" key={c.title} delay={(i % 4) * 70} className="cap">
              <span className="cap__icon"><Icon name={c.icon} size={20} /></span>
              {c.title}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
