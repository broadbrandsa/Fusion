import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * The small pill that sits above a headline. All three reference sites use one
 * and it does real work: it gives the eye somewhere to land before the display
 * type, and it lets a page label itself without a second heading level.
 */
export function Pill({
  children,
  className,
  withDot = false,
}: {
  children: ReactNode;
  className?: string;
  withDot?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-surface-high/60 px-3 py-1 text-xs font-medium text-ink-muted",
        className,
      )}
    >
      {withDot ? (
        <span aria-hidden="true" className="size-1.5 rounded-full bg-lime" />
      ) : null}
      {children}
    </span>
  );
}
