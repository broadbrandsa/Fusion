import type { CSSProperties } from "react";

import { formatRand } from "@/lib/format";
import { cn } from "@/lib/utils";

/**
 * A year of spending as a single line. Nothing else.
 *
 * It tracks in from the left. The stroke draws by dash offset, the fill is
 * wiped by a clip on the same curve so it is never ahead of the line, and
 * every dot waits until the sweep reaches its own x. Three parts, one clock,
 * so it reads as a pen crossing the chart rather than as three effects.
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
 * The year is an illustration. Nothing on it is presented as data, and with
 * the months gone there is no longer any text in the chart at all, so the
 * aria-label carries the whole meaning for a screen reader.
 */
/** Twelve months of an example year. The months are not drawn any more. */
const SPEND = [0, 20, 120, 50, 0, 0, 20, 120, 0, 50, 0, 20];

/* A viewBox rather than pixels, so the whole thing scales with its container. */
const W = 1000;
const H = 230;
const PAD_X = 10;
const PAD_Y = 14;
const CEILING = 135;

const x = (i: number) => PAD_X + (i * (W - PAD_X * 2)) / (SPEND.length - 1);
const y = (value: number) => PAD_Y + (1 - value / CEILING) * (H - PAD_Y * 2);

const points = SPEND.map((value, i) => [x(i), y(value)] as const);
const linePath = points
  .map(([px, py], i) => `${i ? "L" : "M"}${px} ${py}`)
  .join(" ");
const areaPath = `${linePath} L${x(SPEND.length - 1)} ${y(0)} L${x(0)} ${y(0)} Z`;
const peak = Math.max(...SPEND);

/* How long the line actually is. It is a polyline, so this is just the sum of
   the segments, and knowing it exactly matters: a dasharray longer than the
   path finishes the draw before the line ends, and the last stretch appears
   to jump into place instead of being drawn. */
const PATH_LENGTH = points.reduce((total, [px, py], i) => {
  if (i === 0) return total;
  const [qx, qy] = points[i - 1];
  return total + Math.hypot(px - qx, py - qy);
}, 0);

/* One clock for the whole sweep. Each dot waits until the sweep reaches its
   own x, so the line appears to pick the dots up as it passes them. */
const SWEEP_MS = 1600;
const dotDelay = (px: number) => Math.round((px / W) * SWEEP_MS);

export function SpendChart({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={cn("chart-line w-full", className)}
      style={
        {
          "--chart-len": PATH_LENGTH.toFixed(1),
          "--chart-ms": `${SWEEP_MS}ms`,
        } as CSSProperties
      }
      role="img"
      aria-label={`A year of spending, shown as a line. Eight months at nothing, and four bursts rising to ${formatRand(peak)} in the busiest.`}
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
        SPEND[i] > 0 ? (
          <circle
            key={i}
            cx={px}
            cy={py}
            r="5"
            fill="var(--steel)"
            className="chart-dot"
            style={
              { "--dot-delay": `${dotDelay(px)}ms` } as CSSProperties
            }
          />
        ) : null,
      )}
    </svg>
  );
}
