import Image from "next/image";
import Link from "next/link";

import { stores } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * The official App Store badge, used as the download button.
 *
 * Apple's marketing guidelines say the badge is used as supplied, not
 * recoloured or rebuilt, so this renders the artwork rather than a styled
 * button with an apple glyph in it. White artwork on our dark grounds, black
 * for a light one. Clear space is 25% of the badge height, reserved by the
 * padding on the link.
 *
 * Google Play is not shown for now, by decision on 10 September 2026. The URL
 * is still in `stores` and is correct, so returning it is a one-line change.
 */
export function StoreBadge({
  tone = "onDark",
  height = 52,
  className,
}: {
  tone?: "onDark" | "onLight";
  height?: number;
  className?: string;
}) {
  const apple = stores.find((store) => store.id === "apple");
  if (!apple) return null;

  const src =
    tone === "onDark"
      ? "/images/badges/app-store-white.png"
      : "/images/badges/app-store-black.png";

  return (
    <Link
      href={apple.href}
      aria-label={apple.label}
      className={cn(
        "inline-flex shrink-0 rounded-[0.6rem] transition-opacity duration-300 ease-in-out hover:opacity-85",
        className,
      )}
      style={{ padding: Math.round(height * 0.12) }}
    >
      <Image
        src={src}
        alt={apple.label}
        width={Math.round(height * 2.82)}
        height={height}
        style={{ height, width: "auto" }}
        className="w-auto"
      />
    </Link>
  );
}
