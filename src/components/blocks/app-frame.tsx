import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * A phone shell for the app-screen recreations. Every reference site puts real
 * interface inside its feature cards, and for this product the interface is
 * the argument, so it earns more space here than decoration would.
 *
 * Always graphite inside, whatever tone the surrounding section is, because
 * that is what the app actually opens to.
 */
export function AppFrame({
  children,
  className,
  label,
}: {
  children: ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "tone-graphite rounded-[2rem] border border-white/10 p-2 shadow-2xl shadow-black/40",
        className,
      )}
    >
      <div className="overflow-hidden rounded-[1.5rem] bg-ground">
        <div className="flex items-center justify-between px-4 pt-3 pb-1">
          <span className="figure text-xs text-ink">12:38</span>
          <span aria-hidden="true" className="flex items-center gap-1">
            <span className="h-2.5 w-3.5 rounded-[2px] bg-ink-faint/70" />
            <span className="h-2.5 w-3 rounded-[2px] bg-ink-faint/70" />
            <span className="h-2.5 w-5 rounded-[3px] bg-ink-faint/40" />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

/** A bare screen surface, for use inside a bento card without the phone shell. */
export function ScreenCard({
  children,
  className,
  label,
}: {
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label}
      className={cn(
        "tone-graphite rounded-xl border border-white/10 bg-surface p-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
