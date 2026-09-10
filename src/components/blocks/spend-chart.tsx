import { formatRand } from "@/lib/format";
import { cn } from "@/lib/utils";

/**
 * A year of spending as a single line. Nothing else.
 *
 * Steel is correct rather than a colour-rule exception, because the quantity
 * plotted is money. There is no legend, no totals and no annotation: the
 * shape is the whole point, and a spiky line next to a heading that reads
 * "you use AI in bursts" does not need explaining.
 *
 * The subscription reference line came out with the labels. An unlabelled
 * dashed rule is a thing a reader has to decode, and the flat-billing half of
 * the argument is already carried by the heading and by the comparison table
 * further down the page.
 *
 * The year is an illustration. It is not presented as data, and no figure
 * from it is claimed anywhere.
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

/* A viewBox rather than pixels, so the whole thing scales with its container. */
const W = 1000;
const H = 260;
const PAD_X = 10;
const PAD_TOP = 18;
const PAD_BOTTOM = 34;
const CEILING = 135;

const x = (i: number) => PAD_X + (i * (W - PAD_X * 2)) / (MONTHS.length - 1);
const y = (value: number) =>
  PAD_TOP + (1 - value / CEILING) * (H - PAD_TOP - PAD_BOTTOM);

const points = MONTHS.map(([, value], i) => [x(i), y(value)] as const);
const linePath = points
  .map(([px, py], i) => `${i ? "L" : "M"}${px} ${py}`)
  .join(" ");
const areaPath = `${linePath} L${x(MONTHS.length - 1)} ${y(0)} L${x(0)} ${y(0)} Z`;
const peak = Math.max(...MONTHS.map(([, v]) => v));

export function SpendChart({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={cn("chart-line w-full", className)}
      role="img"
      aria-label={`An example year of spending, shown as a line. Eight months at nothing, and four bursts rising to ${formatRand(peak)} in the busiest.`}
    >
      <defs>
        <linearGradient id="spend-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--steel)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--steel)" stopOpacity="0" />
        </linearGradient>
      </defs>

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
  );
}
