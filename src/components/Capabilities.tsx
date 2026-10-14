"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { capabilities, type Capability } from "@/data/content";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHead } from "./Button";

/** Small illustrative UI mock per capability (purely presentational). */
function Visual({ id }: { id: Capability["id"] }) {
  switch (id) {
    case "dcb":
      return (
        <div className="mock mock--phone">
          <div className="mock__bar" />
          <p className="mock__title">Confirm purchase</p>
          <p className="mock__amount">৳ 199<small>/month</small></p>
          <div className="mock__row"><span>Charge to</span><b>Mobile balance</b></div>
          <div className="mock__row"><span>Operator</span><b>Auto-detected</b></div>
          <div className="mock__btn">Pay with mobile balance</div>
        </div>
      );
    case "mfs":
      return (
        <div className="mock mock--list">
          <p className="mock__title">Choose a wallet</p>
          {["bKash", "Nagad", "Rocket"].map((w, i) => (
            <div className={`mock__option ${i === 0 ? "is-selected" : ""}`} key={w}>
              <span className="mock__dot" />
              {w}
              {i === 0 && <Icon name="check" size={16} />}
            </div>
          ))}
        </div>
      );
    case "cards":
      return (
        <div className="mock mock--card">
          <div className="creditcard">
            <span className="creditcard__chip" />
            <span>•••• •••• •••• 4242</span>
            <span className="creditcard__net">Visa · Mastercard · UnionPay · Amex</span>
          </div>
          <div className="mock__row"><span>3-D Secure</span><b>Verified</b></div>
        </div>
      );
    case "banking":
      return (
        <div className="mock mock--list">
          <p className="mock__title">Bank transfer</p>
          <div className="mock__row"><span>Amount</span><b>৳ 1,250,000</b></div>
          <div className="mock__row"><span>Status</span><b className="ok">Instant · Confirmed</b></div>
          <div className="mock__progress"><i /></div>
        </div>
      );
    case "settlement":
      return (
        <div className="mock mock--table">
          <p className="mock__title">Settlement report</p>
          {[
            ["Gross collected", "৳ 4.2M"],
            ["Fees & tax", "− ৳ 0.4M"],
            ["Net payout", "USD 31,480"],
          ].map(([a, b]) => (
            <div className="mock__row" key={a}><span>{a}</span><b>{b}</b></div>
          ))}
          <div className="mock__tag"><Icon name="check" size={14} /> Reconciled</div>
        </div>
      );
    default:
      return (
        <div className="mock mock--list">
          <p className="mock__title">Compliance status</p>
          {["KYC", "AML screening", "Bangladesh Bank", "VAT & tax"].map((c) => (
            <div className="mock__option is-selected" key={c}>
              <Icon name="check" size={16} /> {c}
            </div>
          ))}
        </div>
      );
  }
}

export function Capabilities() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const current = capabilities[active];

  // Roving-tabindex keyboard support (arrows / Home / End).
  const onKey = (e: KeyboardEvent) => {
    const last = capabilities.length - 1;
    let next = active;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setActive(next);
    tabsRef.current[next]?.focus();
  };

  return (
    <section id="capabilities" className="section capabilities">
      <div className="container">
        <Reveal>
          <SectionHead
            eyebrow="What We Do"
            title="Every way Bangladesh pays, behind one integration"
            sub="DCB is one channel among several. Cloud 7 unifies payments, settlement and compliance so you only integrate once."
          />
        </Reveal>

        <div className="tabs">
          <div className="tabs__list" role="tablist" aria-orientation="vertical" onKeyDown={onKey}>
            {capabilities.map((c, i) => (
              <button
                key={c.id}
                ref={(el) => {
                  tabsRef.current[i] = el;
                }}
                role="tab"
                id={`tab-${c.id}`}
                aria-selected={i === active}
                aria-controls={`panel-${c.id}`}
                tabIndex={i === active ? 0 : -1}
                className={`tab ${i === active ? "is-active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="tab__icon"><Icon name={c.icon} size={20} /></span>
                <span className="tab__text">
                  <strong>{c.title}</strong>
                  <small>{c.short}</small>
                </span>
                <Icon name="arrow" size={18} className="tab__arrow" />
              </button>
            ))}
          </div>

          <div
            className="tabs__panel"
            role="tabpanel"
            id={`panel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
            key={current.id}
          >
            <div className="panel__copy">
              <span className="panel__icon"><Icon name={current.icon} size={26} /></span>
              <h3 className="display h3">{current.title}</h3>
              <p>{current.body}</p>
              {current.meta && (
                <>
                  <p className="panel__label">{current.metaLabel}</p>
                  <ul className="chips">
                    {current.meta.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                </>
              )}
              <a href="#contact" className="link-arrow">
                Talk to our team <Icon name="arrowUpRight" size={16} />
              </a>
            </div>
            <div className="panel__visual" aria-hidden="true">
              <Visual id={current.id} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
