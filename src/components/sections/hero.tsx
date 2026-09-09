import Link from "next/link";

import { AppFrame } from "@/components/blocks/app-frame";
import { AnswerCostScreen } from "@/components/blocks/app-screens";
import { AppShot } from "@/components/blocks/app-shot";
import { Marquee } from "@/components/blocks/marquee";
import { ModelLogo } from "@/components/blocks/model-logo";
import { Pill } from "@/components/blocks/pill";
import { Reveal } from "@/components/blocks/reveal";
import { Wordmark } from "@/components/brand/wordmark";
import { Button } from "@/components/ui/button";
import { models } from "@/content/models";
import { cta, hero, stores } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-[var(--spacing-section)] md:pt-20">
      {/* A soft lime wash. Atmosphere is the accent's job, not steel's, so
          the money colour stays reserved for actual money. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[72rem] -translate-x-1/2 rounded-full opacity-[0.07] blur-3xl"
        style={{ background: "var(--lime)" }}
      />

      <div className="container-site relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* Staggered fade-up, as all three references open. */}
        <div>
          <Reveal>
            <Pill withDot>Prepaid, in rand</Pill>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="display-1 mt-7 max-w-2xl">{hero.headline}</h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-7 max-w-lg text-lg text-ink-muted">
              {hero.subhead}
            </p>
          </Reveal>
          <Reveal delay={270}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
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
            <Link
              href={cta.secondary.href}
              className="mt-8 inline-flex min-h-11 items-center gap-1.5 text-base text-ink underline decoration-ink-faint underline-offset-4 transition-colors duration-300 ease-in-out hover:decoration-ink"
            >
              {cta.secondary.label}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </Reveal>
        </div>

        <Reveal delay={220} className="relative mx-auto w-full max-w-[26rem] pb-14 lg:max-w-none lg:pb-20">
          <AppShot
            shot="credit"
            priority
            width={360}
            className="ml-auto w-[16rem] sm:w-[18rem] lg:mr-4 lg:w-[21rem]"
          />
          <div className="absolute bottom-0 left-0 w-[13.5rem] sm:w-[15rem]">
            <AppFrame
              label="An answer arriving with what it cost beside it"
              className="rounded-2xl"
            >
              <AnswerCostScreen />
            </AppFrame>
          </div>
        </Reveal>
      </div>

      {/* Who answers. A strip says it faster than a sentence. */}
      <Reveal delay={340} className="mt-[var(--spacing-section)]">
        <p className="container-site text-xs tracking-[0.16em] text-ink-muted uppercase">
          The models that answer
        </p>
        <Marquee durationSeconds={38} className="mt-8">
          {models.map((model) => (
            <span
              key={model.id}
              className="flex shrink-0 items-center gap-3 px-10 opacity-55"
            >
              <ModelLogo id={model.id} variant="wordmark" height={26} />
            </span>
          ))}
        </Marquee>
      </Reveal>

      <Wordmark
        decorative
        className="pointer-events-none container-site mt-[var(--spacing-section)] hidden text-[9rem] leading-[0.78] text-ink/[0.03] select-none md:block"
      />
    </section>
  );
}
