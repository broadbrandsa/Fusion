import Image from "next/image";
import Link from "next/link";

import { AppShot } from "@/components/blocks/app-shot";
import { Pill } from "@/components/blocks/pill";
import { Reveal } from "@/components/blocks/reveal";
import { Button } from "@/components/ui/button";
import { photos } from "@/components/blocks/photo";
import { cta, hero, stores } from "@/content/site";

/**
 * Vitara's hero: an inset rounded panel carrying a full-bleed photograph, with
 * the headline on the left, the device in the middle bleeding off the bottom,
 * and the supporting line plus actions on the right.
 *
 * The photograph is graded down hard and sat under a scrim, because white type
 * has to clear AA over the busiest part of it and because the brand book asks
 * for calm rather than a picture competing with the headline.
 *
 * The panel slides under the sticky header, so the nav floats over the image.
 */
export function Hero() {
  return (
    <section className="-mt-[var(--header-h)] px-5 pt-0 md:px-10">
      <div className="relative isolate overflow-hidden rounded-[1.75rem] md:rounded-[2.25rem]">
        <Image
          src={photos.phoneAtDusk.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center saturate-[0.7]"
        />
        {/* Scrim. Two layers: a flat wash for overall contrast, and a stronger
            gradient at the left and bottom where the type actually sits. */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#12151A]/72" />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#12151A]/85 via-[#12151A]/40 to-[#12151A]/70"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-[#12151A] to-transparent"
        />

        <div className="relative grid gap-12 px-6 pt-[calc(var(--header-h)+2.5rem)] pb-0 md:px-12 lg:grid-cols-[1.05fr_0.9fr_0.85fr] lg:items-center lg:gap-10 lg:pt-[calc(var(--header-h)+4rem)]">
          {/* Headline */}
          <div className="lg:pb-24">
            <Reveal>
              <Pill withDot className="border-white/20 bg-white/10 text-on-image">
                Prepaid, in rand
              </Pill>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="display-1 mt-7 max-w-md text-on-image">
                {hero.headline}
              </h1>
            </Reveal>
          </div>

          {/* Device, bleeding off the bottom of the panel */}
          <Reveal
            delay={200}
            className="order-last mx-auto -mb-16 w-full max-w-[17rem] lg:order-none lg:-mb-28 lg:max-w-[19rem]"
          >
            <AppShot shot="credit" priority width={380} />
          </Reveal>

          {/* Supporting line and actions */}
          <div className="lg:pb-24">
            <Reveal delay={140}>
              <p className="max-w-sm text-lg text-on-image-muted">{hero.subhead}</p>
            </Reveal>
            <Reveal delay={230}>
              <div className="mt-9 flex flex-col items-start gap-3">
                <Button
                  size="lg"
                  variant="accent"
                  className="group/cta h-14 rounded-full pr-2 pl-7 text-base"
                  asChild
                >
                  <Link href={stores[0].href}>
                    {stores[0].label}
                    <span
                      aria-hidden="true"
                      className="ml-3 grid size-9 place-items-center rounded-full bg-[#191C20] text-lime transition-transform duration-300 ease-in-out group-hover/cta:translate-x-0.5"
                    >
                      &rarr;
                    </span>
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="h-14 rounded-full border border-white/25 bg-white/10 px-7 text-base text-on-image backdrop-blur-sm hover:bg-white/20"
                  asChild
                >
                  <Link href={stores[1].href}>{stores[1].label}</Link>
                </Button>
              </div>
              <p className="mt-5 text-sm text-on-image-faint">{cta.promise}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
