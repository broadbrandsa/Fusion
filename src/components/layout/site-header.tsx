"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { Wordmark } from "@/components/brand/wordmark";
import { Button } from "@/components/ui/button";
import { nav, stores } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Floating pill nav, the way all three reference sites handle it, restyled
 * 10 September 2026 after a supplied pattern: it now narrows as well as
 * tightens once you leave the hero, dropping from the full container to 68rem
 * and lifting off the top edge, so the bar reads as chrome over content
 * rather than as part of the hero.
 *
 * The same pass added a mobile menu, which the header simply did not have.
 * Below lg the links were hidden with nothing to open them, so four of the
 * page's five destinations were unreachable on a phone. That was the real
 * bug here, not the styling.
 */

/** Two bars that rotate into a cross. No dependency, and it animates. */
function MenuToggleIcon({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden="true"
      className="relative block h-4 w-5"
      data-open={open}
    >
      <span
        className={cn(
          "absolute left-0 block h-0.5 w-full rounded-full bg-current transition-transform duration-300 ease-in-out",
          open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0.5",
        )}
      />
      <span
        className={cn(
          "absolute left-0 block h-0.5 w-full rounded-full bg-current transition-transform duration-300 ease-in-out",
          open ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0.5",
        )}
      />
    </span>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement | null>(null);

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

  /* Hold the page still behind the panel, and let Escape out of it. Focus
     goes back to the button that opened it, or a keyboard user is dropped at
     the top of the document with no idea what happened. */
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-5 pt-4 md:px-10">
      <div
        className={cn(
          "site-header-bar mx-auto flex w-full items-center justify-between gap-6 rounded-full border backdrop-blur-xl",
          scrolled && !open
            ? "max-w-[68rem] border-white/12 bg-surface/95 py-1.5 pr-1.5 pl-6 shadow-lg shadow-black/25 md:mt-2"
            : "max-w-[var(--container-site)] border-white/10 bg-surface/70 py-2.5 pr-2.5 pl-6",
        )}
      >
        <Link
          href="/"
          aria-label="Digital Fusion, home"
          className="inline-flex min-h-11 shrink-0 items-center pr-2"
          onClick={() => setOpen(false)}
        >
          <Wordmark className="text-[0.85rem]" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
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

        <div className="flex shrink-0 items-center gap-2">
          <Button
            size="lg"
            variant="accent"
            className="hidden h-11 rounded-full px-6 text-sm sm:inline-flex"
            asChild
          >
            <Link href={stores[0].href}>Get the app</Link>
          </Button>

          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Close the menu" : "Open the menu"}
            onClick={() => setOpen((value) => !value)}
            className="grid size-11 place-items-center rounded-full border border-border text-ink transition-colors duration-300 ease-in-out hover:bg-surface-high lg:hidden"
          >
            <MenuToggleIcon open={open} />
          </button>
        </div>
      </div>

      {/* Below the bar, not over it, so the toggle stays visible and reachable
          while the panel is open. */}
      <div
        id={panelId}
        hidden={!open}
        className="fixed inset-x-0 top-[5.5rem] bottom-0 z-40 overflow-y-auto bg-ground/95 px-5 pb-10 backdrop-blur-xl md:px-10 lg:hidden"
      >
        <nav aria-label="Main" className="mx-auto w-full max-w-lg pt-4">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center border-b border-border text-lg text-ink transition-colors duration-300 ease-in-out hover:text-ink-muted"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button
            size="lg"
            variant="accent"
            className="mt-8 h-14 w-full rounded-full text-base"
            asChild
          >
            <Link href={stores[0].href} onClick={() => setOpen(false)}>
              Get the app
            </Link>
          </Button>
          <p className="mt-4 text-center text-sm text-ink-muted">
            Start free. No card.
          </p>
        </nav>
      </div>
    </header>
  );
}
