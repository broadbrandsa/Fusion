import { Photo } from "@/components/blocks/photo";
import { distributionPartners } from "@/content/site";

import { SectionShell } from "./section-shell";

const stats = [
  { figure: "11", unit: "languages", note: "Every official language, in the interface and in the answers." },
  { figure: "2017", unit: "and up", note: "Runs properly on an entry-level Android, because the work happens on our servers." },
  { figure: "R20", unit: "to start", note: "In rand, bought like airtime, with no card anywhere in it." },
  { figure: "3", unit: "partners", note: "Clicks Connect, Absa and Digital Mobile, so a bundle rides a balance you already hold." },
];

/**
 * Pillar 4. Appito and Vitara both run a stat row with one card inverted, and
 * it suits a set of claims that are all just facts.
 */
export function BuiltForHere() {
  return (
    <SectionShell
      id="built-for-here"
      eyebrow="Built for here"
      title="Made for South Africa, not adapted for it"
      lede="Priced in rand, sold the way the country already buys airtime, and built to run on the phone that is actually in your hand."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.figure}
            className={
              index === 1
                ? "tone-graphite flex flex-col rounded-2xl border border-white/10 p-6"
                : "flex flex-col rounded-2xl border border-border bg-card p-6"
            }
          >
            <p className="figure font-heading text-4xl font-bold tracking-[-0.02em]">
              {stat.figure}
            </p>
            <p className="mt-1 text-xs tracking-[0.14em] text-ink-faint uppercase">
              {stat.unit}
            </p>
            <p className="mt-5 text-sm text-ink-muted">{stat.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        {/* Placeholder in spirit, not in markup. The set we have was not shot
            in South Africa, which undercuts this section's claim more than any
            other. See docs/IMAGE-CREDITS.md for the brief. */}
        <Photo
          photo="phoneAtDusk"
          ratio="16 / 9"
          sizes="(min-width: 1024px) 700px, 100vw"
        />
        <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6">
          <div>
            <p className="text-xs tracking-[0.14em] text-ink-faint uppercase">
              Distributed by
            </p>
            <ul className="mt-5 space-y-3">
              {distributionPartners.map((partner) => (
                <li key={partner.id} className="text-lg font-semibold text-ink">
                  {partner.name}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-8 text-xs text-ink-faint">
            Partner marks go here in their own brand colours once the approved
            assets arrive.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
