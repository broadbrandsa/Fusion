"use client";

import { useEffect, useRef } from "react";

import { formatCredits, formatRand } from "@/lib/format";
import { cn } from "@/lib/utils";

/**
 * A figure that counts up when it scrolls into view.
 *
 * The brand book asks for tabular numerals precisely "so a balance does not
 * shift width as it counts", so a counting figure is the product's own
 * behaviour rather than an effect borrowed from somewhere else. It is used
 * only on quantities: a year, or a zero, is not a quantity and does not count.
 *
 * The final value is what renders, on the server and in the markup, so
 * anything without JavaScript, and every crawler, sees the real number. The
 * animation writes to the text node directly rather than through state,
 * because a re-render per frame is wasted work and React does not need to know
 * about a number on its way somewhere.
 *
 * Formatting is chosen by name rather than passed in, because a Server
 * Component cannot hand a function to a Client Component.
 */
const FORMATTERS = {
  rand: (n: number) => formatRand(Math.round(n)),
  credits: (n: number) => formatCredits(Math.round(n)),
  integer: (n: number) => String(Math.round(n)),
} as const;

export type CountUpFormat = keyof typeof FORMATTERS;

export function CountUp({
  value,
  format = "integer",
  durationMs = 1100,
  className,
}: {
  value: number;
  format?: CountUpFormat;
  durationMs?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const formatter = FORMATTERS[format];
    let frame = 0;
    let started = false;

    const run = () => {
      if (started) return;
      started = true;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / durationMs, 1);
        /* easeOutExpo: quick off the mark, settles rather than stops */
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        node.textContent = formatter(value * eased);
        if (t < 1) frame = requestAnimationFrame(tick);
        else node.textContent = formatter(value);
      };
      /* Zero on the frame before the first tick, so there is no flash of the
         final value. The wrapping Reveal is still at opacity 0 here anyway. */
      node.textContent = formatter(0);
      frame = requestAnimationFrame(tick);
    };

    const rect = node.getBoundingClientRect();
    /* Already scrolled past: no callback is coming, and the number is correct
       as rendered, so leave it alone. */
    if (rect.bottom < 0) return;

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      run();
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, durationMs, format]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {FORMATTERS[format](value)}
    </span>
  );
}
