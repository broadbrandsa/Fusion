"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Wordmark } from "@/components/brand/wordmark";
import { Button } from "@/components/ui/button";
import { nav, stores } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Floating pill nav, the way all three reference sites handle it, with one
 * addition: it tightens and darkens once you leave the hero, so the bar reads
 * as chrome over content rather than as part of the hero.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 24);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 px-5 pt-4 md:px-10">
      <div
        className={cn(
          "site-header-bar mx-auto flex w-full max-w-[var(--container-site)] items-center justify-between gap-6 rounded-full border backdrop-blur-xl",
          scrolled
            ? "border-white/12 bg-surface/95 py-1.5 pr-1.5 pl-6 shadow-lg shadow-black/20"
            : "border-white/10 bg-surface/70 py-2.5 pr-2.5 pl-6",
        )}
      >
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
              className="group/nav relative inline-flex min-h-11 items-center px-1.5 text-sm text-ink-muted transition-colors duration-300 ease-in-out hover:text-ink"
            >
              {item.label}
              {/* Underline grows from the left on hover, rather than blinking on */}
              <span
                aria-hidden="true"
                className="absolute inset-x-1.5 bottom-2.5 h-px origin-left scale-x-0 bg-ink transition-transform duration-300 ease-out group-hover/nav:scale-x-100"
              />
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
