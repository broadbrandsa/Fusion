import { Reveal } from "@/components/blocks/reveal";

import { SectionShell } from "./section-shell";

const steps = [
  ["01", "Top up", "From R20. No card."],
  ["02", "Ask", "Any of 11 languages."],
  ["03", "See", "What that answer cost."],
  ["04", "Stop", "Nothing renews."],
];

export function HowItWorks() {
  return (
    <SectionShell
      id="how-it-works"
      eyebrow="How it works"
      title="Four steps. No commitment."
      lede="Buy what the project needs. Pay nothing when you are not asking."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(([n, label, body], index) => (
          <Reveal key={n} delay={index * 90}>
            <div className="hover-lift flex h-full flex-col rounded-2xl border border-border bg-card p-8">
              <span className="figure grid size-8 place-items-center rounded-md bg-lime text-xs font-medium text-[#191C20]">
                {n}
              </span>
              <p className="card-title mt-12">{label}</p>
              <p className="mt-3 text-base text-ink-muted">{body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
