import { CaseTabs, type CaseTab } from "@/components/blocks/case-tabs";
import { Eyebrow } from "@/components/blocks/eyebrow";
import { photos } from "@/components/blocks/photo";
import { Pill } from "@/components/blocks/pill";
import { Reveal } from "@/components/blocks/reveal";
import { SpendChart } from "@/components/blocks/spend-chart";

/**
 * Archetype: Habitline's tabs section, carrying the spend chart above it.
 *
 * The heading and the chart make the argument, that flat billing does not fit
 * bursty use. The tabs then show what a burst actually is, because "in bursts"
 * is abstract until you name three of them. The hashtag row at the bottom says
 * the list is not exhaustive without writing another twelve panes.
 *
 * The figures are patterns rather than costs. Saying a renovation takes three
 * weeks of asking is describing a shape; saying it costs R120 would be a
 * claim about someone else's usage that we cannot support.
 */
const bursts: CaseTab[] = [
  {
    id: "renovation",
    label: "A renovation",
    icon: "hammer",
    photoSrc: photos.projectRenovation.src,
    photoAlt: photos.projectRenovation.alt,
    body: "Quotes, materials, second opinions, and a hundred questions about tiling.",
    figure: "3",
    caption: "weeks flat out, then months of nothing",
  },
  {
    id: "move",
    label: "A move",
    icon: "truck",
    photoSrc: photos.projectFlatpack.src,
    photoAlt: photos.projectFlatpack.alt,
    body: "One weekend of working out what goes where, and what it should cost.",
    figure: "1",
    caption: "frantic weekend, then done",
  },
  {
    id: "job-hunting",
    label: "Job hunting",
    icon: "briefcase",
    photoSrc: photos.phoneInHand.src,
    photoAlt: photos.phoneInHand.alt,
    body: "Letters, rewrites and interview prep, every evening, until it lands.",
    figure: "6",
    caption: "weeks of asking, then silence",
  },
];

const alsoBursts = [
  "#tax season",
  "#a new baby",
  "#exam term",
  "#a side hustle",
  "#moving town",
  "#a big quote",
];

export function Problem() {
  return (
    <section id="problem" className="section-y tone-paper">
      <div className="container-site">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>The mismatch</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-2 mt-5">
                You use AI in bursts.{" "}
                <span className="text-ink-muted">
                  Every subscription bills you flat.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
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

        {/* Habitline's tabbed cases: what a burst actually looks like */}
        <Reveal delay={80} className="mt-24 block">
          <CaseTabs tabs={bursts} />
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-border pt-10">
            <p className="text-lg text-ink-muted">
              And every other kind of burst
            </p>
            <div className="flex flex-wrap gap-2">
              {alsoBursts.map((tag) => (
                <Pill key={tag}>{tag}</Pill>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
