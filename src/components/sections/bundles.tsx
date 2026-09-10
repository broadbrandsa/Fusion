import Link from "next/link";

import { CountUp } from "@/components/blocks/count-up";
import { Pill } from "@/components/blocks/pill";
import { Reveal } from "@/components/blocks/reveal";
import { Button } from "@/components/ui/button";
import { bundles, cta, lapseNotice, stores } from "@/content/site";
import { formatRand } from "@/lib/format";

/**
 * Answer counts stay off these cards. The app estimates 128 credits an answer
 * and the one logged transaction drew 861, so no count goes on the site until
 * the real spread is known. See docs/POSITIONING.md.
 */
export function Bundles() {
  return (
    <section id="bundles" className="section-y">
      <div className="container-site">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.16em] text-ink-muted uppercase">
              Bundles
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-2">Buy what the project needs</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-lg text-ink-muted">
              Bigger bundles buy more per rand. Nothing renews.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {bundles.map((bundle, index) => {
            const featured = index === 1;

            return (
              <Reveal key={bundle.id} delay={index * 110}>
                <div
                  className={
                    featured
                      ? "tone-paper hover-lift flex h-full flex-col rounded-2xl border border-border p-9"
                      : "hover-lift flex h-full flex-col rounded-2xl border border-border bg-card p-9"
                  }
                >
                  <div className="flex items-center justify-between">
                    <p className="text-base font-medium">{bundle.name}</p>
                    {/* Greyscale on purpose. A lime badge here would sit
                        inches from the price and win. */}
                    {featured ? <Pill>Best per rand</Pill> : null}
                  </div>

                  <p className="money mt-8 text-[3.25rem] leading-none">
                    {formatRand(bundle.price)}
                  </p>
                  <p className="figure mt-4 text-sm text-ink-muted">
                    <CountUp
                      value={bundle.credits}
                      format="credits"
                      durationMs={1300}
                    />{" "}
                    credits
                  </p>
                  <p className="figure mt-1 text-sm text-ink-muted">
                    {bundle.validity} days
                  </p>

                  <ul className="mt-9 space-y-3 border-t border-border pt-7 text-base text-ink-muted">
                    <li>Every model, one balance</li>
                    <li>Every cost, as it lands</li>
                    <li>No card. Nothing renews</li>
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="mx-auto mt-14 max-w-lg text-center">
            <p className="text-base text-ink-muted">{lapseNotice}</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              {stores.map((store, index) => (
                <Button
                  key={store.id}
                  size="lg"
                  variant={index === 0 ? "accent" : "outline"}
                  className="h-14 rounded-full px-7 text-base"
                  asChild
                >
                  <Link href={store.href}>{store.label}</Link>
                </Button>
              ))}
            </div>
            <p className="mt-4 text-sm text-ink-muted">{cta.promise}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
