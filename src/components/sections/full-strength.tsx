import type { ReactNode } from "react";

import { LanguagesCard } from "@/components/blocks/app-screens";
import { AppShot } from "@/components/blocks/app-shot";
import { ModelLogo } from "@/components/blocks/model-logo";
import { Photo } from "@/components/blocks/photo";
import { Reveal } from "@/components/blocks/reveal";
import { models } from "@/content/models";

import { SectionShell } from "./section-shell";

function BentoCard({
  title,
  body,
  children,
  className,
  delay = 0,
}: {
  title: string;
  body: string;
  children?: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className={className}>
      <div className="hover-lift flex h-full flex-col rounded-2xl border border-border bg-card p-8">
        <p className="card-title">{title}</p>
        <p className="mt-3 text-base text-ink-muted">{body}</p>
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
      eyebrow="Full strength"
      title="Not a lite version of anything"
      lede="Prepaid is how you pay. It is not what you get."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <BentoCard
          className="lg:col-span-2"
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
          title="Your language, asked first"
          body="All 11 official languages, before anything else."
        >
          <LanguagesCard />
        </BentoCard>

        <BentoCard
          delay={60}
          title="Lists it fills for you"
          body="Ask for a week of dinners. Seventeen items come back specified."
        >
          <div className="space-y-4">
            <Photo
              photo="kitchenCooking"
              ratio="16 / 10"
              sizes="(min-width: 1024px) 380px, 100vw"
            />
            <AppShot
              shot="listDetail"
              width={280}
              className="mx-auto max-w-[11rem]"
            />
          </div>
        </BentoCard>

        <BentoCard
          delay={140}
          className="lg:col-span-2"
          title="Ask together, split the cost"
          body="Up to five people. One answer. Shared from the start or never."
        >
          <div className="grid items-center gap-6 sm:grid-cols-[0.75fr_1.25fr]">
            <AppShot
              shot="sharedChat"
              width={280}
              className="mx-auto max-w-[12rem]"
            />
            <div className="space-y-4">
              <Photo
                photo="cookingTogether"
                ratio="16 / 9"
                sizes="(min-width: 1024px) 440px, 100vw"
              />
              <p className="text-base text-ink-muted">
                Or hand it a game and let it referee.
              </p>
            </div>
          </div>
        </BentoCard>

        <BentoCard
          delay={80}
          title="Nothing gets lost"
          body="Files, decks, saved recipes, bookmarked sources."
        >
          <AppShot
            shot="collections"
            width={280}
            className="mx-auto max-w-[12rem]"
          />
        </BentoCard>

        <BentoCard
          delay={160}
          className="lg:col-span-2"
          title="And it is good company"
          body="Quiz Night, Twenty Questions, Stop the Bus, The Court. An AI keeps the score."
        >
          <AppShot
            shot="games"
            width={300}
            className="mx-auto max-w-[12rem]"
          />
        </BentoCard>
      </div>
    </SectionShell>
  );
}
