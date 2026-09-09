import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Photography. Sources are Unsplash, resized to 2400px and re-encoded, with
 * credits in docs/IMAGE-CREDITS.md.
 *
 * Two things to keep in mind when adding more. None of the current set was
 * shot in South Africa, which works against the built-for-here claim more than
 * it works against anything else. And the brand book asks for calm, precise
 * and undecorated, so images carry a slight desaturation to keep them from
 * shouting over greyscale chrome and a steel figure.
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
  cookingTogether: {
    src: "/images/photos/cooking-together.jpg",
    alt: "Two people cooking together at a stove, one offering the other a taste from a spoon",
  },
  phoneInHand: {
    src: "/images/photos/phone-in-hand.jpg",
    alt: "Close on a pair of hands using a phone at a desk",
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
      className={cn("relative overflow-hidden rounded-2xl bg-surface", className)}
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
