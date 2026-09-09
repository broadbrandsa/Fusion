import { competitorPricing } from "@/content/site";
import { formatRand } from "@/lib/format";

import { SectionShell } from "./section-shell";

const [lowZar, highZar] = competitorPricing.subscriptionRangeZar;
const starterZar = 20;
const lowBundles = Math.round(lowZar / starterZar);
const highBundles = Math.round(highZar / starterZar);

/**
 * The strongest arithmetic we have. No competitor is named on the site, by
 * decision: the range is checkable on its own, and one of them is a model we
 * sell. Pricing confirmed 28 August 2026 and must be re-checked before launch.
 */
export function Comparison() {
  return (
    <SectionShell
      id="comparison"
      eyebrow="The arithmetic"
      title="A month of subscription is seven to sixteen bundles"
      lede="A typical AI subscription runs from R149 to R324 a month, in dollars, on a card that takes recurring international billing. If you ask a handful of questions a week, you are paying for a hundred you never asked."
    >
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-7 md:col-span-2">
          <p className="text-xs tracking-[0.14em] text-ink-faint uppercase">
            A typical subscription
          </p>
          <p className="money mt-4 text-4xl">
            {formatRand(lowZar)} – {formatRand(highZar)}
          </p>
          <p className="mt-2 text-sm text-ink-faint">
            every month, whether you ask anything or not
          </p>
          <div className="mt-7 space-y-3 border-t border-border pt-6 text-sm text-ink-muted">
            <p>Renews on its own until you stop it.</p>
            <p>Never tells you what a single answer cost.</p>
            <p>Needs a card that accepts international recurring billing.</p>
          </div>
        </div>

        <div className="tone-graphite flex flex-col rounded-2xl border border-white/10 p-7">
          <p className="text-xs tracking-[0.14em] text-ink-faint uppercase">
            The same money here
          </p>
          <p className="money mt-4 text-4xl">
            {lowBundles}–{highBundles}
          </p>
          <p className="mt-2 text-sm text-ink-faint">
            Starter bundles, spread over as long as you like
          </p>
          <p className="mt-7 border-t border-white/10 pt-6 text-sm text-ink-muted">
            Buy one in March for the renovation, nothing in April, one in May
            for the job applications. The bill follows the work.
          </p>
        </div>
      </div>

      <p className="mt-6 text-xs text-ink-faint">
        Subscription pricing checked 28 August 2026. Re-checked before launch.
      </p>
    </SectionShell>
  );
}
