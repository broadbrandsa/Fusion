import type { ReactNode } from "react";

import {
  LanguagesCard,
  ModelPickerCard,
} from "@/components/blocks/app-screens";
import { AppShot } from "@/components/blocks/app-shot";

import { SectionShell } from "./section-shell";

function BentoCard({
  title,
  body,
  children,
  className,
}: {
  title: string;
  body: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col rounded-2xl border border-border bg-card p-6 ${className ?? ""}`}
    >
      <p className="font-heading text-lg font-bold tracking-[-0.01em]">
        {title}
      </p>
      <p className="mt-2 text-sm text-ink-muted">{body}</p>
      {children ? <div className="mt-6">{children}</div> : null}
    </div>
  );
}

/**
 * The bento grid, the pattern all three reference sites lean on hardest, with
 * real interface inside each card.
 *
 * Its job is one specific piece of work: killing the suspicion that prepaid
 * means a cut-down product. Every card here is evidence against that, which is
 * why the section leads with the two frontier models and not with a list.
 */
export function FullStrength() {
  return (
    <SectionShell
      id="full-strength"
      eyebrow="Full strength"
      title="Not a lite version of anything"
      lede="Prepaid is the way you pay, not what you get. Claude and Gemini both answer, chosen per question, spending one balance."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <BentoCard
          className="lg:col-span-2"
          title="Two frontier AIs, one wallet"
          body="Pick the model per question. Claude for long reasoning, Gemini for fast answers with search. One balance either way, and the cost shows up the same."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <ModelPickerCard />
            <div className="flex flex-col justify-center gap-4 text-sm text-ink-muted">
              <p>
                Searches the web when a question needs it, so answers are
                current rather than frozen.
              </p>
              <p>
                Reads photos, writes documents and slide decks, runs deep
                research, and shops with live prices in rand.
              </p>
            </div>
          </div>
        </BentoCard>

        <BentoCard
          title="Every language you actually speak"
          body="The interface asks your language before anything else and speaks it, and the assistant answers in whichever one you write."
        >
          <LanguagesCard />
        </BentoCard>

        <BentoCard
          title="Lists it fills for you"
          body="Ask for a week of dinners and the shopping list comes back specified, quantities and all. Seventeen items, and you just tick them off."
        >
          <AppShot
            shot="listDetail"
            width={280}
            className="mx-auto max-w-[12.5rem]"
          />
        </BentoCard>

        <BentoCard
          className="lg:col-span-2"
          title="Ask together, split the cost"
          body="Up to five people in one chat, everybody reads every answer, and the cost is split between whoever pays. A chat is shared from the moment it starts or never, so a private conversation can never be opened up after the fact."
        >
          <div className="grid items-center gap-6 sm:grid-cols-[0.8fr_1.2fr]">
            <AppShot
              shot="sharedChat"
              width={280}
              className="mx-auto max-w-[12.5rem]"
            />
            <div className="space-y-4 text-sm text-ink-muted">
              <p>
                Ask as a household, a study group or a work team, and read one
                answer instead of five separate ones.
              </p>
              <p>
                Or hand it a game and let it referee. Quiz Night, Twenty
                Questions, Stop the Bus and The Court, with the score kept for
                you.
              </p>
            </div>
          </div>
        </BentoCard>

        <BentoCard
          title="Your work is kept, not lost"
          body="Files, documents and decks in one place. Recipes saved off answers, and bookmarked sources one tap from reopening."
        >
          <AppShot
            shot="collections"
            width={280}
            className="mx-auto max-w-[12.5rem]"
          />
        </BentoCard>

        <BentoCard
          className="lg:col-span-2"
          title="And it is good company"
          body="A R20 bundle buys the whole product, games included. An AI referee runs the round and keeps the score, which is not something a productivity tool usually bothers to do."
        >
          <AppShot
            shot="games"
            width={300}
            className="mx-auto max-w-[12.5rem]"
          />
        </BentoCard>
      </div>
    </SectionShell>
  );
}
