import { caseStudy } from "@/data/content";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

export function CaseStudy() {
  const rows = [
    ["Challenge", caseStudy.challenge],
    ["Solution", caseStudy.solution],
    ["Result", caseStudy.result],
  ] as const;

  return (
    <section id="stories" className="section section--soft">
      <div className="container">
        <Reveal className="story">
          <div className="story__lead">
            <p className="eyebrow">{caseStudy.eyebrow}</p>
            <h2 className="display h2">{caseStudy.title}</h2>
            <p className="story__client"><Icon name="play" size={14} /> {caseStudy.client}</p>
            <div className="story__stats">
              {caseStudy.highlights.map((h) => (
                <div key={h.label}>
                  <strong className="display">{h.value}</strong>
                  <span>{h.label}</span>
                </div>
              ))}
            </div>
          </div>
          <ol className="story__steps">
            {rows.map(([k, v], i) => (
              <li key={k}>
                <span className="story__n">{i + 1}</span>
                <div>
                  <h3>{k}</h3>
                  <p>{v}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
