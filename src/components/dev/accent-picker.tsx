"use client";

import { useEffect, useRef } from "react";

/**
 * TEMPORARY, for sign-off. Remove this component and the `[data-accent]`
 * block in globals.css once the accent is chosen.
 *
 * The accent is the only colour on this site that is actually a choice.
 * Ground, ink and steel are all specified in the brand book, and steel is
 * reserved for money, so this picker changes the accent and nothing else.
 *
 * Every option is a pale fill that carries graphite text, because that is
 * what the accent is for: it is a fill, never type. Contrast against graphite
 * runs 10.67:1 at worst. See the note in globals.css.
 *
 * No React state, in the pattern the rest of this codebase uses. The choice
 * lives on `<html data-accent>` and in localStorage, and the buttons' pressed
 * state is written straight to the DOM. That keeps the server and the first
 * client render identical, so there is no hydration mismatch and no
 * set-state-in-effect. The cost is one frame of the default accent on load,
 * which is the right trade for a tool that will not ship.
 */
const ACCENTS = [
  { id: "lime", label: "Lime", swatch: "#E9FF72" },
  { id: "mint", label: "Mint", swatch: "#9BF3C8" },
  { id: "butter", label: "Butter", swatch: "#FFE066" },
  { id: "lilac", label: "Lilac", swatch: "#D3C4FF" },
  { id: "ice", label: "Ice", swatch: "#B6E8FF" },
] as const;

const STORAGE_KEY = "df-accent";
const HIDDEN_KEY = "df-accent-hidden";
const DEFAULT = "lime";

export function AccentPicker() {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = root.current;
    if (!node) return;

    /* Private windows and blocked site data both throw on access rather than
       returning null, so every read and write is guarded. */
    const read = (key: string) => {
      try {
        return window.localStorage.getItem(key);
      } catch {
        return null;
      }
    };
    const write = (key: string, value: string) => {
      try {
        window.localStorage.setItem(key, value);
      } catch {
        /* Nothing to do. The choice still applies for this page view. */
      }
    };

    const buttons = [
      ...node.querySelectorAll<HTMLButtonElement>("[data-accent-id]"),
    ];

    const apply = (id: string) => {
      document.documentElement.dataset.accent = id;
      buttons.forEach((button) => {
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.accentId === id),
        );
      });
    };

    const stored = read(STORAGE_KEY);
    apply(stored && ACCENTS.some((a) => a.id === stored) ? stored : DEFAULT);
    if (read(HIDDEN_KEY) === "true") node.hidden = true;

    const onClick = (event: MouseEvent) => {
      const button = (event.target as HTMLElement).closest<HTMLButtonElement>(
        "[data-accent-id]",
      );
      if (button?.dataset.accentId) {
        apply(button.dataset.accentId);
        write(STORAGE_KEY, button.dataset.accentId);
        return;
      }
      if ((event.target as HTMLElement).closest("[data-accent-hide]")) {
        node.hidden = true;
        write(HIDDEN_KEY, "true");
      }
    };

    node.addEventListener("click", onClick);
    return () => node.removeEventListener("click", onClick);
  }, []);

  return (
    <div
      ref={root}
      className="fixed bottom-5 left-5 z-50 rounded-2xl border border-white/15 bg-[#12151A]/90 p-3 shadow-2xl shadow-black/50 backdrop-blur-md"
    >
      <div className="flex items-center justify-between gap-4 px-1 pb-1">
        <p className="text-xs tracking-[0.14em] text-[#D6DAE0] uppercase">
          Accent
        </p>
        <button
          type="button"
          data-accent-hide
          aria-label="Hide the accent picker"
          className="-mr-1 grid size-6 place-items-center rounded-full text-[#B9BFC7] transition-colors duration-300 ease-in-out hover:text-white"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <div
        role="group"
        aria-label="Preview an accent colour"
        className="flex items-center gap-1"
      >
        {ACCENTS.map((accent) => (
          <button
            key={accent.id}
            type="button"
            data-accent-id={accent.id}
            aria-pressed={accent.id === DEFAULT}
            title={accent.label}
            /* 44px hit area around a 26px dot, per the touch-target floor. */
            className="group grid size-11 place-items-center rounded-full"
          >
            <span className="sr-only">{accent.label}</span>
            <span
              aria-hidden="true"
              style={{ background: accent.swatch }}
              className="size-[26px] rounded-full ring-2 ring-transparent ring-offset-2 ring-offset-[#12151A] transition-[box-shadow] duration-300 ease-in-out group-hover:ring-white/40 group-aria-pressed:ring-white"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
