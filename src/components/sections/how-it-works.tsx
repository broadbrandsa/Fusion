import { AppShot } from "@/components/blocks/app-shot";
import { Eyebrow } from "@/components/blocks/eyebrow";
import { Reveal } from "@/components/blocks/reveal";

const steps = [
  ["01", "Top up", "From R20. No card."],
  ["02", "Ask", "Any of 11 languages."],
  ["03", "See", "What that answer cost."],
  ["04", "Stop", "Nothing renews."],
];

/**
 * Archetype: Vitara's roadmap. A numbered list down one side with a tall
 * device shot beside it, in place of four equal cards. A sequence reads better
 * as a list than as a row, and the device gets to be full height.
 */
export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-y">
      <div className="container-site grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-24">
        <div>
          <Reveal>
            <Eyebrow>How it works</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-2 mt-5 max-w-md">
              Four steps. No commitment.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-md text-lg text-ink-muted">
              Buy what the project needs. Pay nothing when you are not asking.
            </p>
          </Reveal>

          {/* A numbered list with a rule between steps, not a card each. */}
          <ol className="mt-14">
            {steps.map(([n, label, body], index) => (
              <Reveal key={n} delay={220 + index * 90} as="li">
                <div className="flex items-baseline gap-6 border-t border-border py-7">
                  <span className="figure w-7 shrink-0 text-sm text-ink-muted">
                    {n}
                  </span>
                  <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="card-title">{label}</span>
                    <span className="text-lg text-ink-muted">{body}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={200} className="mx-auto w-full max-w-[19rem] lg:max-w-none">
          <AppShot
            shot="credit"
            width={380}
            className="mx-auto w-full max-w-[20rem]"
          />
        </Reveal>
      </div>
    </section>
  );
}
