"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/data/content";
import { Button, SectionHead } from "./Button";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [route, setRoute] = useState(contact.routes[0].id);
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, route }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section section--soft">
      <div className="container contact">
        <Reveal>
          <SectionHead eyebrow={contact.eyebrow} title={contact.title} sub={contact.sub} />
          <div role="radiogroup" aria-label="Who would you like to reach?">
          <ul className="routes">
            {contact.routes.map((r) => (
              <li key={r.id}>
                <button
                  type="button"
                  role="radio"
                  aria-checked={route === r.id}
                  className={`route-card ${route === r.id ? "is-active" : ""}`}
                  onClick={() => setRoute(r.id)}
                >
                  <span className="route-card__icon"><Icon name={r.icon} size={20} /></span>
                  <span>
                    <strong>{r.title}</strong>
                    <small>{r.text}</small>
                  </span>
                </button>
              </li>
            ))}
          </ul>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form className="form" onSubmit={onSubmit}>
            <p className="form__to">
              <Icon name="mail" size={16} />
              Sending to <b>{contact.routes.find((r) => r.id === route)?.title}</b>
            </p>
            <div className="form__row">
              <label>
                Full name
                <input name="name" required autoComplete="name" placeholder="Jane Doe" />
              </label>
              <label>
                Work email
                <input name="email" type="email" required autoComplete="email" placeholder="jane@company.com" />
              </label>
            </div>
            <label>
              Company
              <input name="company" autoComplete="organization" placeholder="Your company" />
            </label>
            <label>
              How can we help?
              <textarea name="message" rows={4} required placeholder="Tell us about your service and the market you want to reach…" />
            </label>
            <Button type="submit" arrow disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
            </Button>
            <p className={`form__msg ${status}`} role="status" aria-live="polite">
              {status === "sent" && "Thanks — your message is on its way to the right team."}
              {status === "error" && "Something went wrong. Please try again or email us directly."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
