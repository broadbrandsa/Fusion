import { Photo } from "@/components/blocks/photo";
import { Reveal } from "@/components/blocks/reveal";

import { SectionShell } from "./section-shell";

const facts = [
  ["Flat billing", "Lumpy use."],
  ["Priced in dollars", "On a card you may not hold."],
  ["The wall hits mid-task", "Right when it matters."],
];

/** One statement, then three short facts. Nothing to read twice. */
export function Problem() {
  return (
    <SectionShell id="problem" tone="paper">
      <div className="max-w-4xl">
        <Reveal>
          <h2 className="display-2">
            You use AI in bursts.{" "}
            <span className="text-ink-muted">
              Every subscription bills you flat.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-8 max-w-xl text-lg text-ink-muted">
            Heavy for a fortnight, then nothing for a month. And none of them
            will tell you what a single answer cost.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-4 lg:grid-cols-[1.15fr_1fr]">
        <Reveal delay={80} as="figure">
          <Photo
            photo="projectRenovation"
            ratio="4 / 3"
            sizes="(min-width: 1024px) 700px, 100vw"
          />
          <figcaption className="mt-4 text-sm text-ink-muted">
            A renovation. Three weeks flat out, then months of nothing.
          </figcaption>
        </Reveal>
        <Reveal delay={200} as="figure">
          <Photo
            photo="projectFlatpack"
            ratio="4 / 3"
            sizes="(min-width: 1024px) 580px, 100vw"
          />
          <figcaption className="mt-4 text-sm text-ink-muted">
            A move. One frantic weekend, then done.
          </figcaption>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-10 border-t border-border pt-12 sm:grid-cols-3">
        {facts.map(([title, body], index) => (
          <Reveal key={title} delay={index * 100}>
            <p className="card-title">{title}</p>
            <p className="mt-3 text-base text-ink-muted">{body}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
