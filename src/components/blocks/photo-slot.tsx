import { cn } from "@/lib/utils";

/**
 * A photography slot, held open until real images arrive.
 *
 * The reference layouts lean hard on photography, and there is none in the
 * repo, so these keep the composition intact and say plainly what belongs
 * there. Swap each for a next/image and delete this component when the shoot
 * lands. Nothing here ships to a customer looking like this.
 *
 * The brand book asks for calm, precise and undecorated, so the brief for any
 * photography is real South African hands and phones in real places, never
 * glossy stock optimism.
 */
export function PhotoSlot({
  brief,
  className,
  ratio = "4 / 3",
}: {
  brief: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={cn(
        "grid place-items-center rounded-2xl border border-dashed border-border bg-surface-high/50 p-6",
        className,
      )}
      style={{ aspectRatio: ratio }}
      data-placeholder="photo"
    >
      <p className="max-w-xs text-center text-xs text-ink-faint">
        <span className="block font-medium tracking-[0.14em] uppercase">
          Photo
        </span>
        <span className="mt-2 block">{brief}</span>
      </p>
    </div>
  );
}
