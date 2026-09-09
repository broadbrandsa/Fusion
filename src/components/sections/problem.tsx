import { Photo } from "@/components/blocks/photo";
import { Reveal } from "@/components/blocks/reveal";
import { SpendChart } from "@/components/blocks/spend-chart";

/**
 * Archetype: a large statement carrying a data visual, then an asymmetric
 * photo pair. Deliberately not the eyebrow-title-lede-cards shell every other
 * section uses, because the argument here is a shape mismatch and a shape is
 * better drawn than described.
 */
export function Problem() {
  return (
    <section id="problem" className="section-y tone-paper">
      <div className="container-site">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <Reveal>
              <h2 className="display-2">
                You use AI in bursts.{" "}
                <span className="text-ink-muted">
                  Every subscription bills you flat.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 text-lg text-ink-muted">
                Heavy for a fortnight, then nothing for a month. And none of
                them will tell you what a single answer cost.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:pt-4">
            <SpendChart />
          </Reveal>
        </div>

        {/* Asymmetric photo pair, one wide and one tall, rather than a
            two-column grid of equals. */}
        <div className="mt-24 grid gap-4 md:grid-cols-[1.6fr_1fr]">
          <Reveal delay={60} as="figure">
            <Photo
              photo="projectRenovation"
              ratio="16 / 10"
              sizes="(min-width: 768px) 800px, 100vw"
            />
            <figcaption className="mt-4 text-sm text-ink-muted">
              A renovation. Three weeks flat out, then months of nothing.
            </figcaption>
          </Reveal>
          <Reveal delay={180} as="figure">
            <Photo
              photo="projectFlatpack"
              ratio="4 / 5"
              sizes="(min-width: 768px) 460px, 100vw"
            />
            <figcaption className="mt-4 text-sm text-ink-muted">
              A move. One frantic weekend, then done.
            </figcaption>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
