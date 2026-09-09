import { GrantCard } from "@/components/blocks/app-screens";

import { SectionShell } from "./section-shell";

const claims = [
  {
    title: "Private chats leave nothing behind",
    body: "Kept nowhere, erased when ended. Enforced on the server, not promised in a policy.",
  },
  {
    title: "Never used to train a model",
    body: "Your work stays yours. That is not a setting you have to find and switch off.",
  },
  {
    title: "Deletion schedules you can see",
    body: "Visible in Settings, in plain language, rather than buried in a document nobody reads.",
  },
  {
    title: "Receipts held on your phone",
    body: "Days and groupings are totalled on our server. The receipt for an individual answer only ever lives on your device.",
  },
];

export function Privacy() {
  return (
    <SectionShell
      id="privacy"
      tone="paper"
      eyebrow="Nothing hidden"
      title="What happens here stays here"
      lede="The same honesty we apply to money, applied to your conversations. All four of these are how the product is built, not undertakings we are asking you to trust."
    >
      <div className="grid items-start gap-4 lg:grid-cols-[1fr_0.55fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {claims.map((claim) => (
            <div
              key={claim.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <p className="font-heading text-base font-bold">{claim.title}</p>
              <p className="mt-2 text-sm text-ink-muted">{claim.body}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="text-sm text-ink-muted">
            The same plainness runs through the money. Your credit is one
            balance, the product says where it came from, and it tells you when
            it lapses without being asked.
          </p>
          <div className="mt-6">
            <GrantCard />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
