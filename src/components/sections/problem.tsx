import { Photo } from "@/components/blocks/photo";

import { SectionShell } from "./section-shell";

/**
 * The problem, before the product. Habitline opens with a large statement
 * block in place of a feature list, and it suits us better than it suits them,
 * because our argument is a mismatch rather than a benefit.
 */
export function Problem() {
  return (
    <SectionShell id="problem" tone="paper">
      <div className="mx-auto max-w-4xl">
        <p className="font-heading text-2xl leading-[1.25] tracking-[-0.02em] md:text-[2.25rem] md:leading-[1.2]">
          You use AI in bursts. A renovation, a business plan, a thesis, a month
          of job applications. Heavy for a fortnight, then almost nothing.{" "}
          <span className="text-ink-muted">
            Every subscription bills you the same either way, and none of them
            will tell you what a single answer cost, so you cannot even see how
            badly the shape fits.
          </span>
        </p>
        <div className="mt-14 grid gap-4 lg:grid-cols-[1.15fr_1fr]">
          <figure>
            <Photo
              photo="projectRenovation"
              ratio="4 / 3"
              sizes="(min-width: 1024px) 620px, 100vw"
            />
            <figcaption className="mt-3 text-xs text-ink-faint">
              A renovation. Three weeks of quotes, materials and second
              opinions, then nothing for months.
            </figcaption>
          </figure>
          <figure>
            <Photo
              photo="projectFlatpack"
              ratio="4 / 3"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
            <figcaption className="mt-3 text-xs text-ink-faint">
              A move. One frantic weekend of working things out, and it is
              over.
            </figcaption>
          </figure>
        </div>

        <div className="mt-14 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
          {[
            {
              title: "Flat billing, lumpy use",
              body: "You pay through every quiet month for questions you never asked.",
            },
            {
              title: "Priced in dollars, on a card",
              body: "Recurring international billing, on a card plenty of people do not hold or keep well away from it.",
            },
            {
              title: "The wall arrives mid-task",
              body: "Free tiers stop exactly when the work starts mattering.",
            },
          ].map((item) => (
            <div key={item.title}>
              <p className="text-sm font-semibold text-ink">{item.title}</p>
              <p className="mt-2 text-sm text-ink-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
