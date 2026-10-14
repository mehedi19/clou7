import { whyChoose } from "@/data/content";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHead } from "./Button";

export function WhyChoose() {
  return (
    <section id="why-cloud7" className="section">
      <div className="container">
        <Reveal>
          <SectionHead eyebrow={whyChoose.eyebrow} title={whyChoose.title} />
        </Reveal>
        <ul className="why-grid">
          {whyChoose.items.map((it, i) => (
            <Reveal as="li" key={it.title} delay={(i % 3) * 90} className="why">
              <span className="why__icon"><Icon name={it.icon} size={24} /></span>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
