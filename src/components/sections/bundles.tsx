import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { CountUp } from "@/components/blocks/count-up";
import { Parallax } from "@/components/blocks/parallax";
import { photos } from "@/components/blocks/photo";
import { Pill } from "@/components/blocks/pill";
import { Reveal } from "@/components/blocks/reveal";
import { Button } from "@/components/ui/button";
import { bundles, lapseNotice, stores } from "@/content/site";
import { formatCredits, formatRand } from "@/lib/format";

/**
 * One photograph behind the whole section, heading and prices together. It
 * was a band above a separate block of cards, and the seam between the two
 * was exactly what made it read as two sections.
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
 * The product, on every card.
 *
 * These are the Full strength cards restated in one line each, because the
 * bundles differ only in how much credit they carry: every one of them buys
 * the whole product. The list was three commercial lines before, which said
 * nothing about what you actually get.
 *
 * Nothing renews and the thirty-day validity are deliberately not here. The
 * section lede carries the first and the lapse notice directly below carries
 * the second, and repeating them inside three cards was what made the cards
 * read as filler in the first place.
 *
 * The ticks are ink, not lime. Lime is the tick everywhere else on the site,
 * but the brand book keeps the accent away from a credit figure because it is
 * nearly three times the luminance of steel and wins the eye, and these cards
 * are nothing but credit figures. Same reason the pill is grey.
 */
const included = [
  "Every model, one wallet",
  "Web search, photos, documents and decks",
  "Lists it fills in for you",
  "Ask together, split the cost",
  "Nothing you make gets lost",
  "Private chats leave nothing behind",
];

/**
 * Credits per rand. It is the only figure that separates the three and it is
 * the arithmetic behind "bigger bundles buy more per rand", so the claim can
 * be checked on the card rather than taken on trust. Derived from the
 * published price and credit figures, not a new claim.
 */
const perRand = (credits: number, price: number) => Math.round(credits / price);

/**
 * Which bundle actually buys the most per rand, worked out from the figures
 * rather than assumed.
 *
 * It was hardcoded to the middle card, where a pricing table conventionally
 * puts its recommendation, and the middle card is not the best per rand:
 * Regular buys 3 300 and Heavy buys 3 667. The badge was simply wrong, and
 * the card carrying the emphasis was not the card the badge described.
 * Deriving both from the data means they cannot disagree again, and if the
 * prices change the badge moves on its own.
 */
const bestPerRandIndex = bundles.reduce(
  (best, bundle, index) =>
    perRand(bundle.credits, bundle.price) >
    perRand(bundles[best].credits, bundles[best].price)
      ? index
      : best,
  0,
);

export function Bundles() {
  return (
    <section
      id="bundles"
      className="section-y relative isolate overflow-hidden border-y border-border"
    >
      {/* Half the hero's travel. At 0.12 the drift slid a brighter band of
          this photograph under the lede and took it from 6.62:1 to 3.18:1,
          which would have meant paying for the movement with a scrim twice
          as heavy. At 0.06 the light 0.30 wash still holds. */}
      <Parallax className="-z-10" strength={0.06} overscan="10%">
        <Image
          src={photos.phoneAtDusk.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[62%_34%] saturate-[0.9]"
        />
      </Parallax>
      {/* Stronger below md, where the section is tall and narrow, the crop
          keeps almost nothing but his face, and full-width type runs across
          it. There the photograph is atmosphere; from md it is a picture. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[#12151A]/[0.50] md:bg-[#12151A]/[0.36]"
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
        </div>

        {/* Laid out after the reference supplied on 10 September 2026: the
            rate as a sub-line under the name, a raised currency mark on the
            price, an action on every card, and the ticked features in a
            recessed panel rather than loose on the card face.

            Two departures from it, both for the same reason. Its featured
            card takes a lime price and a lime button; ours cannot, because
            the brand book keeps the accent away from a credit figure and
            these cards are nothing but credit figures. The featured card
            earns its emphasis from the paper inversion, the lift and the
            pill instead, and its action is a solid ink fill. */}
        <div className="mt-16 grid items-stretch gap-4 lg:grid-cols-3">
          {bundles.map((bundle, index) => {
            const featured = index === bestPerRandIndex;
            const value = perRand(bundle.credits, bundle.price);

            return (
              <Reveal
                key={bundle.id}
                delay={index * 110}
                /* The middle card breaks the row's top and bottom edge, the
                   long-standing way a pricing table says "this one". */
                className={featured ? "lg:-my-5" : undefined}
              >
                <div
                  className={
                    featured
                      ? "tone-paper hover-lift flex h-full flex-col rounded-2xl border border-border p-7 shadow-2xl shadow-black/25 lg:p-8"
                      : /* Glass rather than a solid slab, so the photograph
                           carries through the row and the cards belong to the
                           section instead of sitting on top of it. */
                        "hover-lift flex h-full flex-col rounded-2xl border border-white/15 bg-[#161A20]/85 p-7 backdrop-blur-md lg:p-8"
                  }
                >
                  <div className="flex min-h-8 items-start justify-between gap-3">
                    <div>
                      <p className="card-title">{bundle.name}</p>
                      <p className="mt-1.5 text-sm text-ink-muted">
                        <span className="figure text-ink">
                          {formatCredits(value)}
                        </span>{" "}
                        credits per rand
                      </p>
                    </div>
                    {featured ? <Pill>Best per rand</Pill> : null}
                  </div>

                  <p className="money mt-7 flex items-start gap-1 leading-none">
                    <span aria-hidden="true" className="mt-1.5 text-2xl">
                      R
                    </span>
                    <span aria-hidden="true" className="text-[3.5rem]">
                      {bundle.price}
                    </span>
                    <span className="mt-auto pb-1.5 text-base text-ink-muted">
                      once off
                    </span>
                    {/* The price is split across spans for the raised mark,
                        so the readable version is spelled out here. */}
                    <span className="sr-only">
                      {formatRand(bundle.price)}, paid once
                    </span>
                  </p>

                  <p className="figure mt-4 text-base text-ink-muted">
                    <CountUp
                      value={bundle.credits}
                      format="credits"
                      durationMs={1300}
                    />{" "}
                    credits
                  </p>

                  <Button
                    size="lg"
                    variant={featured ? "default" : "outline"}
                    className="mt-7 h-12 w-full rounded-full text-sm"
                    asChild
                  >
                    <Link href={stores[0].href}>Get the app</Link>
                  </Button>

                  <ul
                    className={
                      featured
                        ? "mt-7 flex flex-col gap-3 rounded-xl bg-ground p-6"
                        : "mt-7 flex flex-col gap-3 rounded-xl bg-black/25 p-6"
                    }
                  >
                    {included.map((line) => (
                      <li key={line} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-border text-ink"
                        >
                          <Check className="size-3" strokeWidth={2.5} />
                        </span>
                        <span className="text-base text-ink-muted">{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={160}>
          <p className="mx-auto mt-10 max-w-lg text-center text-base text-on-image-muted">
            {lapseNotice}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
