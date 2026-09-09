import Link from "next/link";

import { Wordmark } from "@/components/brand/wordmark";
import { Button } from "@/components/ui/button";
import { nav, stores } from "@/content/site";

/** Floating pill nav, the way all three reference sites handle it. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 px-5 pt-4 md:px-8">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-6 rounded-full border border-white/10 bg-surface/80 py-2.5 pr-2.5 pl-5 backdrop-blur-xl">
        <Link href="/" aria-label="Digital Fusion, home" className="shrink-0">
          <Wordmark className="text-[0.8rem]" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs text-ink-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button size="sm" className="shrink-0 rounded-full" asChild>
          <Link href={stores[0].href}>Get the app</Link>
        </Button>
      </div>
    </header>
  );
}
