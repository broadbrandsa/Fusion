import Link from "next/link";

import { AppFrame } from "@/components/blocks/app-frame";
import { AnswerCostScreen } from "@/components/blocks/app-screens";
import { AppShot } from "@/components/blocks/app-shot";
import { Pill } from "@/components/blocks/pill";
import { Wordmark } from "@/components/brand/wordmark";
import { Button } from "@/components/ui/button";
import { cta, hero, stores } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-16 pb-20 md:px-8 md:pt-24 md:pb-28">
      {/* A single soft steel wash. The one place the money colour is allowed to
          behave like atmosphere, because a marketing hero is the furthest
          surface from the product. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[72rem] -translate-x-1/2 rounded-full opacity-[0.07] blur-3xl"
        style={{ background: "var(--steel)" }}
      />
      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          <Pill withDot>Prepaid, in rand</Pill>
          <h1 className="mt-6 max-w-xl text-[2.5rem] leading-[1.05] tracking-[-0.03em] md:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-lg text-base text-ink-muted md:text-lg">
            {hero.subhead}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            {stores.map((store) => (
              <Button key={store.id} size="lg" className="rounded-full" asChild>
                <Link href={store.href}>{store.label}</Link>
              </Button>
            ))}
          </div>
          <p className="mt-4 text-sm text-ink-muted">{cta.promise}</p>

          <Link
            href={cta.secondary.href}
            className="mt-8 inline-flex items-center gap-1.5 text-sm text-ink underline decoration-ink-faint underline-offset-4 transition-colors hover:decoration-ink"
          >
            {cta.secondary.label}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* The phone, with the cost moment floating beside it. Every reference
            site floats a small card off its device shot, and here the floating
            card can carry the actual argument. */}
        <div className="relative mx-auto w-full max-w-[24rem] pb-14 lg:max-w-none lg:pb-20">
          <AppShot
            shot="credit"
            priority
            width={340}
            className="ml-auto w-[15rem] sm:w-[17rem] lg:mr-4 lg:w-[19rem]"
          />
          <div className="absolute bottom-0 left-0 w-[13rem] sm:w-[14.5rem]">
            <AppFrame
              label="An answer arriving with what it cost beside it"
              className="rounded-2xl"
            >
              <AnswerCostScreen />
            </AppFrame>
          </div>
        </div>
      </div>

      {/* Wordmark watermark, the way Vitara closes its page. Quiet, and it
          stops the hero floating free of the brand. */}
      <Wordmark
        decorative
        className="pointer-events-none mt-24 hidden w-full text-[7rem] leading-[0.8] text-ink/[0.03] select-none md:block"
      />
    </section>
  );
}
