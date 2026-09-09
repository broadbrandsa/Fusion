import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import {
  Bundles,
  DistributedBy,
  Faq,
  Hero,
  HowItWorks,
  Languages,
  Privacy,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Bundles />
        <Languages />
        <Privacy />
        <Faq />
        <DistributedBy />
      </main>
      <SiteFooter />
    </>
  );
}
