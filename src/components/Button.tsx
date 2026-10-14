import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "ghost" | "light";

type Common = { variant?: Variant; arrow?: boolean; children: ReactNode; className?: string };

export function ButtonLink({
  variant = "primary",
  arrow,
  children,
  className = "",
  ...rest
}: Common & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={`btn btn--${variant} ${className}`} {...rest}>
      <span>{children}</span>
      {arrow && <Icon name="arrow" size={18} />}
    </a>
  );
}

export function Button({
  variant = "primary",
  arrow,
  children,
  className = "",
  ...rest
}: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`btn btn--${variant} ${className}`} {...rest}>
      <span>{children}</span>
      {arrow && <Icon name="arrow" size={18} />}
    </button>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  center = false,
  light = false,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <header className={`section-head ${center ? "is-center" : ""} ${light ? "is-light" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display h2">{title}</h2>
      {sub && <p className="lead">{sub}</p>}
    </header>
  );
}
