import type { ReactNode } from "react";

import Image from "next/image";

import { ListCard } from "@/components/blocks/app-screens";
import { AppShot } from "@/components/blocks/app-shot";
import { CollectionOrbit } from "@/components/blocks/collection-orbit";
import { CountUp, type CountUpFormat } from "@/components/blocks/count-up";
import { ModelLogo } from "@/components/blocks/model-logo";
import { photos, type PhotoName } from "@/components/blocks/photo";
import { Reveal } from "@/components/blocks/reveal";
import { models } from "@/content/models";

import { SectionShell } from "./section-shell";

const localStats = [
  { figure: "11", count: 11, format: "integer", unit: "languages", note: "Interface and answers." },
  { figure: "2017", unit: "and up", note: "Runs on an entry-level Android." },
  { figure: "R20", count: 20, format: "rand", unit: "to start", note: "In rand. No card." },
  { figure: "0", unit: "debit orders", note: "Nothing renews. Nothing to cancel." },
] as const satisfies readonly {
  figure: string;
  count?: number;
  format?: CountUpFormat;
  unit: string;
  note: string;
}[];

function BentoCard({
  title,
  body,
  children,
  className,
  delay = 0,
  photo,
  scrim = [0.93, 0.9],
}: {
  title: string;
  body: string;
  children?: ReactNode;
  className?: string;
  delay?: number;
  /** Fills the card behind its contents rather than sitting inside it. */
  photo?: PhotoName;
  /** Scrim opacity, top and bottom. Set per photograph from its luminance. */
  scrim?: [number, number];
}) {
  return (
    <Reveal delay={delay} className={className}>
      <div
        className={
          photo
            ? "hover-lift relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 p-8"
            : "hover-lift flex h-full flex-col rounded-2xl border border-border bg-card p-8"
        }
      >
        {photo ? (
          <>
            <Image
              src={photos[photo].src}
              alt=""
              fill
              sizes="(min-width: 1024px) 440px, 100vw"
              className="-z-10 object-cover saturate-[0.78]"
            />
            {/* Set from each photograph's 99th-percentile luminance, because
                text now runs the full height of these cards. Kitchen is the
                brighter at 0.889 and needs 0.90 even at its lightest point to
                hold 5.02:1; friends-tea is 0.695 and clears it at 0.86. */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10"
              style={{
                background: `linear-gradient(to bottom, rgba(18,21,26,${scrim[0]}) 0%, rgba(18,21,26,${scrim[1]}) 100%)`,
              }}
            />
          </>
        ) : null}
        <p className={photo ? "card-title text-on-image" : "card-title"}>
          {title}
        </p>
        <p
          className={
            photo
              ? "mt-3 text-base text-on-image-muted"
              : "mt-3 text-base text-ink-muted"
          }
        >
          {body}
        </p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </Reveal>
  );
}

/**
 * The bento grid, the pattern all three references lean on hardest, with real
 * interface inside each card. Its job is one thing: killing the suspicion that
 * prepaid means a cut-down product.
 */
export function FullStrength() {
  return (
    <SectionShell
      id="full-strength"
      tone="paper"
      eyebrow="Full strength"
      title="Not a lite version of anything"
      lede="Prepaid is how you pay. It is not what you get."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <BentoCard
          title="Every model, one wallet"
          body="Pick the right one per question. One balance either way."
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {models.map((model) => (
              <div
                key={model.id}
                className="flex items-center gap-4 rounded-xl border border-border bg-surface-high/40 px-5 py-4"
              >
                <ModelLogo id={model.id} variant="icon" height={24} />
                <span>
                  <span className="block text-base text-ink">{model.name}</span>
                  <span className="block text-sm text-ink-muted">
                    {model.note}
                  </span>
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base text-ink-muted">
            Plus web search, photos, documents, decks, deep research and
            shopping in rand.
          </p>
        </BentoCard>

        <BentoCard
          delay={100}
          photo="kitchenCooking"
          title="Lists it fills for you"
          body="Ask for a week of dinners. Seventeen items come back specified."
        >
          <ListCard />
        </BentoCard>

        <BentoCard
          delay={60}
          title="Nothing gets lost"
          body="Everything the app makes for you, kept where you left it."
        >
          <CollectionOrbit />
        </BentoCard>

        <BentoCard
          delay={140}
          photo="friendsTea"
          scrim={[0.9, 0.86]}
          title="Ask together, split the cost"
          body="Up to five people, one answer, and the cost split between whoever pays. Or hand it a game and let it referee."
        >
          <div className="grid items-start gap-8 xl:grid-cols-2">
            <div>
              <AppShot
                shot="sharedChat"
                width={280}
                className="mx-auto max-w-[11.5rem]"
              />
              <p className="mt-5 text-center text-sm text-on-image-muted">
                Shared from the moment it starts, or never.
              </p>
            </div>
            <div>
              <AppShot
                shot="games"
                width={280}
                className="mx-auto max-w-[11.5rem]"
              />
              <p className="mt-5 text-center text-sm text-on-image-muted">
                Quiz Night, Twenty Questions, Stop the Bus, The Court.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* "Built for here" was a section of its own until 10 September 2026.
            It is the same argument as the rest of this grid, so it reads
            better as its closing card than as a fifth block of stats further
            down the page: full strength, in your language, on the phone you
            already own. Full width, because four figures need the room and an
            odd fifth card would otherwise leave a hole.

            `count` only where the figure is a quantity. A year is not a
            quantity, and counting to zero is not worth watching. */}
        <BentoCard
          delay={180}
          className="lg:col-span-2"
          title="Built for here"
          body="Made for South Africa, not adapted for it. Priced in rand, sold the way the country already buys airtime."
        >
          <dl className="grid gap-8 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {localStats.map((stat) => (
              <div key={stat.figure}>
                <dt className="figure display-3">
                  {"count" in stat ? (
                    <CountUp value={stat.count} format={stat.format} />
                  ) : (
                    stat.figure
                  )}
                </dt>
                <dd className="mt-2 text-xs tracking-[0.14em] text-ink-muted uppercase">
                  {stat.unit}
                </dd>
                <dd className="mt-4 text-base text-ink-muted">{stat.note}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-xl text-base text-ink-muted">
            The heavy lifting happens on our servers, so it runs properly on
            the phone that is actually in your hand.
          </p>
        </BentoCard>
      </div>
    </SectionShell>
  );
}
