"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import {
  AnswerCostScreen,
  LanguagePickerScreen,
} from "@/components/blocks/app-screens";
import { cn } from "@/lib/utils";

export type Step = {
  id: string;
  index: string;
  title: string;
  body: string;
  /** A real capture, or null where only a recreation exists. */
  screen: string | null;
  /** Which hand-built screen to draw when there is no capture. */
  recreation?: "answerCost" | "languages";
  screenAlt: string;
  items: string[];
};

/**
 * Appito's scroll-driven stepper, measured on the live site at 1440.
 *
 * Three equal columns with a 145px gap. The outer two hold one sticky block
 * per step, each a fixed height with an opaque background, so as you scroll
 * the next step slides up and covers the last. The middle column is sticky
 * too, and its screen swaps to follow.
 *
 * Appito uses 900px per step; this uses 640, because four steps at 900 would
 * add 3600px to a page that is already long.
 *
 * Below lg the whole conceit is dropped. Sticky stacking on a phone is
 * miserable, so the steps become a plain sequence with the screen above each.
 */
/** Matches `lg:top-24` on the sticky blocks. */
const STICKY_TOP = 96;

export function StepStack({ steps }: { steps: readonly Step[] }) {
  const [active, setActive] = useState(0);
  const column = useRef<HTMLDivElement | null>(null);

  /* Derived from scroll position rather than an IntersectionObserver.
     The step blocks are sticky, so once pinned they sit in the viewport
     permanently and every one of them reports as intersecting, which pins the
     active index at zero. Their flow position still advances normally, so
     measuring the column against the sticky line is both simpler and correct. */
  useEffect(() => {
    const node = column.current;
    if (!node) return;

    /* Called straight from the scroll handler rather than through
       requestAnimationFrame. A passive scroll listener already fires at most
       once a frame, so the throttle bought nothing, and rAF is suspended
       entirely in a hidden document, which left the step frozen. */
    const update = () => {
      const rect = node.getBoundingClientRect();
      const stepHeight = rect.height / steps.length;
      if (!stepHeight) return;
      const passed = STICKY_TOP - rect.top;
      const index = Math.floor(passed / stepHeight);
      setActive(Math.min(Math.max(index, 0), steps.length - 1));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [steps.length]);

  return (
    <div className="grid items-start gap-12 lg:grid-cols-3 lg:gap-[145px]">
      {/* Column one: the step titles */}
      <div ref={column} className="flex flex-col">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-background pt-10 lg:sticky lg:top-24 lg:h-[40rem]"
          >
            <span className="inline-flex rounded-full bg-lime px-6 py-2 text-base font-medium text-[#191C20]">
              Step {step.index}
            </span>
            <h3 className="mt-7 font-heading text-[clamp(1.75rem,2vw+1rem,2.75rem)] leading-[1.15] font-bold tracking-[-0.025em]">
              {step.title}
            </h3>
            <p className="mt-5 max-w-sm text-base text-ink-muted">{step.body}</p>

            {/* Below lg the screen belongs with its own step, and is held
                small: four full-height captures stacked inline took the
                section past 4800px on a phone. */}
            <div className="mt-10 max-w-[13.5rem] lg:hidden">
              <Screen step={step} />
            </div>
            <ul className="mt-8 flex flex-col gap-6 lg:hidden">
              {step.items.map((item) => (
                <Item key={item}>{item}</Item>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Column two: one phone, screen following the active step */}
      <div className="hidden lg:sticky lg:top-24 lg:block">
        <div className="relative mx-auto w-full max-w-[22rem]">
          {steps.map((step, i) => (
            <div
              key={step.id}
              aria-hidden={i !== active}
              className={cn(
                "transition-opacity duration-500 ease-in-out",
                i === active
                  ? "opacity-100"
                  : "pointer-events-none absolute inset-0 opacity-0",
              )}
            >
              <Screen step={step} />
            </div>
          ))}
        </div>
      </div>

      {/* Column three: the supporting points for each step */}
      <div className="hidden flex-col lg:flex">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col justify-center gap-[25px] bg-background lg:sticky lg:top-24 lg:h-[40rem]"
          >
            {step.items.map((item) => (
              <Item key={item}>{item}</Item>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Appito puts a 20px lime disc against each point. Ours is a lime tick. */
function Item({ children }: { children: string }) {
  return (
    <li className="flex list-none items-start gap-2.5">
      <span
        aria-hidden="true"
        className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-lime text-[0.625rem] text-[#191C20]"
      >
        ✓
      </span>
      <span className="text-base text-ink-muted">{children}</span>
    </li>
  );
}

function Screen({ step }: { step: Step }) {
  return (
    <div className="tone-graphite overflow-hidden rounded-[2rem] border border-white/10 bg-ground shadow-2xl shadow-black/40">
      {step.screen ? (
        <Image
          src={step.screen}
          alt={step.screenAlt}
          width={352}
          height={765}
          sizes="352px"
          className="h-auto w-full"
        />
      ) : (
        /* Two moments have no capture: an answer landing with its cost beside
           it, and the language picker. Recreated until they do. See
           docs/ASSUMPTIONS.md. */
        <div role="img" aria-label={step.screenAlt} className="pt-4 pb-8">
          {step.recreation === "languages" ? (
            <LanguagePickerScreen />
          ) : (
            <AnswerCostScreen />
          )}
        </div>
      )}
    </div>
  );
}
