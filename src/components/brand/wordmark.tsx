import { cn } from "@/lib/utils";

/**
 * PLACEHOLDER. The brand book is explicit that the wordmark is never rebuilt
 * in another typeface, so this stands in only until the official SVG lands in
 * /public/images. It exists so layout and clear space can be worked on now.
 *
 * The mark exists in exactly two colours: white on dark grounds, and graphite
 * #1C2126 on light grounds. It inherits the current text colour, so a tone
 * scope handles that on its own.
 */
export function Wordmark({
  className,
  label = "Digital Fusion",
  decorative = false,
}: {
  className?: string;
  label?: string;
  /** For watermarks. Drops it out of the accessibility tree entirely. */
  decorative?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex flex-col font-heading leading-[0.82] font-extrabold tracking-[-0.03em] uppercase",
        "text-current",
        className,
      )}
      {...(decorative
        ? { "aria-hidden": true as const }
        : { role: "img", "aria-label": label })}
      data-placeholder="wordmark"
    >
      <span className="text-[0.62em]">Digital</span>
      <span>Fusion</span>
    </span>
  );
}
