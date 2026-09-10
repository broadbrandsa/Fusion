import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * A real app screenshot in a phone shell. Captures dated 09 September 2026,
 * 1206 x 2622, so they are portrait and want a tall slot.
 *
 * Real captures beat recreations, so these carry the visual weight wherever a
 * whole screen is the point. The hand-built screens in app-screens.tsx are for
 * moments we have no capture of yet, such as an answer landing with its cost.
 */
export const appShots = {
  credit: {
    src: "/images/app/app-credit.png",
    alt: "Your credit screen showing a balance of 59 139 credits in steel, where the credit came from, and the Starter, Regular and Heavy bundles",
  },
  spending: {
    src: "/images/app/app-spending.png",
    alt: "The spending screen with a thirty-day chart, where the credit went, and totals by conversation",
  },
  sharedChat: {
    src: "/images/app/app-shared-chat.png",
    alt: "Starting a shared chat for up to five people, where the cost is split between whoever pays",
  },
  games: {
    src: "/images/app/app-games.png",
    alt: "The game picker: Quiz Night, Twenty Questions, Stop the Bus and The Court",
  },
  lists: {
    src: "/images/app/app-lists.png",
    alt: "The lists screen with a shopping list showing how many items are ticked",
  },
  listDetail: {
    src: "/images/app/app-list-detail.png",
    alt: "A shopping list filled in by AI with seventeen specified grocery items, some ticked off",
  },
  collections: {
    src: "/images/app/app-collections.png",
    alt: "Collections: your files, saved recipes and bookmarked sources",
  },
} as const;

export type AppShotName = keyof typeof appShots;

export function AppShot({
  shot,
  className,
  priority = false,
  width = 320,
  frame = "solid",
}: {
  shot: AppShotName;
  className?: string;
  priority?: boolean;
  width?: number;
  /**
   * `glass` for a device floating on a photograph, where a solid slab reads
   * as a sticker cut out and dropped on top. The screen inside stays a real
   * capture either way; only the shell changes.
   */
  frame?: "solid" | "glass";
}) {
  const { src, alt } = appShots[shot];

  return (
    <div
      className={cn(
        "overflow-hidden rounded-[2rem] p-1.5 shadow-2xl shadow-black/50",
        frame === "glass"
          ? "border border-white/25 bg-white/10 backdrop-blur-md"
          : "border border-white/10 bg-[#191C20]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={Math.round((width * 2622) / 1206)}
        priority={priority}
        sizes={`${width}px`}
        className="h-auto w-full rounded-[1.65rem]"
      />
    </div>
  );
}
