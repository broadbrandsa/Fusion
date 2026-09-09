import { Reveal } from "@/components/blocks/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { SectionShell } from "./section-shell";

/**
 * The questions the fears in docs/POSITIONING.md produce. Replace with what
 * support actually receives once those logs exist.
 */
const faqs = [
  {
    q: "What happens when my credit runs out?",
    a: "It stops. Nothing renews, nothing gets charged. Top up again whenever you next need it, or do not.",
  },
  {
    q: "Does my credit expire?",
    a: "Yes, after 30 days, the same as airtime. We would rather say that here than in fine print.",
  },
  {
    q: "Do I need a card?",
    a: "No. No card, no subscription, no debit order. A newly verified number starts with free credit.",
  },
  {
    q: "Is this a weaker AI?",
    a: "No. The same frontier models everyone else sells by the month, at full strength, chosen per question.",
  },
  {
    q: "What if a big job costs more than I have?",
    a: "It quotes before it runs, so you decide. And a balance cannot go below zero, so nothing can overspend on you.",
  },
  {
    q: "How do I know what an answer cost?",
    a: "Each one says as it lands. Beyond that, thirty days of spending, totals per conversation, and a receipt for every answer.",
  },
  {
    q: "Are my chats used for training?",
    a: "Never. Private chats are kept nowhere and erased when ended, enforced on the server rather than promised in a policy.",
  },
  {
    q: "Which languages does it speak?",
    a: "All 11 official languages. It asks which one you want before anything else.",
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
      tone="paper"
      eyebrow="Questions"
      title="Asked first, answered here"
    >
      <div className="grid gap-x-16 lg:grid-cols-2">
        {[faqs.slice(0, 5), faqs.slice(5)].map((column, columnIndex) => (
          <Reveal key={columnIndex} delay={columnIndex * 120}>
            <Accordion type="single" collapsible>
              {column.map((faq) => (
                <AccordionItem
                  key={faq.q}
                  value={faq.q}
                  className="border-b border-border"
                >
                  <AccordionTrigger className="min-h-11 cursor-pointer py-6 text-left text-lg font-medium hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base text-ink-muted">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
