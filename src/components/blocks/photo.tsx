import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Photography. Sources are Unsplash, resized to 2400px and re-encoded, with
 * credits in docs/IMAGE-CREDITS.md.
 *
 * `cafePhone` arrived 10 September 2026 and is the first frame in the set that
 * reads as local rather than imported. Treat that as unverified: the location
 * is not stated on the source and nobody here has confirmed it, so it is not a
 * claim the site makes, only a reason this frame carries the band where the
 * built-for-here argument lands. Everything else in the set is visibly not
 * South African, which is the gap to keep closing.
 *
 * The brand book asks for calm, precise and undecorated, so images carry a
 * slight desaturation to keep them from shouting over greyscale chrome and a
 * steel figure.
 */
export const photos = {
  projectRenovation: {
    src: "/images/photos/project-renovation.jpg",
    alt: "Two people cutting timber with a mitre saw in a half-finished room",
  },
  projectFlatpack: {
    src: "/images/photos/project-flatpack.jpg",
    alt: "Someone sitting on the floor assembling flat-pack furniture with the instructions open beside them",
  },
  phoneAtDusk: {
    src: "/images/photos/phone-at-dusk.jpg",
    alt: "A man outdoors at dusk, his face lit by the screen of the phone in his hands",
  },
  kitchenCooking: {
    src: "/images/photos/kitchen-cooking.jpg",
    alt: "A woman stirring a pot at the stove in a bright kitchen",
  },
  friendsTea: {
    src: "/images/photos/friends-tea.jpg",
    alt: "Four friends laughing over mugs of tea, one pair high-fiving across the table",
  },
  phoneInHand: {
    src: "/images/photos/phone-in-hand.jpg",
    alt: "Close on a pair of hands using a phone at a desk",
  },
  studyDesk: {
    /* Renamed when the frame was mirrored. Editing an image in place leaves
       caches serving the old bytes, because the URL does not change. */
    src: "/images/photos/study-at-window.jpg",
    alt: "Someone at a desk by a window, speaking into their phone with an open notebook in front of them",
  },
  cafePhone: {
    /* Cropped to 3400 x 1642 of the original 5184 x 3456, from y 300. That
       window puts him at 70% across, clear of the type column, and keeps the
       type over the dark window rather than the sunlit patches, which is what
       drops the scrim this band needs from 0.76 to 0.52. */
    src: "/images/photos/cafe-phone.jpg",
    alt: "A young man laughing at something on his phone in a sunlit café",
  },
  sideHustleMaker: {
    src: "/images/photos/side-hustle-maker.jpg",
    alt: "A maker painting a plant pot at a home workbench, surrounded by paint tins and brushes",
  },
} as const;

export type PhotoName = keyof typeof photos;

export function Photo({
  photo,
  className,
  ratio = "4 / 3",
  sizes = "(min-width: 1024px) 600px, 100vw",
  priority = false,
  grade = true,
}: {
  photo: PhotoName;
  className?: string;
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  /** Slight desaturation, so photography never outshouts the money. */
  grade?: boolean;
}) {
  const { src, alt } = photos[photo];

  return (
    <div
      className={cn(
        "photo-zoom relative overflow-hidden rounded-2xl bg-surface",
        className,
      )}
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn(
          "object-cover",
          grade && "saturate-[0.78] contrast-[1.02]",
        )}
      />
    </div>
  );
}
