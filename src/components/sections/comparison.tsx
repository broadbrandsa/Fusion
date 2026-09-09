import { Reveal } from "@/components/blocks/reveal";
import { competitorPricing } from "@/content/site";
import { formatRand } from "@/lib/format";

import { SectionShell } from "./section-shell";

const [lowZar, highZar] = competitorPricing.subscriptionRangeZar;
const lowBundles = Math.round(lowZar / 20);
const highBundles = Math.round(highZar / 20);

/** No competitor is named on the site, by decision. The range does the work. */
export function Comparison() {
  return (
    <SectionShell
      id="comparison"
      eyebrow="The arithmetic"
      title="One month of subscription is seven to sixteen bundles"
      lede="Ask a handful of questions a week and you are paying for a hundred you never asked."
    >
      <div className="grid gap-4 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <div className="hover-lift h-full rounded-2xl border border-border bg-card p-9">
            <p className="text-xs tracking-[0.14em] text-ink-muted uppercase">
              A typical subscription
            </p>
            <p className="money mt-6 text-[3.25rem] leading-none">
              {formatRand(lowZar)}–{formatRand(highZar)}
            </p>
            <p className="mt-4 text-base text-ink-muted">every month, regardless</p>
            <ul className="mt-9 space-y-3 border-t border-border pt-7 text-base text-ink-muted">
              <li>Renews until you stop it.</li>
              <li>Never shows what an answer cost.</li>
              <li>Needs a card that takes recurring billing.</li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={140} className="md:col-span-2">
          <div className="tone-graphite hover-lift flex h-full flex-col rounded-2xl border border-white/10 p-9">
            <p className="text-xs tracking-[0.14em] text-ink-muted uppercase">
              The same money here
            </p>
            <p className="money mt-6 text-[3.25rem] leading-none">
              {lowBundles}–{highBundles}
            </p>
            <p className="mt-4 text-base text-ink-muted">
              bundles, spread over as long as you like
            </p>
            <p className="mt-9 border-t border-white/10 pt-7 text-base text-ink-muted">
              One in March for the renovation. Nothing in April. The bill
              follows the work.
            </p>
          </div>
        </Reveal>
      </div>

      <p className="mt-8 text-sm text-ink-muted">
        Subscription pricing checked 28 August 2026.
      </p>
    </SectionShell>
  );
}
