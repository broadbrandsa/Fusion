import { AppFrame } from "@/components/blocks/app-frame";
import { AnswerCostScreen, QuoteCard } from "@/components/blocks/app-screens";
import { AppShot } from "@/components/blocks/app-shot";

import { SectionShell } from "./section-shell";

/**
 * The one thing nobody else can do, and the section that carries the whole
 * argument. Vitara gives its strongest claim a split layout with a device
 * shot, so this does the same and puts the real spending capture in it.
 */
export function CostProof() {
  return (
    <SectionShell
      id="nothing-hidden"
      eyebrow="Nothing hidden"
      title="Every answer tells you what it cost"
      lede="This is the part no subscription can copy. Under a monthly fee there is no per-answer cost to show you, because a heavy user is quietly carried by a light one. We show the figure, so you can buy the right amount next time."
    >
      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="mx-auto w-full max-w-[20rem] lg:mx-0">
          <AppFrame label="An answer arriving with what it cost beside it">
            <AnswerCostScreen />
          </AppFrame>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <QuoteCard />
          <div className="rounded-xl border border-border bg-card p-4">
            <p className="text-xs text-ink-faint">Floor</p>
            <p className="mt-2 font-heading text-lg font-bold">
              A balance can never go below zero
            </p>
            <p className="mt-2 text-sm text-ink-muted">
              Enforced on the server, not promised in a policy. Bill shock is
              not something we avoid. It is something the product cannot do.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 sm:col-span-2">
            <p className="text-xs text-ink-faint">Audit us</p>
            <p className="mt-2 font-heading text-lg font-bold">
              Spending, day by day and chat by chat
            </p>
            <p className="mt-2 text-sm text-ink-muted">
              A thirty-day chart, totals by category, totals by conversation,
              and every single transaction with its own receipt. Receipts are
              held on your phone, not by us.
            </p>
            <div className="mt-5 overflow-hidden rounded-lg">
              <AppShot
                shot="spending"
                width={300}
                className="mx-auto max-w-[15rem] rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
