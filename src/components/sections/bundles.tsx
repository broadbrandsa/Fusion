import Link from "next/link";

import { Pill } from "@/components/blocks/pill";
import { Button } from "@/components/ui/button";
import { bundles, cta, lapseNotice, stores } from "@/content/site";
import { formatCredits, formatRand } from "@/lib/format";

import { SectionShell } from "./section-shell";

/**
 * Vitara's three-up pricing with the middle card carrying the weight. Answer
 * counts are deliberately absent: the app estimates 128 credits an answer and
 * the one logged transaction drew 861, so no count goes on the site until the
 * real spread is known. See docs/POSITIONING.md.
 */
export function Bundles() {
  return (
    <SectionShell
      id="bundles"
      tone="paper"
      align="center"
      eyebrow="Bundles"
      title="Buy what the project needs"
      lede="Three sizes, no debit order. Bigger bundles buy more credits per rand, and nothing renews on its own."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {bundles.map((bundle, index) => {
          const featured = index === 1;

          return (
            <div
              key={bundle.id}
              className={
                featured
                  ? "tone-graphite relative flex flex-col rounded-2xl border border-white/10 p-7"
                  : "flex flex-col rounded-2xl border border-border bg-card p-7"
              }
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{bundle.name}</p>
                {/* Greyscale on purpose. A lime badge here would sit inches
                    from the price and win, and the price is the point. */}
                {featured ? <Pill>Best per rand</Pill> : null}
              </div>

              <p className="money mt-6 text-4xl">{formatRand(bundle.price)}</p>
              <p className="figure mt-2 text-xs text-ink-faint">
                {formatCredits(bundle.credits)} credits · valid{" "}
                {bundle.validity} days
              </p>

              <ul className="mt-7 space-y-2.5 border-t border-border pt-6 text-sm text-ink-muted">
                <li>Claude and Gemini, one balance</li>
                <li>Every answer reports its cost</li>
                <li>No card, nothing renews</li>
                {featured ? (
                  <li className="text-ink">
                    {Math.round(bundle.credits / bundle.price).toLocaleString(
                      "en-ZA",
                    )}{" "}
                    credits per rand
                  </li>
                ) : null}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mx-auto mt-10 max-w-xl text-center">
        <p className="text-sm text-ink-muted">{lapseNotice}</p>
        <p className="mt-4 text-sm text-ink">
          A newly verified number starts with free credit, so you can see what
          answers cost before you spend anything.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {stores.map((store, index) => (
            <Button
              key={store.id}
              variant={index === 0 ? "accent" : "outline"}
              className="rounded-full"
              asChild
            >
              <Link href={store.href}>{store.label}</Link>
            </Button>
          ))}
        </div>
        <p className="mt-3 text-xs text-ink-faint">{cta.promise}</p>
      </div>
    </SectionShell>
  );
}
