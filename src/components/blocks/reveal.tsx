"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Fade-up on scroll, the one interaction all three reference sites lean on.
 * Habitline drives 89 of these through Webflow; this does the same job without
 * shipping an animation runtime.
 *
 * Geometry decides, not just the observer. An IntersectionObserver never
 * delivers a callback while the document is hidden, and fronting the tab later
 * produces no intersection *change* to fire, so a page opened in a background
 * tab would come to the front blank. Anything already in or above the viewport
 * is therefore revealed from a measurement instead.
 *
 * The entrance still plays. The element paints at opacity 0 from CSS, the flag
 * flips on the next frame, and the transition runs from there.
 *
 * Fires once, and never animates back out, because a block that re-hides as
 * you scroll past reads as a bug rather than as polish.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  /** Stagger in milliseconds. The references sit around 80 to 120. */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "figure";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      setVisible(true);
    };

    /* Already on screen, or already scrolled past. Reveal on the next frame so
       the transition has a starting state to animate from. */
    const showIfReached = () => {
      const rect = node.getBoundingClientRect();
      const reached =
        rect.bottom < 0 || rect.top < window.innerHeight * 0.92;
      if (reached) {
        requestAnimationFrame(show);
        return true;
      }
      return false;
    };

    if (showIfReached()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );
    observer.observe(node);

    /* Covers the case above: mounted while hidden, so nothing was ever
       reported. On becoming visible, measure again. */
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible" && showIfReached()) {
        observer.disconnect();
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", className)}
      data-visible={visible ? "true" : "false"}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as never) : undefined}
    >
      {children}
    </Tag>
  );
}
