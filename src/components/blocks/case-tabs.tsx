"use client";

import { Briefcase, Hammer, Truck } from "lucide-react";
import Image from "next/image";
import { useId, useRef, useState } from "react";

const ICONS = { hammer: Hammer, truck: Truck, briefcase: Briefcase } as const;

export type CaseTab = {
  id: string;
  label: string;
  icon: keyof typeof ICONS;
  photoSrc: string;
  photoAlt: string;
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
        className="flex flex-wrap gap-2"
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
                  ? "inline-flex min-h-11 cursor-pointer items-center gap-2.5 rounded-full border border-ink bg-ink px-5 py-3 text-base text-[var(--surface)] transition-colors duration-300 ease-in-out"
                  : "inline-flex min-h-11 cursor-pointer items-center gap-2.5 rounded-full border border-border bg-card px-5 py-3 text-base text-ink-muted transition-colors duration-300 ease-in-out hover:text-ink"
              }
            >
              <Icon aria-hidden="true" className="size-4" />
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
          className="mt-8 focus-visible:outline-none"
        >
          <div className="grid items-stretch gap-4 lg:grid-cols-[1.5fr_1fr]">
            <div className="photo-zoom relative overflow-hidden rounded-2xl bg-surface" style={{ aspectRatio: "16 / 9" }}>
              <Image
                src={tab.photoSrc}
                alt={tab.photoAlt}
                fill
                sizes="(min-width: 1024px) 760px, 100vw"
                className="object-cover saturate-[0.78] contrast-[1.02]"
              />
            </div>
            <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8">
              <p className="text-lg text-ink-muted">{tab.body}</p>
              <div className="mt-10">
                <p className="figure display-2">{tab.figure}</p>
                <p className="mt-3 text-base text-ink-muted">{tab.caption}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
