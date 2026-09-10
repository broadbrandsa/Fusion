import { ChatDemo } from "@/components/blocks/chat-demo";
import { Reveal } from "@/components/blocks/reveal";
import { StoreBadge } from "@/components/blocks/store-badge";
import { Wordmark } from "@/components/brand/wordmark";
import { cta } from "@/content/site";

/** Vitara closes on a dark panel with the wordmark set huge behind it. */
export function ClosingCta() {
  return (
    /* Pulled up so the panel breaks into the FAQ's bottom padding, from lg
       only. Measured: the same pull left 9px between the last FAQ line and
       the panel at 375 and 768, because the FAQ already sits close to its own
       padding edge there. At lg it leaves over 100px. z-10 puts the dark
       panel over the paper section rather than under it. */
    <section className="relative z-10 pb-[var(--spacing-section)] lg:-mt-[clamp(2rem,4vw,5rem)]">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface px-7 pt-16 md:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[48rem] -translate-x-1/2 rounded-full opacity-[0.1] blur-3xl"
            style={{ background: "var(--lime)" }}
          />
          <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_0.65fr]">
            <Reveal className="pb-16">
              <h2 className="display-2 max-w-xl">
                Buy the AI your project needs
              </h2>
              <p className="mt-6 max-w-sm text-lg text-ink-muted">
                Start free. See every cost. Pay nothing in the quiet months.
              </p>
              <div className="mt-10 -ml-1.5">
                <StoreBadge height={56} />
              </div>
              <p className="mt-4 text-sm text-ink-muted">{cta.promise}</p>
            </Reveal>

            {/* The hero's conversation again, closing the page the way it
                opened. It replaces a still of the spending screen, which had
                itself replaced `app-credit.png` when that capture turned out
                to carry a build-state warning. See docs/ASSUMPTIONS.md.

                Deliberately the same script rather than a second one. The
                two are a page apart and never on screen together, so it
                reads as a bookend; a different conversation here would just
                be more to read at the point where the reader should be
                leaving for the App Store. */}
            <Reveal
              delay={160}
              /* 19rem, the same as the hero. At 16rem the bubbles wrapped
                 harder and the frame came out at a 3.07 ratio, which is not
                 a phone. */
              className="relative mx-auto w-full max-w-[19rem] lg:mx-0"
            >
              <ChatDemo />
            </Reveal>
          </div>

          <Wordmark
            decorative
            className="pointer-events-none mt-8 w-full text-[6rem] leading-[0.78] text-ink/[0.04] select-none md:text-[11rem]"
          />
        </div>
      </div>
    </section>
  );
}
