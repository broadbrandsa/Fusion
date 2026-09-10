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
 * The scrim is set from this photograph rather than a house default. Measured
 * by column band its p99 luminance runs 0.461 in the darkest quarter to 0.611
 * in the brightest, and the type column is capped at 30rem so it ends at 67%
 * of the band. Holding 0.74 to 70% leaves white at 4.91:1 across every line,
 * and easing to 0.42 after that keeps the maker in the picture.
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
          <div className="relative isolate overflow-hidden rounded-[30px]">
            <Image
              src={photos.sideHustleMaker.src}
              alt=""
              fill
              sizes="(min-width: 1024px) 1240px, 100vw"
              className="-z-10 object-cover object-[78%_center]"
            />
            {/* Below xl the type is either stacked or filling most of a
                narrower band, so the scrim has to be flat. Measured over the
                whole frame at p99 0.572, 0.78 holds white at 5.81:1. */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-[#12151A]/[0.78] xl:hidden"
            />
            {/* From xl the band is wide enough that the type stops at 67% of
                it, so the scrim only has to hold that far and the maker keeps
                her light. At 1024 the same column ran to 87% and the eased
                end of the gradient left the lede at 3.2:1. */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 hidden xl:block"
              style={{
                background:
                  "linear-gradient(to right, rgba(18,21,26,0.80) 0%, rgba(18,21,26,0.74) 70%, rgba(18,21,26,0.42) 100%)",
              }}
            />

            <div className="grid items-center gap-12 px-6 py-14 sm:px-10 lg:grid-cols-[14rem_minmax(0,30rem)] lg:gap-16 lg:py-16 lg:pl-14">
              <AppShot
                shot="credit"
                frame="glass"
                width={300}
                className="mx-auto w-full max-w-[13rem] lg:max-w-none"
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
