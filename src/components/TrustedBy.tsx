import { trusted } from "@/data/content";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  // Duplicate the list so the loop is seamless.
  const loop = [...items, ...items];
  return (
    <div className="marquee" role="group" aria-label={items.join(", ")}>
      <div className={`marquee__track ${reverse ? "is-reverse" : ""}`} aria-hidden="true">
        {loop.map((name, i) => (
          <span className="wordmark" key={`${name}-${i}`}>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TrustedBy() {
  return (
    <section className="trusted" aria-labelledby="trusted-title">
      <div className="container">
        <Reveal>
          <p className="eyebrow is-center" id="trusted-title">
            {trusted.eyebrow}
          </p>
        </Reveal>
      </div>
      <Marquee items={trusted.merchants} />
      <Marquee items={trusted.mobile} reverse />
      <div className="container">
        <Reveal className="banks">
          <span className="banks__label">Banking partners</span>
          <div className="banks__row">
            {Array.from({ length: trusted.banks }).map((_, i) => (
              <span className="bank-tile" key={i} title="Replace with partner bank logo">
                <Icon name="bank" size={20} />
                Partner bank
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
