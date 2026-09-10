import {
  Bookmark,
  ChefHat,
  FileText,
  Image as ImageIcon,
  Presentation,
  Sheet,
} from "lucide-react";
import type { ReactNode } from "react";

import { AppShot } from "@/components/blocks/app-shot";
import { cn } from "@/lib/utils";

/**
 * The things the app keeps, floated around the device that holds them.
 *
 * Habitline's floating badges, measured: a pill at 8px 20px padding with a
 * `0 8px 18px rgba(19,21,21,0.05)` shadow and roughly seven degrees of
 * rotation. The rotation is what stops six chips reading as a form.
 *
 * They are a real list rather than decoration, because they name things the
 * body copy does not: spreadsheets and pictures.
 *
 * Absolute placement waits for xl. At the lg breakpoint the two-column grid
 * gives each card about 460px, and a 184px device with a chip either side
 * needs more than that, so they overlapped the phone. Below xl they wrap into
 * a plain row above it.
 */
const KEPT = [
  { label: "Documents", icon: FileText, at: "xl:top-[6%] xl:left-0", tilt: "-6deg" },
  { label: "Decks", icon: Presentation, at: "xl:top-[2%] xl:right-0", tilt: "5deg" },
  { label: "Spreadsheets", icon: Sheet, at: "xl:top-[34%] xl:left-0", tilt: "4deg" },
  { label: "Pictures", icon: ImageIcon, at: "xl:top-[30%] xl:right-0", tilt: "-5deg" },
  { label: "Recipes", icon: ChefHat, at: "xl:top-[62%] xl:left-0", tilt: "6deg" },
  { label: "Bookmarks", icon: Bookmark, at: "xl:top-[58%] xl:right-1", tilt: "-4deg" },
];

function Chip({
  children,
  className,
  tilt,
}: {
  children: ReactNode;
  className?: string;
  tilt: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-surface px-5 py-2 text-sm font-medium text-ink shadow-[0_8px_18px_rgba(19,21,21,0.08)]",
        className,
      )}
      style={{ transform: `rotate(${tilt})` }}
    >
      {children}
    </span>
  );
}

export function CollectionOrbit() {
  return (
    <div className="relative">
      <ul className="flex flex-wrap justify-center gap-2 xl:block xl:gap-0">
        {KEPT.map(({ label, icon: Icon, at, tilt }) => (
          <li key={label} className={cn("xl:absolute xl:z-10", at)}>
            <Chip tilt={tilt}>
              <Icon aria-hidden="true" className="size-4 shrink-0 text-ink-muted" />
              {label}
            </Chip>
          </li>
        ))}
      </ul>

      <div className="mt-6 xl:mt-0 xl:px-24">
        <AppShot shot="collections" width={280} className="mx-auto max-w-[11.5rem]" />
      </div>
    </div>
  );
}
