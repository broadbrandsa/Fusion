import Image from "next/image";

import { CountUp } from "@/components/blocks/count-up";
import { photos } from "@/components/blocks/photo";
import { Pill } from "@/components/blocks/pill";
import { Reveal } from "@/components/blocks/reveal";
import { StoreBadge } from "@/components/blocks/store-badge";
import { bundles, cta, lapseNotice } from "@/content/site";
import { formatCredits, formatRand } from "@/lib/format";

/**
 * One photograph behind the whole section, heading and prices together. It
 * was a band above a separate block of cards, and the seam between the two
 * was exactly what made it read as two sections.
 *
 * Laid out after the reference supplied on 10 September 2026: full bleed, the
 * subject kept clear on the right, the type held in a narrow column on the
 * left at display scale with the action directly beneath it.
 *
 * The scrim is set by sampling the composited pixels under the rendered type
 * rather than by estimating from the frame, because this photograph has small
 * blown highlights that a frame-wide percentile hides. Measure again if the
 * crop, the column width or the section height changes: the section holds its
 * width while its height changes with content, so the cover crop lands the
 * type on different pixels as the content grows.
 *
 * Answer counts stay off the cards. The app estimates 128 credits an answer
 * and the one logged transaction drew 861, so no count goes on the site until
 * the real spread is known. See docs/POSITIONING.md.
 */

/**
 * What every bundle includes, said once under the row rather than three times
 * inside it. An identical list repeated in all three cards is what made them
 * read as three slabs: nothing in the repetition helps anyone choose, and it
 * buried the two lines that actually differ.
 */
const everyBundle = [
  "Every model, one balance",
  "No card. Nothing renews",
];

/**
 * Credits per rand. It is the only figure that separates the three, and it is
 * the arithmetic behind "bigger bundles buy more per rand", so the claim can
 * be checked on the card rather than taken on trust. Derived from the
 * published price and credit figures, not a new claim.
 */
const perRand = (credits: number, price: number) => Math.round(credits / price);

export function Bundles() {
  return (
    <section
      id="bundles"
      className="section-y relative isolate overflow-hidden border-y border-border"
    >
      <Image
        src={photos.cafePhone.src}
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover object-[62%_34%] saturate-[0.9]"
      />
      {/* Stronger below md, where the section is tall and narrow, the crop
          keeps almost nothing but his face, and full-width type runs across
          it. There the photograph is atmosphere; from md it is a picture. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[#12151A]/[0.82] md:bg-[#12151A]/[0.66]"
      />

      <div className="container-site">
        <div className="max-w-[34rem]">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.16em] text-on-image-muted uppercase">
              Bundles
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-2 mt-5 text-on-image">Purchase as you go</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-[26rem] text-lg leading-[1.35] text-on-image-muted">
              Bigger bundles buy more per rand. Nothing renews, so nothing
              needs cancelling.
            </p>
          </Reveal>
          <Reveal delay={230}>
            <div className="mt-9 flex flex-col items-start gap-3">
              <StoreBadge height={56} className="-ml-1.5" />
              <p className="text-sm text-on-image-muted">{cta.promise}</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {bundles.map((bundle, index) => {
            const featured = index === 1;

            return (
              <Reveal key={bundle.id} delay={index * 110}>
                <div
                  className={
                    featured
                      ? "tone-paper hover-lift flex h-full flex-col rounded-2xl border border-border p-8"
                      : /* Glass rather than a solid slab, so the photograph
                           carries through the row and the cards belong to the
                           section instead of sitting on top of it. */
                        "hover-lift flex h-full flex-col rounded-2xl border border-white/15 bg-[#161A20]/85 p-8 backdrop-blur-md"
                  }
                >
                  <div className="flex min-h-9 items-center justify-between gap-3">
                    <p className="card-title">{bundle.name}</p>
                    {/* Greyscale on purpose. A lime badge here would sit
                        inches from the price and win. */}
                    {featured ? <Pill>Best per rand</Pill> : null}
                  </div>

                  <p className="money mt-7 text-[3.5rem] leading-none">
                    {formatRand(bundle.price)}
                  </p>

                  {/* What differs, as a table rather than prose, so the three
                      cards can be read across at a glance. */}
                  <dl className="mt-8 border-t border-border">
                    <div className="flex items-baseline justify-between gap-4 border-b border-border py-3.5">
                      <dt className="text-base text-ink-muted">Credits</dt>
                      <dd className="figure text-base text-ink">
                        <CountUp
                          value={bundle.credits}
                          format="credits"
                          durationMs={1300}
                        />
                      </dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 border-b border-border py-3.5">
                      <dt className="text-base text-ink-muted">Per rand</dt>
                      <dd className="figure text-base text-ink">
                        {formatCredits(perRand(bundle.credits, bundle.price))}
                      </dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 py-3.5">
                      <dt className="text-base text-ink-muted">Valid</dt>
                      <dd className="figure text-base text-ink">
                        {bundle.validity} days
                      </dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <ul className="mt-9 flex flex-wrap justify-center gap-x-10 gap-y-2 text-base text-on-image-muted">
            {everyBundle.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-10 max-w-lg text-center text-base text-on-image-muted">
            {lapseNotice}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
