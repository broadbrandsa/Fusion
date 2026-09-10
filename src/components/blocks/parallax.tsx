"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

/**
 * A background that drifts against the scroll.
 *
 * Added 10 September 2026 on instruction. It is a fourth kind of movement on
 * a site whose rule is entrance and interaction only, so it is worth being
 * clear about what it is: scroll-linked, never looping, and it stops the
 * moment the section leaves the viewport.
 *
 * Two things it must not do, both handled here.
 *
 * It must not expose the edge of the photograph. The wrapper is inset beyond
 * its container by `overscan` on both sides, so at full travel there is still
 * image under the frame. Travel is `strength` of the container height and
 * overscan is comfortably more than that.
 *
 * And it must not change what the text sits on. Moving the photograph moves
 * which of its rows pass under the headline, so the scrims in the hero and
 * the bundles section are measured across the whole travel rather than at
 * rest. Raising `strength` means measuring again.
 *
 * Transform only, so nothing reflows and it composites on the GPU. Under
 * `prefers-reduced-motion` the effect never starts and the image sits at its
 * resting position.
 */
export function Parallax({
  children,
  className,
  strength = 0.12,
  overscan = "18%",
}: {
  children: ReactNode;
  className?: string;
  /** Travel as a fraction of the container's height, at full scroll. */
  strength?: number;
  /** How far the wrapper reaches past its container, top and bottom. */
  overscan?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const host = node.parentElement;
    if (!host) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = host.getBoundingClientRect();
      const viewport = window.innerHeight;
      /* -1 as the section enters from below, +1 as it leaves at the top,
         clamped so a section far off screen still holds the end of its
         travel. Skipping the write entirely while off screen looked like the
         cheaper option and is not: the transform stays at zero, and the
         first scroll event after the section appears jumps it the whole way
         to its offset in one frame. */
      const centre = rect.top + rect.height / 2 - viewport / 2;
      const progress = Math.max(
        -1,
        Math.min(1, centre / (viewport / 2 + rect.height / 2)),
      );
      const offset = -progress * strength * rect.height;
      node.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [strength]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("absolute inset-x-0 will-change-transform", className)}
      style={{ top: `-${overscan}`, bottom: `-${overscan}` }}
    >
      {children}
    </div>
  );
}
