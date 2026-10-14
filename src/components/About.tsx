import { about } from "@/data/content";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <Reveal>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="display h2">{about.title}</h2>
          {about.body.map((p) => (
            <p className="lead" key={p}>
              {p}
            </p>
          ))}
          <blockquote className="pullquote">{about.quote}</blockquote>
        </Reveal>

        <div className="about__facts">
          {about.facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 90} className="fact">
              <strong className="display">{f.value}</strong>
              <span>{f.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
