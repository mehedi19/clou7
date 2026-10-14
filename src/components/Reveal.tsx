"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type Props = {
  children: ReactNode;
  as?: ElementType;
  delay?: number; // ms
  className?: string;
};

/** Fades/slides children in when scrolled into view. Disabled automatically for reduced-motion users (see base.css). */
export function Reveal({ children, as: Tag = "div", delay = 0, className = "" }: Props) {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.15, once: true });
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
