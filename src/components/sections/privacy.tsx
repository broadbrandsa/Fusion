import { GrantCard } from "@/components/blocks/app-screens";
import { Reveal } from "@/components/blocks/reveal";

import { SectionShell } from "./section-shell";

const claims = [
  ["Private chats vanish", "Kept nowhere. Erased when ended."],
  ["Never used for training", "Your work stays yours."],
  ["Deletion you can see", "In Settings, in plain language."],
  ["Receipts stay on your phone", "We keep less than we could."],
];

export function Privacy() {
  return (
    <SectionShell
      id="privacy"
      tone="paper"
      eyebrow="Nothing hidden"
      title="What happens here stays here"
      lede="All four are how the product is built, not undertakings we are asking you to trust."
    >
      <div className="grid items-start gap-4 lg:grid-cols-[1fr_0.5fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {claims.map(([title, body], index) => (
            <Reveal key={title} delay={index * 90}>
              <div className="hover-lift h-full rounded-2xl border border-border bg-card p-8">
                <p className="card-title">{title}</p>
                <p className="mt-3 text-base text-ink-muted">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="text-base text-ink-muted">
              Same plainness on the money. One balance, and it says when it
              lapses without being asked.
            </p>
            <div className="mt-8">
              <GrantCard />
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
