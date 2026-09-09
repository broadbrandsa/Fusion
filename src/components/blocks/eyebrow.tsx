import { cn } from "@/lib/utils";

/** Section label. Uppercase, tracked out, never larger than the 13px floor. */
export function Eyebrow({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-xs font-medium tracking-[0.16em] text-ink-muted uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}
