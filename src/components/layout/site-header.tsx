import Link from "next/link";

import { Wordmark } from "@/components/brand/wordmark";
import { Button } from "@/components/ui/button";
import { nav, stores } from "@/content/site";

/** Floating pill nav, the way all three reference sites handle it. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 px-5 pt-4 md:px-10">
      <div className="mx-auto flex w-full max-w-[var(--container-site)] items-center justify-between gap-6 rounded-full border border-white/10 bg-surface/80 py-2.5 pr-2.5 pl-6 backdrop-blur-xl">
        <Link
          href="/"
          aria-label="Digital Fusion, home"
          className="inline-flex min-h-11 shrink-0 items-center pr-2"
        >
          <Wordmark className="text-[0.85rem]" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center px-1.5 text-sm text-ink-muted transition-colors duration-300 ease-in-out hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          size="lg"
          variant="accent"
          className="h-11 shrink-0 rounded-full px-6 text-sm"
          asChild
        >
          <Link href={stores[0].href}>Get the app</Link>
        </Button>
      </div>
    </header>
  );
}
