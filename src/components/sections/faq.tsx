import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { SectionShell } from "./section-shell";

/**
 * The questions the fears in docs/POSITIONING.md actually produce. When
 * support logs exist these should be replaced with what people really ask,
 * rather than what we expect them to.
 */
const faqs = [
  {
    q: "What happens when my credit runs out?",
    a: "It stops, and that is all. Nothing renews, nothing gets charged, and your balance can never go below zero. Top up again whenever you next need it, or do not.",
  },
  {
    q: "Does my credit expire?",
    a: "Yes. Credit is valid 30 days, the same as airtime. We would rather tell you that here than in fine print.",
  },
  {
    q: "Do I need a card?",
    a: "No. There is no card, no subscription and no monthly debit order anywhere in it. A newly verified number starts with free credit.",
  },
  {
    q: "Is this a cheaper, weaker AI?",
    a: "No. Claude and Gemini both answer, at full strength, chosen per question and spending one balance. Prepaid is how you pay for it, not what you get.",
  },
  {
    q: "What if a big job costs more than I have?",
    a: "Big jobs quote before they run, so you see the estimate and decide. And because a balance cannot go below zero, nothing can overspend on you.",
  },
  {
    q: "How do I know what an answer cost?",
    a: "Each answer reports what it drew as it lands. Beyond that there is a spending view with a thirty-day chart, totals by conversation, and every transaction with its own receipt.",
  },
  {
    q: "Are my conversations used for training?",
    a: "Never. Private chats are kept nowhere and erased when ended, and that is enforced on the server rather than promised in a policy.",
  },
  {
    q: "Which languages does it speak?",
    a: "All 11 official languages. The interface asks which one you want before anything else, and the assistant answers in whichever language you write.",
  },
  {
    q: "Will it run on my phone?",
    a: "The heavy lifting happens on our servers, so it runs properly on an entry-level Android from 2017.",
  },
];

export function Faq() {
  return (
    <SectionShell
      id="faq"
      eyebrow="Questions"
      title="The things people ask first"
    >
      <div className="grid gap-x-14 gap-y-0 lg:grid-cols-2">
        {[faqs.slice(0, 5), faqs.slice(5)].map((column, columnIndex) => (
          <Accordion key={columnIndex} type="single" collapsible>
            {column.map((faq) => (
              <AccordionItem
                key={faq.q}
                value={faq.q}
                className="border-b border-border"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm text-ink-muted">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ))}
      </div>
    </SectionShell>
  );
}
