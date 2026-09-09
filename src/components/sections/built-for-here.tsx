import { Photo } from "@/components/blocks/photo";
import { Reveal } from "@/components/blocks/reveal";
import { distributionPartners } from "@/content/site";

import { SectionShell } from "./section-shell";

const stats = [
  ["11", "languages", "Interface and answers."],
  ["2017", "and up", "Runs on an entry-level Android."],
  ["R20", "to start", "In rand. No card."],
  ["3", "partners", "On a balance you already hold."],
];

export function BuiltForHere() {
  return (
    <SectionShell
      id="built-for-here"
      eyebrow="Built for here"
      title="Made for South Africa, not adapted for it"
      lede="Priced in rand. Sold the way the country already buys airtime."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([figure, unit, note], index) => (
          <Reveal key={figure} delay={index * 90}>
            <div
              className={
                index === 1
                  ? "tone-graphite hover-lift flex h-full flex-col rounded-2xl border border-white/10 p-8"
                  : "hover-lift flex h-full flex-col rounded-2xl border border-border bg-card p-8"
              }
            >
              <p className="figure display-3">{figure}</p>
              <p className="mt-2 text-xs tracking-[0.14em] text-ink-muted uppercase">
                {unit}
              </p>
              <p className="mt-6 text-base text-ink-muted">{note}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <Reveal delay={80}>
          {/* Placeholder in spirit, not in markup. Nothing in the supplied set
              was shot in South Africa, which undercuts this section's claim
              more than any other. See docs/IMAGE-CREDITS.md. */}
          <Photo
            photo="phoneAtDusk"
            ratio="16 / 9"
            sizes="(min-width: 1024px) 780px, 100vw"
          />
        </Reveal>
        <Reveal delay={180}>
          <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-8">
            <div>
              <p className="text-xs tracking-[0.14em] text-ink-muted uppercase">
                Distributed by
              </p>
              <ul className="mt-7 space-y-4">
                {distributionPartners.map((partner) => (
                  <li key={partner.id} className="card-title">
                    {partner.name}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-10 text-sm text-ink-muted">
              Partner marks land here once the assets arrive.
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
