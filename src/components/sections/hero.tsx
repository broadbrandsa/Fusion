import Image from "next/image";
import Link from "next/link";

import { ChatDemo } from "@/components/blocks/chat-demo";
import { Parallax } from "@/components/blocks/parallax";
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
 * Scrim strength is set from this photograph rather than a generic worst case,
 * and this photograph is a demanding one. The hero runs body text down both
 * flanks with only the device between them, so a background has to be dark on
 * both edges at once. The café frame has blown highlights in every tenth of
 * its width, which is why sliding object-position does nothing here, and it
 * needs 0.84 to hold every line at AA.
 *
 * A flat 0.84 held everything, but it flattened the whole panel to do it.
 * From lg the work is split instead: a 0.62 wash, with side gradients
 * carrying the two text columns at 0.74 on the left and 0.95 across the
 * right. The right has to be that strong because the photograph peaks at
 * 0.99 under the second column and the two lines there are 14 and 16px, so
 * both need 4.5:1. The headline is display type and needs only 3:1, which is
 * what lets the left stay lighter. The gain is the middle band either side of
 * the device, 0.84 down to 0.62, which is where the photograph is visible.
 *
 * Below lg the columns stack, so a left-to-right gradient is aimed at nothing
 * and the same values left the headline at 2.55:1. Those widths get a flat
 * 0.80 and no gradient at all.
 */
export function Hero() {
  return (
    /* The panel overlaps the section below it: a negative bottom margin
       pulls everything after the hero up, and z-10 keeps the panel over the
       paper section rather than under it. The pull stays well inside the
       next section's top padding, so it eats whitespace rather than
       colliding with its first line. */
    <section className="relative z-10 -mb-[clamp(1.5rem,4vw,5rem)] px-5">
      <div className="relative">
        {/* Background panel. Vitara's runs taller than its content so the
            image continues past the device; ours stops at the panel because
            the next section is paper and a bleed would sit on top of it. */}
        <div className="absolute inset-0 overflow-hidden rounded-[30px]">
          <Parallax>
            <Image
              src={photos.cafePhoneWide.src}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-[60%_center]"
            />
          </Parallax>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#12151A]/[0.80] lg:bg-[#12151A]/[0.62]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden bg-[linear-gradient(to_right,rgba(18,21,26,0.74)_0%,rgba(18,21,26,0)_52%,rgba(18,21,26,0.95)_72%,rgba(18,21,26,0.95)_100%)] lg:block"
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
              {/* A conversation rather than a screenshot. It types itself in
                  once, a different model answers each turn, every answer
                  shows what it drew, and the balance falls. That is the whole
                  positioning inside one device: every model, one wallet, and
                  a price on each answer. A still of the spending screen made
                  the same argument, but only to someone who stopped to read
                  the chart. */}
              <ChatDemo className="mx-auto w-full max-w-[17rem] lg:max-w-[19rem]" />
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
                {/* on-image rather than on-image-faint. Under the café
                    photograph's 0.84 scrim the faint tone measured 2.80:1;
                    white clears 4.5. The faint tone is for timestamps inside
                    the app mockups, not for a line of site copy, which is
                    the same rule AGENTS.md states for ink faint. */}
                <p className="mt-5 text-sm text-on-image">{cta.promise}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
