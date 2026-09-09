import { AppFrame } from "@/components/blocks/app-frame";
import { AnswerCostScreen, QuoteCard } from "@/components/blocks/app-screens";
import { AppShot } from "@/components/blocks/app-shot";
import { Reveal } from "@/components/blocks/reveal";

import { SectionShell } from "./section-shell";

export function CostProof() {
  return (
    <SectionShell
      id="nothing-hidden"
      eyebrow="Nothing hidden"
      title="Every answer tells you what it cost"
      lede="No subscription can. Under a monthly fee there is no per-answer cost to show you."
    >
      <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="mx-auto w-full max-w-[21rem] lg:mx-0">
          <AppFrame label="An answer arriving with what it cost beside it">
            <AnswerCostScreen />
          </AppFrame>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          <Reveal delay={100}>
            <QuoteCard />
          </Reveal>
          <Reveal delay={180}>
            <div className="hover-lift h-full rounded-2xl border border-border bg-card p-7">
              <p className="text-xs tracking-[0.14em] text-ink-muted uppercase">
                Floor
              </p>
              <p className="card-title mt-4">Never below zero</p>
              <p className="mt-3 text-base text-ink-muted">
                Enforced on the server. Bill shock is not a thing we avoid, it
                is a thing the product cannot do.
              </p>
            </div>
          </Reveal>
          <Reveal delay={260} className="sm:col-span-2">
            <div className="hover-lift rounded-2xl border border-border bg-card p-7">
              <p className="text-xs tracking-[0.14em] text-ink-muted uppercase">
                Audit us
              </p>
              <p className="card-title mt-4">Every cent, day by day</p>
              <p className="mt-3 max-w-md text-base text-ink-muted">
                Thirty days of spending, totals per conversation, and a receipt
                for every answer. Held on your phone, not by us.
              </p>
              <AppShot
                shot="spending"
                width={320}
                className="mx-auto mt-8 max-w-[16rem] rounded-2xl"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
