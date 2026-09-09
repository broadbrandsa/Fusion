import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import {
  Bundles,
  BuiltForHere,
  ClosingCta,
  Comparison,
  CostProof,
  Faq,
  FullStrength,
  Hero,
  HowItWorks,
  Privacy,
  Problem,
  TalkToUs,
} from "@/components/sections";

/**
 * Section order follows the argument in docs/POSITIONING.md: name the problem,
 * show the mechanism, prove the one thing, price it, compare it, kill the
 * lite-version suspicion, then answer the fears.
 */
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Problem />
        <HowItWorks />
        <CostProof />
        {/* Full strength comes before the price. Someone who reads R20 while
            still suspecting a cut-down product reads it as cheap rather than
            as fair, so the lite-version doubt gets killed first. */}
        <FullStrength />
        <Bundles />
        <Comparison />
        <BuiltForHere />
        <Privacy />
        <Faq />
        <TalkToUs />
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}
