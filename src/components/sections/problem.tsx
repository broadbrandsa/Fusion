import { CaseTabs, type CaseTab } from "@/components/blocks/case-tabs";
import { photos } from "@/components/blocks/photo";
import { Reveal } from "@/components/blocks/reveal";
import { SpendChart } from "@/components/blocks/spend-chart";

/**
 * Habitline's tabs section, measured at 1440: a 20px-radius panel at 100px
 * padding with a faint dot grid over it, a centred pill and heading, a centred
 * row of tab pills, then the image with its information floated over the
 * bottom right rather than set beside it, and a centred label and tag row to
 * close.
 *
 * The spend chart sits between the heading and the tabs, because the chart
 * makes the argument and the tabs make "in bursts" concrete.
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
  /* Studying and a side hustle are the two commonest things people bring to
     an assistant after writing, and both are properly bursty: a term ends, a
     business gets off the ground. Photographs still to come. */
  {
    id: "studying",
    label: "Studying",
    icon: "graduationCap",
    photoBrief:
      "A student working through notes at a kitchen table or a library desk, phone beside the books. Mid-term, not a graduation photo.",
    body: "Explaining what the textbook did not, drafting an assignment, then checking your own reasoning.",
    figure: "12",
    caption: "weeks of term, then a long holiday",
  },
  {
    id: "side-hustle",
    label: "A side hustle",
    icon: "store",
    photoBrief:
      "Someone running a small business from home or a market stall, doing the admin on a phone. Real trade, not a stock-photo boardroom.",
    body: "Pricing the work, writing the quote, and getting the first bit of marketing out the door.",
    figure: "8",
    caption: "weeks getting it going, then it runs",
  },
];

/* Nothing here repeats a tab above it. */
const alsoBursts = [
  "#tax season",
  "#a new baby",
  "#a big quote",
  "#wedding planning",
  "#a legal letter",
  "#planning a trip",
];

export function Problem() {
  return (
    <section id="problem" className="section-y tone-paper">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-[20px] bg-surface px-6 py-14 md:px-12 md:py-20 lg:p-[100px]">
          <div
            aria-hidden="true"
            className="dot-grid pointer-events-none absolute inset-0 text-ink"
          />

          <div className="relative">
            <div className="mx-auto flex max-w-[36rem] flex-col items-center gap-4 text-center">
              <Reveal>
                <span className="inline-flex rounded-full border border-ink/10 bg-surface px-5 py-1.5 text-sm font-medium text-ink">
                  The mismatch
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-heading text-[clamp(2rem,3.4vw+0.6rem,3.125rem)] leading-[1.15] font-bold tracking-[-0.025em]">
                  You use AI in bursts.{" "}
                  <span className="text-ink-muted">
                    Every subscription bills you flat.
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-lg text-ink-muted">
                  Heavy for a fortnight, then nothing for a month.
                </p>
              </Reveal>
            </div>

            <Reveal delay={220} className="mt-16 block">
              <SpendChart />
            </Reveal>

            <Reveal delay={80} className="mt-20 block">
              <CaseTabs tabs={bursts} />
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-14 flex flex-col items-center gap-2.5 text-center">
                <p className="text-sm font-medium text-ink">
                  And every other kind of burst
                </p>
                <div className="flex flex-wrap justify-center gap-x-[25px] gap-y-2">
                  {alsoBursts.map((tag) => (
                    <span key={tag} className="text-sm font-medium text-ink">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
