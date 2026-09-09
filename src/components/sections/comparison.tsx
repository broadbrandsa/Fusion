import { Eyebrow } from "@/components/blocks/eyebrow";
import { Reveal } from "@/components/blocks/reveal";
import { competitorPricing } from "@/content/site";
import { formatRand } from "@/lib/format";

const [lowZar, highZar] = competitorPricing.subscriptionRangeZar;
const lowBundles = Math.round(lowZar / 20);
const highBundles = Math.round(highZar / 20);

/**
 * Archetype: a comparison table. None of the reference sites use one, but a
 * versus argument is what a table is for, and it scans faster than two panels
 * of prose. It also breaks up a page that leans heavily on bordered cards.
 *
 * No competitor is named, by decision. The range does the work.
 */
const rows = [
  ["What you pay", `${formatRand(lowZar)}–${formatRand(highZar)} every month`, "R20, R50 or R120, when you want it"],
  ["When it stops", "When you remember to cancel", "When you stop topping up"],
  ["Card required", "Yes, taking recurring international billing", "None"],
  ["Cost of one answer", "Never shown", "Shown as the answer lands"],
  ["Big jobs", "Run without warning", "Quote before they run"],
  ["Going over", "Possible", "A balance cannot go below zero"],
  ["A quiet month", "Full price", "Nothing at all"],
] as const;

export function Comparison() {
  return (
    <section id="comparison" className="section-y tone-paper">
      <div className="container-site">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>The arithmetic</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-2 mt-5">
              One month of subscription is {lowBundles} to {highBundles} bundles
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg text-ink-muted">
              Ask a handful of questions a week and you are paying for a
              hundred you never asked.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-16">
          {/* Wide content scrolls inside its own container rather than pushing
              the page sideways. */}
          <div className="-mx-5 overflow-x-auto px-5 md:mx-0 md:px-0">
            <table className="w-full min-w-[42rem] border-collapse text-left">
              <caption className="sr-only">
                A typical AI subscription compared with Digital Fusion. Pricing
                checked 28 August 2026.
              </caption>
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="w-[26%] pb-5 pr-6 text-sm font-medium text-ink-muted">
                    <span className="sr-only">Feature</span>
                  </th>
                  <th scope="col" className="w-[37%] pb-5 pr-6 text-sm font-medium text-ink-muted">
                    A typical subscription
                  </th>
                  <th scope="col" className="w-[37%] pb-5 text-sm font-medium">
                    Digital Fusion
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([label, theirs, ours]) => (
                  <tr key={label} className="border-b border-border/70 align-top">
                    <th
                      scope="row"
                      className="py-6 pr-6 text-base font-normal text-ink-muted"
                    >
                      {label}
                    </th>
                    <td className="py-6 pr-6 text-base text-ink-muted">
                      {theirs}
                    </td>
                    <td className="py-6 text-base text-ink">{ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 text-sm text-ink-muted">
            Subscription pricing checked 28 August 2026.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
