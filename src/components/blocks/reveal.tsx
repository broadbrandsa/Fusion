"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Fade-up on scroll, the one interaction all three reference sites lean on.
 * Habitline drives 89 of these through Webflow; an IntersectionObserver does
 * the same job without shipping an animation runtime.
 *
 * Fires once. Nothing animates back out on the way up, because a block that
 * re-hides when you scroll past it reads as a bug rather than as polish.
 *
 * The visual work is entirely in globals.css, and it is wrapped in a
 * prefers-reduced-motion query, so this component sets a flag and nothing more.
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

    /* Anything already scrolled past at mount is shown immediately. That
       covers a reload with a restored scroll position and a deep link into a
       later section, where an element above the viewport would otherwise never
       intersect and would sit at opacity 0 if the reader scrolled back up.
       Elements still on screen or below keep their entrance. */
    if (node.getBoundingClientRect().bottom < 0) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
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
