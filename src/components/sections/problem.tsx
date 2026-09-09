import { PhotoSlot } from "@/components/blocks/photo-slot";

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
        <div className="mt-14 grid gap-4 lg:grid-cols-[1fr_1fr]">
          <PhotoSlot
            ratio="4 / 3"
            brief="The burst, made human. Someone deep in a project at a kitchen table, papers and phone out, mid-week and mid-effort."
          />
          <PhotoSlot
            ratio="4 / 3"
            brief="The quiet month. The same desk, tidy and unused. The pair is the whole argument in two frames."
          />
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
