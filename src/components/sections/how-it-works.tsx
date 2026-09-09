import { SectionShell } from "./section-shell";

const steps = [
  {
    n: "01",
    label: "Top up",
    title: "Buy it like airtime",
    body: "Pick a bundle from R20. No card, no subscription, no monthly debit order. A newly verified number starts with free credit.",
  },
  {
    n: "02",
    label: "Ask",
    title: "In your own language",
    body: "Claude and Gemini both answer, chosen per question, spending one balance. Web search, photos, documents, decks, deep research.",
  },
  {
    n: "03",
    label: "See",
    title: "What every answer cost",
    body: "Each answer reports what it drew as it lands. Big jobs quote before they run, and your balance can never go below zero.",
  },
  {
    n: "04",
    label: "Stop",
    title: "Or don't. Nothing renews",
    body: "When the project is done, you are done. There is no subscription to end, so there is nothing to cancel.",
  },
];

/** Vitara's four-stage pattern. It fits a product with an actual sequence. */
export function HowItWorks() {
  return (
    <SectionShell
      id="how-it-works"
      eyebrow="How it works"
      title="Four steps. No commitment."
      lede="Buy the amount of AI your project needs, watch what it actually draws, and pay nothing when you are not asking."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.n}
            className="flex flex-col rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex items-center gap-2.5">
              {/* Appito's lime chip. Safe here: nothing in this card is money. */}
              <span className="figure grid size-7 place-items-center rounded-md bg-lime text-xs font-medium text-[#191C20]">
                {step.n}
              </span>
              <span className="text-xs tracking-[0.14em] text-ink-faint uppercase">
                {step.label}
              </span>
            </div>
            <p className="mt-8 font-heading text-lg font-bold tracking-[-0.01em]">
              {step.title}
            </p>
            <p className="mt-2.5 text-sm text-ink-muted">{step.body}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
