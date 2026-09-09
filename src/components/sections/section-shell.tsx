import type { ReactNode } from "react";

import { Eyebrow } from "@/components/blocks/eyebrow";
import { Reveal } from "@/components/blocks/reveal";
import { cn } from "@/lib/utils";

/**
 * Shared shell every section sits in. Rhythm, max width and tone are decided
 * once here, from the reference sites' measurements: 100 to 200px of vertical
 * padding and a 1260 to 1580px container.
 *
 * `tone` inverts a section to paper on a graphite page, which is how all three
 * references give a long page a pulse.
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
      className={cn("section-y", tone === "paper" && "tone-paper", className)}
    >
      <div
        className={cn(
          "container-site",
          width === "narrow" && "max-w-3xl",
        )}
      >
        {eyebrow || title || lede ? (
          <div
            className={cn(
              "flex flex-col gap-5",
              centered && "items-center text-center",
              width === "default" && !centered && "max-w-2xl",
            )}
          >
            {eyebrow ? (
              <Reveal>
                <Eyebrow>{eyebrow}</Eyebrow>
              </Reveal>
            ) : null}
            {title ? (
              <Reveal delay={80}>
                <h2 className="display-2">{title}</h2>
              </Reveal>
            ) : null}
            {lede ? (
              <Reveal delay={160}>
                <p className="text-lg text-ink-muted">{lede}</p>
              </Reveal>
            ) : null}
          </div>
        ) : null}
        {children ? (
          <div className={cn(eyebrow || title || lede ? "mt-16" : undefined)}>
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
