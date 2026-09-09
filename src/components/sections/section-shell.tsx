import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Shared shell every section sits in, so rhythm and max width are decided
 * once. Sections own their content, never their outer spacing.
 */
export function SectionShell({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("border-b border-border/60 px-6 py-20 md:px-10", className)}
    >
      <div className="mx-auto w-full max-w-5xl">
        {eyebrow ? (
          <p className="text-xs font-medium tracking-[0.14em] text-ink-faint uppercase">
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h2 className="mt-3 text-3xl md:text-4xl">{title}</h2>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}

/**
 * Placeholder body. Says what belongs in a section without pretending to be
 * the finished thing, so an unfinished page never reads as a shipped one.
 */
export function SectionPlaceholder({ note }: { note: string }) {
  return (
    <p className="max-w-2xl text-sm text-ink-muted">
      <span className="text-ink-faint">Placeholder. </span>
      {note}
    </p>
  );
}
