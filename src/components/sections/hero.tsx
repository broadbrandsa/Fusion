import Link from "next/link";

import { Wordmark } from "@/components/brand/wordmark";
import { Button } from "@/components/ui/button";
import { cta, hero } from "@/content/site";

/** Placeholder hero. Holds the wordmark, the promise and the first action. */
export function Hero() {
  return (
    <section className="border-b border-border/60 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-5xl">
        <Wordmark className="text-2xl" />
        <h1 className="mt-10 max-w-3xl text-4xl md:text-6xl">
          {hero.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-base text-ink-muted md:text-lg">
          {hero.subhead}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button size="lg" asChild>
            <Link href={cta.primary.href}>{cta.primary.label}</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href={cta.secondary.href}>{cta.secondary.label}</Link>
          </Button>
        </div>
        <p className="mt-6 text-xs text-ink-faint">
          Headline and subhead decided. The primary action still needs the real
          store URLs, and the free grant size before it can name what you get.
        </p>
      </div>
    </section>
  );
}
