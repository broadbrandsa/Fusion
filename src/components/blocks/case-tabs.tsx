"use client";

import {
  Briefcase,
  GraduationCap,
  Hammer,
  Store,
  Truck,
} from "lucide-react";
import Image from "next/image";
import { useId, useRef, useState } from "react";

const ICONS = {
  hammer: Hammer,
  truck: Truck,
  briefcase: Briefcase,
  graduationCap: GraduationCap,
  store: Store,
} as const;

export type CaseTab = {
  id: string;
  label: string;
  icon: keyof typeof ICONS;
  /** Absent while a photograph is still being sourced. */
  photoSrc?: string;
  photoAlt?: string;
  /** Shown in place of a missing photograph, so it cannot ship unnoticed. */
  photoBrief?: string;
  body: string;
  figure: string;
  caption: string;
};

/**
 * Habitline's tabbed cases, built to the WAI-ARIA tabs pattern by hand.
 *
 * shadcn's generated Tabs is not keyboard reachable in this project: every
 * trigger renders `tabindex="-1"`, including the selected one, so there is no
 * tab stop into the group at all. Rather than fight the primitive for one
 * section, this implements the pattern directly: a single tab stop on the
 * selected tab, arrow keys to move, Home and End to jump, and activation
 * following focus.
 */
export function CaseTabs({ tabs }: { tabs: readonly CaseTab[] }) {
  const [active, setActive] = useState(tabs[0].id);
  const baseId = useId();
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  const select = (id: string) => {
    setActive(id);
    refs.current[id]?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    const index = tabs.findIndex((tab) => tab.id === active);
    let next: number | null = null;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = tabs.length - 1;
    if (next === null) return;
    event.preventDefault();
    select(tabs[next].id);
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Kinds of burst"
        onKeyDown={onKeyDown}
        className="flex flex-wrap justify-center gap-5"
      >
        {tabs.map((tab) => {
          const Icon = ICONS[tab.icon];
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              ref={(node) => {
                refs.current[tab.id] = node;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${tab.id}`}
              /* One tab stop for the group, which is the whole point of the
                 pattern and the thing the generated primitive was missing. */
              tabIndex={selected ? 0 : -1}
              onClick={() => select(tab.id)}
              className={
                selected
                  ? "inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-[10px] border border-ink bg-muted px-5 py-3 text-lg text-ink transition-colors duration-300 ease-in-out"
                  : "inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-[10px] border border-border bg-card px-5 py-3 text-lg text-ink-muted transition-colors duration-300 ease-in-out hover:border-ink-muted hover:text-ink"
              }
            >
              <Icon aria-hidden="true" className="size-4 shrink-0" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${baseId}-panel-${tab.id}`}
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          hidden={tab.id !== active}
          tabIndex={0}
          className="mt-10 focus-visible:outline-none"
        >
          {/* Habitline floats the information over the image at 40px from the
              bottom right, rather than setting it alongside. */}
          <div className="relative">
            <div
              className="photo-zoom relative overflow-hidden rounded-[20px] bg-surface"
              style={{ aspectRatio: "16 / 9" }}
            >
              {tab.photoSrc ? (
                <Image
                  src={tab.photoSrc}
                  alt={tab.photoAlt ?? ""}
                  fill
                  sizes="(min-width: 1024px) 1000px, 100vw"
                  className="object-cover saturate-[0.78] contrast-[1.02]"
                />
              ) : (
                <div
                  data-placeholder="photo"
                  className="grid h-full place-items-center border border-dashed border-border bg-muted p-8"
                >
                  <p className="max-w-sm text-center text-sm text-ink-muted">
                    <span className="block font-medium tracking-[0.14em] uppercase">
                      Photo needed
                    </span>
                    <span className="mt-2 block">{tab.photoBrief}</span>
                  </p>
                </div>
              )}
            </div>

            {/* Habitline runs this glass at 0.72 with #B8B8B8 text, which
                works because the photograph behind it is dark. Two of ours are
                not: the renovation's bottom-right measures 0.947 at the 99th
                percentile, where that pairing lands at 1.64:1. Measured
                against the brightest of the three, 0.90 glass with
                on-image-muted gives 4.86:1 and the figure in white 6.98:1. */}
            <div className="mt-4 rounded-[20px] border border-white/20 bg-[#131515]/90 p-[30px] backdrop-blur-md sm:absolute sm:right-10 sm:bottom-10 sm:mt-0 sm:w-[25rem]">
              <p className="text-lg text-on-image-muted">{tab.body}</p>
              <div className="mt-[30px] flex items-center justify-between gap-2.5">
                <p className="figure text-[2.5rem] leading-none font-medium text-on-image">
                  {tab.figure}
                </p>
                <p className="max-w-[14rem] text-right text-sm text-on-image-muted">
                  {tab.caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
