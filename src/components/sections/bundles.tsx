import Image from "next/image";

import { AppShot } from "@/components/blocks/app-shot";
import { CountUp } from "@/components/blocks/count-up";
import { photos } from "@/components/blocks/photo";
import { Pill } from "@/components/blocks/pill";
import { Reveal } from "@/components/blocks/reveal";
import { StoreBadge } from "@/components/blocks/store-badge";
import { bundles, cta, lapseNotice } from "@/content/site";
import { formatRand } from "@/lib/format";

/**
 * The section opens on a photograph band rather than a centred header, in the
 * shape the reference supplied on 10 September 2026: a device floating at the
 * left, the type beside it, the subject of the photograph kept clear on the
 * right. It gives the page a second full-bleed moment after the hero and
 * stops four bordered-card sections running one into the next.
 *
 * The device shows the credit screen, which is the only screen that lists the
 * bundles, so the band illustrates its own heading.
 *
 * The frame was chosen by measurement as much as by eye. Of twelve candidate
 * crops of the original, this one (3400 x 1642 from y 300) is the only one
 * that puts him clear of the type at 70% across while keeping his face in
 * shot, and it drops the scrim the band needs from 0.76 to 0.52 by leaving the
 * type over the dark window rather than the sunlit patches.
 *
 * The scrim is 0.65, set by sampling the composited pixels under the rendered
 * type at 1280, 1440 and 1920 rather than by estimating from the whole frame.
 * Worth doing that way: 0.60 left the lede's single brightest pixel at 4.42:1,
 * which a frame-wide average hides completely, and the failure was at 1280
 * only. The band keeps a fixed height while its width changes, so the cover
 * crop shows more of the frame vertically at narrower widths and the type
 * lands on different pixels at each one. Checking a single width would have
 * shipped it.
 *
 * Answer counts stay off the price cards. The app estimates 128 credits an
 * answer and the one logged transaction drew 861, so no count goes on the site
 * until the real spread is known. See docs/POSITIONING.md.
 */
export function Bundles() {
  return (
    <section id="bundles" className="section-y">
      <div className="container-site">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[30px] border border-border bg-card xl:border-transparent">
            {/* Below xl the photograph is a strip at the top of a graphite
                panel rather than a ground, because full-width type would run
                across his face and the sunlit window behind him, and holding
                that at 4.5:1 takes a 0.81 scrim, which leaves no photograph
                worth having. From xl the type column stops at 57% of the band
                and the frame becomes the ground. Between md and xl the device
                and the type still sit side by side under the strip, because
                stacking all three ran the band to 1117px at 1024.
                Below md it stacks, because a 12rem device and a paragraph do
                not both fit. */}
            <div className="absolute inset-x-0 top-0 -z-10 h-60 sm:h-72 xl:inset-0 xl:h-auto">
              <Image
                src={photos.cafePhone.src}
                alt=""
                fill
                sizes="(min-width: 1280px) 1240px, 100vw"
                className="object-cover object-[62%_32%] saturate-[0.9]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 hidden bg-[#12151A]/[0.65] xl:block"
              />
            </div>

            <div className="grid gap-12 px-6 pt-72 pb-14 sm:px-10 sm:pt-84 md:grid-cols-[12rem_minmax(0,30rem)] md:items-center xl:grid-cols-[12rem_minmax(0,25rem)] xl:gap-14 xl:py-16 xl:pt-16 xl:pl-10">
              <AppShot
                shot="credit"
                frame="glass"
                width={280}
                className="mx-auto w-full max-w-[12rem]"
              />

              <div>
                <p className="text-xs font-medium tracking-[0.16em] text-on-image-muted uppercase">
                  Bundles
                </p>
                <h2 className="display-2 mt-5 text-on-image">
                  Buy what the project needs
                </h2>
                <p className="mt-6 text-lg leading-[1.35] text-on-image-muted">
                  Bigger bundles buy more per rand. Nothing renews, so nothing
                  needs cancelling.
                </p>
                <div className="mt-9 flex flex-col items-start gap-3">
                  <StoreBadge height={56} className="-ml-1.5" />
                  <p className="text-sm text-on-image-muted">{cta.promise}</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {bundles.map((bundle, index) => {
            const featured = index === 1;

            return (
              <Reveal key={bundle.id} delay={index * 110}>
                <div
                  className={
                    featured
                      ? "tone-paper hover-lift flex h-full flex-col rounded-2xl border border-border p-9"
                      : "hover-lift flex h-full flex-col rounded-2xl border border-border bg-card p-9"
                  }
                >
                  <div className="flex items-center justify-between">
                    <p className="text-base font-medium">{bundle.name}</p>
                    {/* Greyscale on purpose. A lime badge here would sit
                        inches from the price and win. */}
                    {featured ? <Pill>Best per rand</Pill> : null}
                  </div>

                  <p className="money mt-8 text-[3.25rem] leading-none">
                    {formatRand(bundle.price)}
                  </p>
                  <p className="figure mt-4 text-sm text-ink-muted">
                    <CountUp
                      value={bundle.credits}
                      format="credits"
                      durationMs={1300}
                    />{" "}
                    credits
                  </p>
                  <p className="figure mt-1 text-sm text-ink-muted">
                    {bundle.validity} days
                  </p>

                  <ul className="mt-9 space-y-3 border-t border-border pt-7 text-base text-ink-muted">
                    <li>Every model, one balance</li>
                    <li>Every cost, as it lands</li>
                    <li>No card. Nothing renews</li>
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-14 max-w-lg text-center text-base text-ink-muted">
            {lapseNotice}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
