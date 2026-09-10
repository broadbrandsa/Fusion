"use client";

import { useEffect, useRef } from "react";

import { AppFrame } from "@/components/blocks/app-frame";
import { ModelLogo } from "@/components/blocks/model-logo";
import { formatCredits } from "@/lib/format";

/**
 * The hero device: a conversation typing itself in, answered by a different
 * model each turn, with the credit balance in the header falling as it goes.
 *
 * The cost sits in the header rather than under each answer. Per-answer
 * receipts are the product's own pattern and they appear on the spending
 * screen and in the stepper, but repeated four times down a phone in the hero
 * they read as clutter, and a single figure counting down says the same thing
 * faster.
 *
 * It plays once and then rests on the finished thread. Nothing here loops,
 * apart from the typing dots, which exist for under a second at a time and
 * are a state indicator rather than decoration. That keeps it inside the
 * movement vocabulary in AGENTS.md while still reading as a live chat.
 *
 * There is no React state. The whole conversation renders finished, in the
 * markup, so a crawler and a browser with scripting off both get the real
 * thing. The animation only exists inside
 * `(prefers-reduced-motion: no-preference) and (scripting: enabled)`, where
 * CSS hides the lines and this effect reveals them by writing data attributes.
 * Space for every bubble is reserved from the first frame, so nothing reflows
 * as the thread fills in and the phone never changes height.
 *
 * Three models rather than one because "every model, one wallet" is the
 * argument, and a single balance draining across Claude, Gemini and ChatGPT
 * makes it in about eight seconds without a word of explanation.
 */
const OPENING_BALANCE = 59139;

const SCRIPT = [
  {
    ask: "Budget for a small bathroom reno?",
    model: "claude",
    name: "Claude",
    answer: "R35 000 to R60 000 for 4m². Tiling moves it most.",
    credits: 861,
  },
  {
    ask: "Make that a shopping list",
    model: "gemini",
    name: "Gemini",
    answer: "Seventeen items, grouped by trade.",
    credits: 214,
  },
  {
    ask: "Cheaper tiles near me?",
    model: "grok",
    name: "Grok",
    answer: "Three suppliers within 8km.",
    credits: 340,
  },
  {
    ask: "Now message the builder",
    model: "chatgpt",
    name: "ChatGPT",
    answer: "Drafted. It asks for the price in writing.",
    credits: 190,
  },
] as const;

/** Balance after each answer has been paid for. */
const BALANCES = SCRIPT.reduce<number[]>((acc, turn) => {
  const previous = acc.at(-1) ?? OPENING_BALANCE;
  acc.push(previous - turn.credits);
  return acc;
}, []);

const CLOSING_BALANCE = BALANCES.at(-1) ?? OPENING_BALANCE;

/* Pacing. Eight and a bit seconds end to end, which is about as long as a
   hero holds attention before you scroll. */
const CHAR_MS = 24;
const AFTER_TYPING_MS = 240;
const BEFORE_THINKING_MS = 320;
const THINKING_MS = 850;
const AFTER_ANSWER_MS = 780;

export function ChatDemo({ className }: { className?: string }) {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    const timers: number[] = [];

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(window.setTimeout(resolve, ms));
      });

    const composer = node.querySelector<HTMLElement>("[data-composer-text]");
    const balance = node.querySelector<HTMLElement>("[data-balance]");
    const lines = (kind: "ask" | "answer") =>
      [...node.querySelectorAll<HTMLElement>(`[data-line="${kind}"]`)];
    const asks = lines("ask");
    const answers = lines("answer");

    /* Reset to an empty thread. The wrapping Reveal is still at opacity 0 on
       this frame, so none of this is ever seen. */
    node.dataset.playing = "true";
    if (composer) composer.textContent = "";
    if (balance) balance.textContent = formatCredits(OPENING_BALANCE);

    /* The figure settles rather than jumps, in the CountUp vocabulary. A
       timeout writes the final value regardless, because requestAnimationFrame
       does not run in a background tab and a balance left showing the previous
       turn's number would simply be wrong. */
    const settleBalance = (to: number, from: number) => {
      if (!balance) return;
      const start = performance.now();
      const tick = (now: number) => {
        if (cancelled) return;
        const t = Math.min((now - start) / 420, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        balance.textContent = formatCredits(
          Math.round(from + (to - from) * eased),
        );
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      timers.push(
        window.setTimeout(() => {
          if (!cancelled) balance.textContent = formatCredits(to);
        }, 460),
      );
    };

    const play = async () => {
      for (const [index, turn] of SCRIPT.entries()) {
        /* Typed into the composer, character by character, the way the person
           holding the phone would. */
        for (let i = 1; i <= turn.ask.length; i += 1) {
          if (cancelled) return;
          if (composer) composer.textContent = turn.ask.slice(0, i);
          await sleep(CHAR_MS);
        }
        await sleep(AFTER_TYPING_MS);
        if (cancelled) return;

        /* Sent: the composer empties and the bubble lands. */
        if (composer) composer.textContent = "";
        asks[index].dataset.shown = "true";
        await sleep(BEFORE_THINKING_MS);
        if (cancelled) return;

        answers[index].dataset.shown = "true";
        await sleep(THINKING_MS);
        if (cancelled) return;

        answers[index].dataset.answered = "true";
        settleBalance(
          BALANCES[index],
          index === 0 ? OPENING_BALANCE : BALANCES[index - 1],
        );
        await sleep(AFTER_ANSWER_MS);
        if (cancelled) return;
      }

      node.dataset.playing = "false";
    };

    const start = () => {
      void play();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          start();
        }
      },
      { threshold: 0.25 },
    );

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) start();
    else observer.observe(node);

    return () => {
      cancelled = true;
      observer.disconnect();
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  return (
    <AppFrame
      className={className}
      label="A chat in the app. Four questions typed one after another, each answered by a different model: Claude, Gemini, Grok and ChatGPT. The credit balance in the header falls with every answer, from 59 139 credits down to 57 534."
    >
      <div ref={root} className="chat-demo flex flex-col">
        <div className="flex items-center justify-between border-b border-white/[0.07] px-4 pt-0.5 pb-2.5">
          <p className="font-heading text-sm font-bold text-ink">
            Bathroom reno
          </p>
          <p className="text-sm whitespace-nowrap">
            <span className="money" data-balance>
              {formatCredits(CLOSING_BALANCE)}
            </span>{" "}
            <span className="text-xs text-ink-faint">credits</span>
          </p>
        </div>

        <ul className="flex flex-col gap-2.5 px-3.5 py-3">
          {SCRIPT.map((turn) => (
            <li key={turn.model} className="contents">
              <div className="chat-line flex justify-end" data-line="ask">
                <p className="max-w-[82%] rounded-2xl rounded-br-md bg-surface-high px-3.5 py-2 text-sm leading-snug text-ink">
                  {turn.ask}
                </p>
              </div>

              <div className="chat-line" data-line="answer">
                <div className="flex items-center gap-1.5 pb-1">
                  <ModelLogo id={turn.model} variant="icon" height={13} />
                  <span className="text-xs text-ink-faint">{turn.name}</span>
                </div>
                <div className="relative max-w-[88%] rounded-2xl rounded-bl-md bg-surface px-3.5 py-2">
                  <p className="chat-answer text-sm leading-snug text-ink">
                    {turn.answer}
                  </p>
                  <span
                    aria-hidden="true"
                    className="chat-typing absolute top-1/2 left-3.5 -translate-y-1/2 items-center gap-1"
                  >
                    <span className="chat-dot size-1.5 rounded-full bg-ink-faint" />
                    <span className="chat-dot size-1.5 rounded-full bg-ink-faint" />
                    <span className="chat-dot size-1.5 rounded-full bg-ink-faint" />
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-auto px-3.5 pb-3.5">
          <div className="flex items-center gap-2 rounded-full bg-surface px-4 py-2">
            <p className="min-w-0 flex-1 truncate text-sm text-ink">
              <span data-composer-text />
              <span
                aria-hidden="true"
                className="chat-caret ml-px inline-block h-4 w-px translate-y-0.5 bg-ink-faint"
              />
              <span className="chat-placeholder text-ink-faint">
                Ask anything
              </span>
            </p>
            <span
              aria-hidden="true"
              className="grid size-6 shrink-0 place-items-center rounded-full bg-lime"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-3.5 text-graphite"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </AppFrame>
  );
}
