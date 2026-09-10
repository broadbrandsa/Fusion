import Image from "next/image";
import Link from "next/link";

import { AppShot } from "@/components/blocks/app-shot";
import { photos } from "@/components/blocks/photo";
import { Reveal } from "@/components/blocks/reveal";
import { StoreBadge } from "@/components/blocks/store-badge";
import { cta, hero } from "@/content/site";

/**
 * Vitara's hero, matched against its rendered values at 1440 rather than its
 * markup.
 *
 * What that measurement changed. The overlay is a single flat wash at 0.6, not
 * the 0.72 plus two gradients this had before, which was burying the
 * photograph entirely. Vitara's three columns are near-equal thirds
 * (431/385/423 of 1320, 40px gap), and the outer two are pushed down 200px
 * while the device column drops only 50px, which is what makes the device
 * tower over the type. Its title is 86px at -2px tracking, its lede 20px at
 * 1.2, and its two actions stack rather than sit side by side.
 *
 * Scrim strength is set from this photograph rather than a generic worst case.
 * Measured, it is very dark: 99th percentile luminance is 0.168 in the
 * headline third, so 0.6 leaves white at 8.6:1. The extra left and right
 * gradients only guard the handful of blown highlights around the phone glow.
 */
export function Hero() {
  return (
    <section className="px-5">
      <div className="relative">
        {/* Background panel. Vitara's runs taller than its content so the
            image continues past the device; ours stops at the panel because
            the next section is paper and a bleed would sit on top of it. */}
        <div className="absolute inset-0 overflow-hidden rounded-[30px]">
          <Image
            src={photos.phoneAtDusk.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[60%_center]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-[#12151A]/60" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(18,21,26,0.45)_0%,rgba(18,21,26,0)_42%,rgba(18,21,26,0)_58%,rgba(18,21,26,0.25)_100%)]"
          />
        </div>

        <div className="relative mx-auto w-full max-w-[1380px] px-0 md:px-[30px]">
          <div className="grid gap-10 pt-14 pb-16 lg:grid-cols-[1.12fr_1fr_1.1fr] lg:pt-[75px] lg:pb-[8.5rem]">
            {/* Left: badge and headline, pushed down so the device leads */}
            <div className="flex flex-col items-start gap-5 px-6 md:px-0 lg:pt-[200px]">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-5 py-1.5 text-sm text-on-image">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-lime"
                  />
                  Prepaid, in rand
                </span>
              </Reveal>
              <Reveal delay={90}>
                <h1 className="display-1 tracking-[-0.024em] text-on-image">
                  {hero.headline}
                </h1>
              </Reveal>
            </div>

            {/* Middle: the device, dropped only slightly so it sits highest */}
            <Reveal
              delay={200}
              className="order-last mx-auto w-full max-w-[19rem] px-6 md:px-0 lg:order-none lg:max-w-none lg:pt-[50px]"
            >
              {/* The whole device, uncropped. A full 1206x2622 capture is
                  2.17 times as tall as it is wide, so the width comes down to
                  about 300 to fit the phone in without the panel running away.
                  Spending rather than credit, because the credit screen opens
                  the stepper directly below and a thirty-day chart with the
                  figure in steel says "priced per answer" faster. */}
              <AppShot
                shot="spending"
                priority
                width={340}
                className="mx-auto w-full max-w-[17rem] lg:max-w-[19rem]"
              />
            </Reveal>

            {/* Right: the line and the actions, stacked as Vitara stacks them */}
            <div className="flex flex-col items-start gap-[30px] px-6 md:px-0 lg:pt-[200px]">
              <Reveal delay={140}>
                <p className="max-w-[22.5rem] text-lg leading-[1.3] text-on-image-muted">
                  {hero.subhead}
                </p>
              </Reveal>
              <Reveal delay={230}>
                <div className="flex flex-col items-start gap-2.5">
                  <StoreBadge height={56} className="-ml-1.5" />
                  <Link
                    href={cta.secondary.href}
                    className="inline-flex min-h-14 items-center rounded-full border border-white/15 bg-white/[0.15] px-7 text-base text-on-image backdrop-blur-sm transition-colors duration-300 ease-in-out hover:bg-white/25"
                  >
                    {cta.secondary.label}
                  </Link>
                </div>
                <p className="mt-5 text-sm text-on-image-faint">
                  {cta.promise}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
