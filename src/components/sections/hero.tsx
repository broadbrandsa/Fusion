import { Wordmark } from "@/components/brand/wordmark";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

/** Placeholder hero. Holds the wordmark, the promise and the first action. */
export function Hero() {
  return (
    <section className="border-b border-border/60 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-5xl">
        <Wordmark className="text-2xl" />
        <h1 className="mt-10 max-w-3xl text-4xl md:text-6xl">{site.tagline}</h1>
        <p className="mt-6 max-w-2xl text-base text-ink-muted md:text-lg">
          {site.description}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button size="lg">Get a bundle</Button>
          <Button size="lg" variant="outline">
            See what an answer costs
          </Button>
        </div>
        <p className="mt-6 text-xs text-ink-faint">
          Placeholder copy and actions. Final headline, subhead and CTA
          destinations still to be written.
        </p>
      </div>
    </section>
  );
}
