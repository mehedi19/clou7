"use client";

import { useEffect, useRef, useState } from "react";

/** Returns a ref + boolean that flips to true once the element enters the viewport. */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit & { once?: boolean } = { threshold: 0.2, once: true },
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  const { once = true, threshold = 0.2, rootMargin } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold, rootMargin]);

  return [ref, inView] as const;
}
