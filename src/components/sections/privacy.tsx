import { AppShot } from "@/components/blocks/app-shot";
import { Eyebrow } from "@/components/blocks/eyebrow";
import { Reveal } from "@/components/blocks/reveal";

const claims = [
  ["Private chats vanish", "Kept nowhere. Erased when ended."],
  ["Never used for training", "Your work stays yours."],
  ["Deletion you can see", "In Settings, in plain language."],
  ["Receipts stay on your phone", "We keep less than we could."],
];

/**
 * Archetype: a full-bleed inverted panel with no cards at all.
 *
 * Privacy claims are four short statements, and putting each in a bordered box
 * made them look like features rather than commitments. A single dark panel
 * with a plain ruled list reads as a plainer, more serious kind of statement,
 * and it gives the page a section with no card in it anywhere.
 */
export function Privacy() {
  return (
    <section id="privacy" className="px-5 pb-[var(--spacing-section)] md:px-10">
      <div className="tone-graphite overflow-hidden rounded-3xl">
        <div className="grid gap-14 px-7 py-[clamp(3.5rem,6vw,7rem)] md:px-14 lg:grid-cols-[1fr_0.7fr] lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>Nothing hidden</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-2 mt-5 max-w-lg">
                What happens here stays here
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-lg text-ink-muted">
                All four are how the product is built, not undertakings we are
                asking you to trust.
              </p>
            </Reveal>

            <dl className="mt-14">
              {claims.map(([title, body], index) => (
                <Reveal key={title} delay={220 + index * 80}>
                  <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 border-t border-white/10 py-6">
                    <dt className="card-title">{title}</dt>
                    <dd className="text-lg text-ink-muted">{body}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>

          <Reveal delay={200} className="mx-auto w-full max-w-[15rem] lg:max-w-none">
            <AppShot
              shot="spending"
              width={300}
              className="mx-auto w-full max-w-[16rem]"
            />
            <p className="mt-7 text-center text-sm text-ink-muted lg:text-left">
              Days are totalled on our server. The receipt for a single answer
              only ever lives on your phone.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
