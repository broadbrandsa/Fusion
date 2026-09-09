import { cn } from "@/lib/utils";

/**
 * PLACEHOLDER. The brand book is explicit that the wordmark is never rebuilt
 * in another typeface, so this stands in only until the official SVG lands in
 * /public/images. It exists so layout and clear space can be worked on now.
 *
 * The mark exists in exactly two colours: white on dark grounds, and graphite
 * #1C2126 on light grounds. Clear space is the height of the FUSION capitals
 * on every side, which is what the wrapper padding below reserves.
 */
export function Wordmark({
  className,
  label = "Digital Fusion",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex flex-col font-heading leading-[0.82] font-extrabold tracking-[-0.03em] uppercase",
        "text-current",
        className,
      )}
      aria-label={label}
      role="img"
      data-placeholder="wordmark"
    >
      <span className="text-[0.62em]">Digital</span>
      <span>Fusion</span>
    </span>
  );
}
