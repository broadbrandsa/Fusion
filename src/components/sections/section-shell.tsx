import type { ReactNode } from "react";

import { Eyebrow } from "@/components/blocks/eyebrow";
import { cn } from "@/lib/utils";

/**
 * Shared shell every section sits in, so rhythm and max width are decided
 * once. Sections own their content, never their outer spacing.
 *
 * `tone` inverts a section to paper on a graphite page. The reference sites all
 * do this, and it earns its keep: two or three inverted sections give a long
 * page a pulse without adding a colour, which suits a brand where the money is
 * the only colour.
 */
export function SectionShell({
  id,
  eyebrow,
  title,
  lede,
  children,
  className,
  tone = "graphite",
  align = "start",
  width = "default",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  className?: string;
  tone?: "graphite" | "paper";
  align?: "start" | "center";
  width?: "default" | "narrow";
}) {
  const centered = align === "center";

  return (
    <section
      id={id}
      data-tone={tone}
      className={cn(
        "px-5 py-20 md:px-8 md:py-28",
        tone === "paper" && "tone-paper",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto w-full",
          width === "narrow" ? "max-w-3xl" : "max-w-[1200px]",
        )}
      >
        {eyebrow || title || lede ? (
          <div
            className={cn(
              "flex flex-col gap-4",
              centered && "items-center text-center",
              width === "default" && !centered && "max-w-2xl",
            )}
          >
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            {title ? (
              <h2 className="text-3xl tracking-[-0.025em] md:text-[2.75rem] md:leading-[1.08]">
                {title}
              </h2>
            ) : null}
            {lede ? (
              <p className="text-base text-ink-muted md:text-lg">{lede}</p>
            ) : null}
          </div>
        ) : null}
        {children ? (
          <div className={cn(eyebrow || title || lede ? "mt-14" : undefined)}>
            {children}
          </div>
        ) : null}
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
