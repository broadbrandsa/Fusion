import { appShots } from "@/components/blocks/app-shot";
import { Eyebrow } from "@/components/blocks/eyebrow";
import { Reveal } from "@/components/blocks/reveal";
import { StepStack, type Step } from "@/components/blocks/step-stack";

/**
 * Appito's scroll-driven stepper, absorbing what used to be a separate
 * cost-proof section.
 *
 * Merging the two is the right call rather than a compromise: the four steps
 * are the mechanism and the cost claims are what happens at step three, so
 * they were describing the same sequence twice. Step three keeps the Q1
 * headline at full size, so the argument does not lose weight by moving.
 */
const steps: Step[] = [
  {
    id: "top-up",
    index: "01",
    title: "Buy it like airtime",
    body: "Pick a bundle. No card, no subscription, no debit order anywhere in it.",
    screen: appShots.credit.src,
    screenAlt: appShots.credit.alt,
    items: [
      "Bundles from R20, valid 30 days.",
      "A newly verified number starts with free credit.",
      "Nothing is stored, because there is nothing to store.",
    ],
  },
  {
    id: "ask",
    index: "02",
    title: "Ask in your own language",
    body: "Every model answers in the same app, chosen per question, spending one balance.",
    /* Was the shared-chat capture, which is about asking together rather
       than about language. No capture of the picker exists, so it is
       recreated. */
    screen: null,
    recreation: "languages",
    screenAlt:
      "The language picker, listing all eleven official languages with isiZulu selected",
    items: [
      "All 11 official languages, asked before anything else.",
      "Web search, photos, documents, decks and deep research.",
    ],
  },
  {
    id: "see",
    index: "03",
    title: "Every answer tells you what it cost",
    body: "No subscription can. Under a monthly fee there is no per-answer cost to show you.",
    screen: null,
    screenAlt:
      "An answer arriving with what it drew shown beside it, and the balance below",
    items: [
      "Big jobs quote before they run, and wait.",
      "A balance can never go below zero. Enforced on the server.",
      "Thirty days of spending, totals per conversation, a receipt per answer.",
    ],
  },
  {
    id: "stop",
    index: "04",
    title: "Then stop, or don't",
    body: "When the project is done, you are done. There is no subscription to end.",
    screen: appShots.spending.src,
    screenAlt: appShots.spending.alt,
    items: [
      "Nothing renews on its own.",
      "Credit lasts 30 days, the same as airtime.",
    ],
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-y">
      <div className="container-site">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>How it works</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-2 mt-5">Four steps. No commitment.</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg text-ink-muted">
              Buy what the project needs. Pay nothing when you are not asking.
            </p>
          </Reveal>
        </div>

        <div className="mt-16">
          <StepStack steps={steps} />
        </div>
      </div>
    </section>
  );
}
