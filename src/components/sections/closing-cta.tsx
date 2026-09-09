import Link from "next/link";

import { AppShot } from "@/components/blocks/app-shot";
import { Reveal } from "@/components/blocks/reveal";
import { Wordmark } from "@/components/brand/wordmark";
import { Button } from "@/components/ui/button";
import { cta, stores } from "@/content/site";

/** Vitara closes on a dark panel with the wordmark set huge behind it. */
export function ClosingCta() {
  return (
    <section className="pb-[var(--spacing-section)]">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface px-7 pt-16 md:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[48rem] -translate-x-1/2 rounded-full opacity-[0.1] blur-3xl"
            style={{ background: "var(--lime)" }}
          />
          <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_0.65fr]">
            <Reveal className="pb-16">
              <h2 className="display-2 max-w-xl">
                Buy the AI your project needs
              </h2>
              <p className="mt-6 max-w-sm text-lg text-ink-muted">
                Start free. See every cost. Pay nothing in the quiet months.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
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
            </Reveal>

            <Reveal delay={160} className="relative mx-auto w-full max-w-[16rem] lg:mx-0">
              <AppShot shot="spending" width={280} />
            </Reveal>
          </div>

          <Wordmark
            decorative
            className="pointer-events-none mt-8 w-full text-[6rem] leading-[0.78] text-ink/[0.04] select-none md:text-[11rem]"
          />
        </div>
      </div>
    </section>
  );
}
