import { CountUp, type CountUpFormat } from "@/components/blocks/count-up";
import { Photo } from "@/components/blocks/photo";
import { Reveal } from "@/components/blocks/reveal";

import { SectionShell } from "./section-shell";

/* `count` only where the figure is a quantity. A year is not a quantity, and
   counting to zero is not worth watching. */
const stats = [
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

export function BuiltForHere() {
  return (
    <SectionShell
      id="built-for-here"
      eyebrow="Built for here"
      title="Made for South Africa, not adapted for it"
      lede="Priced in rand. Sold the way the country already buys airtime."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal key={stat.figure} delay={index * 90}>
            <div
              className={
                index === 1
                  ? "tone-paper hover-lift flex h-full flex-col rounded-2xl border border-border p-8"
                  : "hover-lift flex h-full flex-col rounded-2xl border border-border bg-card p-8"
              }
            >
              <p className="figure display-3">
                {"count" in stat ? (
                  <CountUp value={stat.count} format={stat.format} />
                ) : (
                  stat.figure
                )}
              </p>
              <p className="mt-2 text-xs tracking-[0.14em] text-ink-muted uppercase">
                {stat.unit}
              </p>
              <p className="mt-6 text-base text-ink-muted">{stat.note}</p>
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
