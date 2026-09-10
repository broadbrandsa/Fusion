import { CountUp } from "@/components/blocks/count-up";
import { competitorPricing } from "@/content/site";
import { formatRand } from "@/lib/format";
import { cn } from "@/lib/utils";

/**
 * The core argument, drawn: a line of what you actually spent against the flat
 * line a subscription charges.
 *
 * Steel is correct here rather than a colour-rule exception, because every
 * quantity on the chart is money. The subscription reference stays grey and
 * dashed, so the only coloured thing is your own usage.
 *
 * The year is an illustration and says so on the page, and it uses the
 * cheapest competitor rather than the dearest so the comparison cannot be
 * accused of flattering itself.
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

/* A viewBox rather than pixels, so the whole thing scales with its container. */
const W = 1000;
const H = 300;
const PAD_X = 8;
const PAD_TOP = 26;
const PAD_BOTTOM = 34;
const CEILING = 175;

const x = (i: number) =>
  PAD_X + (i * (W - PAD_X * 2)) / (MONTHS.length - 1);
const y = (value: number) =>
  PAD_TOP + (1 - value / CEILING) * (H - PAD_TOP - PAD_BOTTOM);

const points = MONTHS.map(([, value], i) => [x(i), y(value)] as const);
const linePath = points.map(([px, py], i) => `${i ? "L" : "M"}${px} ${py}`).join(" ");
const areaPath = `${linePath} L${x(MONTHS.length - 1)} ${y(0)} L${x(0)} ${y(0)} Z`;

export function SpendChart({ className }: { className?: string }) {
  return (
    <figure className={cn("w-full", className)}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="chart-line w-full"
        role="img"
        aria-label={`An example year of spending. What you used runs from nothing in eight months to R120 in the busiest, totalling ${formatRand(PREPAID_TOTAL)}. The cheapest subscription charges ${formatRand(SUBSCRIPTION)} every month regardless, totalling ${formatRand(SUBSCRIPTION_TOTAL)}.`}
      >
        <defs>
          <linearGradient id="spend-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--steel)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--steel)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* The flat line, charged whatever you do */}
        <line
          x1={PAD_X}
          x2={W - PAD_X}
          y1={y(SUBSCRIPTION)}
          y2={y(SUBSCRIPTION)}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          className="text-ink-muted"
        />
        <text
          x={W - PAD_X}
          y={y(SUBSCRIPTION) - 12}
          textAnchor="end"
          className="fill-ink-muted font-mono text-[15px]"
        >
          {formatRand(SUBSCRIPTION)} a month, always
        </text>

        {/* What you actually used */}
        <path d={areaPath} fill="url(#spend-fill)" className="chart-area" />
        <path
          d={linePath}
          fill="none"
          stroke="var(--steel)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="chart-stroke"
        />
        {points.map(([px, py], i) =>
          MONTHS[i][1] > 0 ? (
            <circle
              key={MONTHS[i][0]}
              cx={px}
              cy={py}
              r="5"
              fill="var(--steel)"
              className="chart-dot"
              style={{ ["--dot-delay" as string]: `${400 + i * 45}ms` }}
            />
          ) : null,
        )}

        {MONTHS.map(([month], i) => (
          <text
            key={month}
            x={x(i)}
            y={H - 8}
            textAnchor="middle"
            className="fill-ink-muted font-mono text-[15px]"
          >
            {month}
          </text>
        ))}
      </svg>

      <figcaption className="mt-10 flex flex-wrap items-baseline gap-x-12 gap-y-5 border-t border-border pt-8">
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
