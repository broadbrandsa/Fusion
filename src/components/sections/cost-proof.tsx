import { AppFrame } from "@/components/blocks/app-frame";
import { AnswerCostScreen } from "@/components/blocks/app-screens";
import { Eyebrow } from "@/components/blocks/eyebrow";
import { Reveal } from "@/components/blocks/reveal";

const proofs = [
  ["Quotes before it runs", "A deep research job says what it will draw, and waits."],
  ["Never below zero", "Enforced on the server. Overspending is not something the product can do."],
  ["Every cent, day by day", "Thirty days of spending, totals per conversation, a receipt per answer."],
];

/**
 * Archetype: Vitara's split with a stat card floating over the device, rather
 * than a device beside a grid of cards. The supporting claims are ruled rows,
 * so this section carries no bordered card at all.
 */
export function CostProof() {
  return (
    <section id="nothing-hidden" className="section-y">
      <div className="container-site grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-24">
        {/* Device with the figure floating off it, the reference sites' move */}
        <Reveal className="relative mx-auto w-full max-w-[21rem] lg:mx-0">
          <AppFrame label="An answer arriving with what it cost beside it">
            <AnswerCostScreen />
          </AppFrame>
          <div className="absolute -right-4 bottom-10 rounded-2xl border border-white/10 bg-surface-high px-5 py-4 shadow-2xl shadow-black/40 sm:-right-8">
            <p className="text-xs text-ink-muted">That answer drew</p>
            <p className="money mt-1 text-2xl">861</p>
            <p className="figure text-xs text-ink-muted">credits</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>Nothing hidden</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-2 mt-5 max-w-lg">
              Every answer tells you what it cost
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-md text-lg text-ink-muted">
              No subscription can. Under a monthly fee there is no per-answer
              cost to show you.
            </p>
          </Reveal>

          <dl className="mt-14">
            {proofs.map(([title, body], index) => (
              <Reveal key={title} delay={220 + index * 90}>
                <div className="border-t border-border py-7">
                  <dt className="card-title">{title}</dt>
                  <dd className="mt-2 text-lg text-ink-muted">{body}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
