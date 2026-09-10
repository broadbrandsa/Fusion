import { CountUp } from "@/components/blocks/count-up";
import { competitorPricing } from "@/content/site";
import { formatRand } from "@/lib/format";
import { cn } from "@/lib/utils";

/**
 * The core argument, drawn: spiky prepaid spend against a flat subscription.
 *
 * A picture does this better than a paragraph, because the shape mismatch *is*
 * the argument. Steel is correct here rather than a colour-rule exception,
 * since every quantity on the chart is money.
 *
 * The year is an illustration and is labelled as one on the page. The
 * subscription line uses the cheapest competitor rather than the dearest, so
 * the comparison cannot be accused of being flattered.
 */
const MONTHS = [
  ["Jan", 0],
  ["Feb", 20],
  ["Mar", 120],
  ["Apr", 50],
  ["May", 0],
  ["Jun", 0],
  ["Jul", 20],
  ["Aug", 120],
  ["Sep", 0],
  ["Oct", 50],
  ["Nov", 0],
  ["Dec", 20],
] as const;

const SUBSCRIPTION = competitorPricing.subscriptionRangeZar[0];
const PREPAID_TOTAL = MONTHS.reduce((sum, [, v]) => sum + v, 0);
const SUBSCRIPTION_TOTAL = SUBSCRIPTION * 12;
const CEILING = 168;

export function SpendChart({ className }: { className?: string }) {
  return (
    <figure className={cn("w-full", className)}>
      <div
        className="relative"
        role="img"
        aria-label={`An example year of spending. Prepaid: eight months at nothing, and four top-ups of R20 to R120, totalling ${formatRand(PREPAID_TOTAL)}. The cheapest subscription charges ${formatRand(SUBSCRIPTION)} every month regardless, totalling ${formatRand(SUBSCRIPTION_TOTAL)}.`}
      >
        {/* The flat line a subscription charges, whatever you do */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 z-10 flex items-center"
          style={{ bottom: `${(SUBSCRIPTION / CEILING) * 100}%` }}
        >
          <div className="h-px flex-1 border-t border-dashed border-ink-muted" />
          <span className="figure ml-3 shrink-0 text-xs text-ink-muted">
            {formatRand(SUBSCRIPTION)} / month, always
          </span>
        </div>

        <div
          aria-hidden="true"
          className="flex h-52 items-end gap-1.5 sm:gap-2.5"
        >
          {MONTHS.map(([month, amount], index) => (
            <div key={month} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex w-full flex-1 items-end">
                {amount > 0 ? (
                  <div
                    className="chart-bar w-full rounded-t-[3px] bg-steel"
                    style={{
                      height: `${(amount / CEILING) * 100}%`,
                      ["--bar-delay" as string]: `${index * 55}ms`,
                    }}
                  />
                ) : (
                  <div className="h-px w-full bg-ink-muted/25" />
                )}
              </div>
              <span className="figure text-[0.6875rem] text-ink-muted">
                {month}
              </span>
            </div>
          ))}
        </div>
      </div>

      <figcaption className="mt-8 flex flex-wrap items-baseline gap-x-10 gap-y-4 border-t border-border pt-7">
        <span>
          <span className="block text-sm text-ink-muted">
            What you actually used
          </span>
          <span className="money mt-1 block text-3xl">
            <CountUp value={PREPAID_TOTAL} format="rand" />
          </span>
        </span>
        <span>
          <span className="block text-sm text-ink-muted">
            What a subscription charged
          </span>
          <span className="money mt-1 block text-3xl">
            <CountUp
              value={SUBSCRIPTION_TOTAL}
              format="rand"
              durationMs={1400}
            />
          </span>
        </span>
        <span className="text-sm text-ink-muted">
          An example year at the cheapest subscription price. Yours will have
          different months.
        </span>
      </figcaption>
    </figure>
  );
}
