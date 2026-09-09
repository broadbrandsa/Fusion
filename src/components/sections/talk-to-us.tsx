import Link from "next/link";

import { Reveal } from "@/components/blocks/reveal";
import { Button } from "@/components/ui/button";
import { contact } from "@/content/site";

/** A route, not a feature. Per-learner accounts are not built. */
export function TalkToUs() {
  return (
    <section id="contact" className="section-y">
      <div className="container-site">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-10 text-center md:p-16">
            <p className="text-xs tracking-[0.16em] text-ink-muted uppercase">
              Schools and teams
            </p>
            <h2 className="display-3 mt-6">Buying for a class?</h2>
            <p className="mx-auto mt-6 max-w-lg text-lg text-ink-muted">
              Most training providers buy one subscription and make a room
              share it. Tell us what you need instead.
            </p>
            <Button size="lg" variant="accent" className="mt-10 h-14 rounded-full px-7 text-base" asChild>
              <Link href={contact.href}>Talk to us</Link>
            </Button>
            <p className="mt-5 text-sm text-ink-muted">
              Same place for any other question.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
