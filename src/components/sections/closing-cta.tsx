import Link from "next/link";

import { AppShot } from "@/components/blocks/app-shot";
import { Wordmark } from "@/components/brand/wordmark";
import { Button } from "@/components/ui/button";
import { cta, stores } from "@/content/site";

/**
 * Vitara closes on a dark panel with a device shot and the wordmark set huge
 * behind it. Borrowed here, because the last thing on the page should be the
 * name and the action.
 */
export function ClosingCta() {
  return (
    <section className="px-5 pb-20 md:px-8 md:pb-28">
      <div className="relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-3xl border border-white/10 bg-surface px-6 pt-14 md:px-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[48rem] -translate-x-1/2 rounded-full opacity-[0.1] blur-3xl"
          style={{ background: "var(--steel)" }}
        />
        <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_0.7fr]">
          <div className="pb-14">
            <h2 className="max-w-lg text-3xl tracking-[-0.03em] md:text-5xl md:leading-[1.05]">
              Buy the amount of AI your project needs
            </h2>
            <p className="mt-5 max-w-md text-base text-ink-muted">
              Start free on a verified number, see what every answer costs, and
              pay nothing at all in the months you are not asking.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {stores.map((store) => (
                <Button
                  key={store.id}
                  size="lg"
                  className="rounded-full"
                  asChild
                >
                  <Link href={store.href}>{store.label}</Link>
                </Button>
              ))}
            </div>
            <p className="mt-4 text-sm text-ink-muted">{cta.promise}</p>
          </div>

          <div className="relative mx-auto w-full max-w-[15rem] lg:mx-0">
            <AppShot shot="spending" width={260} />
          </div>
        </div>

        <Wordmark
          decorative
          className="pointer-events-none mt-6 w-full text-[6rem] leading-[0.78] text-ink/[0.04] select-none md:text-[10rem]"
        />
      </div>
    </section>
  );
}
