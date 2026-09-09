import { Photo } from "@/components/blocks/photo";
import { Reveal } from "@/components/blocks/reveal";

import { SectionShell } from "./section-shell";

const stats = [
  ["11", "languages", "Interface and answers."],
  ["2017", "and up", "Runs on an entry-level Android."],
  ["R20", "to start", "In rand. No card."],
  ["0", "debit orders", "Nothing renews. Nothing to cancel."],
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
                  ? "tone-paper hover-lift flex h-full flex-col rounded-2xl border border-border p-8"
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

      {/* Full-width photograph. Placeholder in spirit, not in markup: nothing
          in the supplied set was shot in South Africa, which undercuts this
          section's claim more than any other. See docs/IMAGE-CREDITS.md. */}
      <Reveal delay={80} as="figure" className="mt-4 block">
        <Photo
          photo="phoneAtDusk"
          ratio="21 / 9"
          sizes="(min-width: 1024px) 1240px, 100vw"
        />
        <figcaption className="mt-5 max-w-xl text-lg text-ink-muted">
          The heavy lifting happens on our servers, so it runs properly on the
          phone that is actually in your hand.
        </figcaption>
      </Reveal>
    </SectionShell>
  );
}
