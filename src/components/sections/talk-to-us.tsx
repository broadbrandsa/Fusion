import Link from "next/link";

import { Button } from "@/components/ui/button";
import { contact } from "@/content/site";

import { SectionShell } from "./section-shell";

/**
 * A route, not a feature. Per-learner accounts and buying in bulk are not
 * built, so this claims nothing and simply invites the conversation. It also
 * tells us how real the institutional demand is before anything gets built.
 */
export function TalkToUs() {
  return (
    <SectionShell id="contact" tone="paper" width="narrow" align="center">
      <div className="rounded-3xl border border-border bg-card p-9 text-center md:p-12">
        <p className="text-xs tracking-[0.16em] text-ink-faint uppercase">
          Schools, colleges and teams
        </p>
        <h2 className="mt-5 font-heading text-2xl tracking-[-0.02em] md:text-3xl">
          Buying for a class instead of yourself?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-ink-muted">
          Most training providers buy one subscription and make a room full of
          learners share it. Nobody works in their own account, nobody can see
          who did what, and the seat count never matches the class. Tell us what
          you need and we will talk it through properly.
        </p>
        <Button size="lg" className="mt-8 rounded-full" asChild>
          <Link href={contact.href}>Talk to us</Link>
        </Button>
        <p className="mt-5 text-xs text-ink-faint">
          Same place for any other question. A real person answers.
        </p>
      </div>
    </SectionShell>
  );
}
