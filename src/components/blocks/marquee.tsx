import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Infinite horizontal strip. Habitline uses these for its habit rows; here it
 * carries the model logos, which is a scannable way to say "these are the AIs
 * that answer" without a paragraph.
 *
 * Children are rendered twice so the -50% keyframe lands on a seam. The second
 * copy is hidden from assistive technology, and the whole thing holds still
 * under prefers-reduced-motion and while hovered.
 */
export function Marquee({
  children,
  className,
  durationSeconds = 42,
  fade = true,
}: {
  children: ReactNode;
  className?: string;
  durationSeconds?: number;
  fade?: boolean;
}) {
  return (
    <div
      className={cn("marquee group relative overflow-hidden", className)}
      style={
        fade
          ? {
              maskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }
          : undefined
      }
    >
      <div
        className="marquee-track flex w-max items-center"
        style={
          { "--marquee-duration": `${durationSeconds}s` } as React.CSSProperties
        }
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div aria-hidden="true" className="flex shrink-0 items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
