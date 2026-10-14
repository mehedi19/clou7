import { industries } from "@/data/content";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHead } from "./Button";

export function Industries() {
  return (
    <section id="industries" className="section section--soft">
      <div className="container">
        <Reveal>
          <SectionHead
            eyebrow="Industries We Serve"
            title="Digital services of every kind, local from day one"
            center
          />
        </Reveal>
        <ul className="industry-grid">
          {industries.map((it, i) => (
            <Reveal as="li" key={it.title} delay={(i % 4) * 70}>
              <a href="#solutions" className="industry">
                <span className="industry__icon"><Icon name={it.icon} size={24} /></span>
                <span className="industry__title">{it.title}</span>
                <Icon name="arrowUpRight" size={18} className="industry__go" />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
