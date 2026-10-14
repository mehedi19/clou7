"use client";

import { useState } from "react";
import { solutions } from "@/data/content";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHead } from "./Button";

export function Solutions() {
  const [active, setActive] = useState(solutions.items[0].id);
  const item = solutions.items.find((s) => s.id === active)!;

  return (
    <section id="solutions" className="section">
      <div className="container">
        <Reveal>
          <SectionHead eyebrow={solutions.eyebrow} title={solutions.title} />
        </Reveal>

        <div className="pills" role="tablist" aria-label="Solutions by industry">
          {solutions.items.map((s) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={s.id === active}
              aria-controls="solution-panel"
              className={`pill ${s.id === active ? "is-active" : ""}`}
              onClick={() => setActive(s.id)}
            >
              <Icon name={s.icon} size={16} />
              {s.title.replace("Cloud 7 for ", "")}
            </button>
          ))}
        </div>

        <div className="solution" id="solution-panel" role="tabpanel" key={item.id}>
          <div className="solution__head">
            <span className="solution__icon"><Icon name={item.icon} size={28} /></span>
            <h3 className="display h3">{item.title}</h3>
          </div>
          <div className="solution__cols">
            {(
              [
                ["Challenges", item.challenges],
                ["Solutions", item.solutions],
                ["Benefits", item.benefits],
              ] as const
            ).map(([label, list]) => (
              <div className="solution__col" key={label}>
                <h4>{label}</h4>
                <ul>
                  {list.map((l) => (
                    <li key={l}>
                      <Icon name="check" size={16} />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <a href="#contact" className="link-arrow">
            Talk to us about {item.title.replace("Cloud 7 for ", "")} <Icon name="arrowUpRight" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
