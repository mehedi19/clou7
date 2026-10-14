import { insights } from "@/data/content";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHead } from "./Button";

export function Insights() {
  return (
    <section id="insights" className="section">
      <div className="container">
        <Reveal>
          <SectionHead eyebrow={insights.eyebrow} title={insights.title} />
        </Reveal>
        <ul className="insight-grid">
          {insights.articles.map((a, i) => (
            <Reveal as="li" key={a.title} delay={(i % 3) * 80}>
              <a href="#insights" className={`insight ${i === 0 ? "insight--feature" : ""}`}>
                <span className="insight__art" aria-hidden="true">
                  <Icon name={a.icon} size={i === 0 ? 56 : 36} />
                </span>
                <span className="insight__tag">{a.tag}</span>
                <h3>{a.title}</h3>
                <span className="insight__more">
                  Read <Icon name="arrow" size={16} />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
