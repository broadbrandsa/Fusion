import { ScreenCard } from "@/components/blocks/app-frame";
import { formatCredits, formatRand } from "@/lib/format";

/**
 * Recreations of the real app screens, from the captures dated 09 September
 * 2026. Steel appears only on money, exactly as it does in the product.
 *
 * These are stand-ins for real device captures. When those arrive they should
 * replace these, because a screenshot of the real thing always beats a
 * faithful copy of it.
 */

/** The chats list, with the balance living permanently in the header. */
export function ChatsScreen() {
  return (
    <div className="px-4 pb-5">
      <div className="flex items-center justify-between pt-3">
        <p className="font-heading text-xl font-bold">Chats</p>
        <p className="money text-base">{formatCredits(59139)}</p>
      </div>
      <div className="mt-3 rounded-full bg-surface px-4 py-2 text-xs text-ink-faint">
        Search
      </div>
      <p className="mt-5 text-xs text-ink-faint">Today</p>
      <div className="mt-3 space-y-4">
        <div>
          <p className="text-sm text-ink">Living room redesign</p>
          <p className="mt-0.5 text-xs text-ink-faint">
            Start with this simple plan you can act on…
          </p>
        </div>
        <div>
          <p className="text-sm text-ink">Quote for the plumber</p>
          <p className="mt-0.5 text-xs text-ink-faint">
            Three things to ask before you agree a price…
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * The moment that makes the whole argument: an answer arriving with what it
 * drew sitting beside it.
 */
export function AnswerCostScreen() {
  return (
    <div className="px-4 pb-5">
      <div className="mt-3 ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-md bg-surface-high px-3.5 py-2.5">
        <p className="text-sm text-ink">
          What should I budget for a small bathroom reno?
        </p>
      </div>
      <div className="mt-3 max-w-[92%] rounded-2xl rounded-bl-md bg-surface px-3.5 py-3">
        <p className="text-sm leading-relaxed text-ink">
          For a 4m² bathroom, plan on R35 000 to R60 000. Tiling and the
          plumber move that number most.
        </p>
        <div className="mt-3 flex items-baseline justify-between gap-2 border-t border-white/10 pt-2.5 whitespace-nowrap">
          <span className="text-xs text-ink-faint">Drew</span>
          <span className="money text-xs">861 credits</span>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-ink-faint">
        Balance <span className="money">{formatCredits(59139)}</span>
      </p>
    </div>
  );
}

/** The spending screen. The single best proof that we are not a subscription. */
export function SpendingScreen() {
  const bars = [8, 0, 22, 14, 0, 0, 41, 33, 0, 12, 58, 26, 0, 74];

  return (
    <div className="px-4 pb-5">
      <p className="mt-3 text-xs text-ink-faint">Last 30 days</p>
      <p className="money mt-1 text-2xl">{formatCredits(18420)}</p>
      <p className="mt-0.5 text-xs text-ink-faint">credits · 41 answers</p>
      <div
        aria-hidden="true"
        className="mt-4 flex h-16 items-end justify-between gap-[3px]"
      >
        {bars.map((height, index) => (
          <span
            key={index}
            className="flex-1 rounded-sm bg-steel"
            style={{
              height: `${Math.max(height, 2)}%`,
              opacity: height === 0 ? 0.18 : 1,
            }}
          />
        ))}
      </div>
      <p className="mt-5 text-xs font-medium text-ink">By conversation</p>
      <div className="mt-2.5 space-y-2.5">
        {[
          ["Living room redesign", 8610],
          ["Quote for the plumber", 5240],
          ["Job application letter", 4570],
        ].map(([label, credits]) => (
          <div key={label as string} className="flex justify-between">
            <span className="text-xs text-ink-muted">{label}</span>
            <span className="money text-xs">
              {formatCredits(credits as number)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** A big job quoting before it runs. Nothing starts without your say. */
export function QuoteCard() {
  return (
    <ScreenCard label="A big job quoting its cost before it runs">
      <p className="text-xs text-ink-faint">Before this runs</p>
      <p className="mt-2 text-sm text-ink">
        Deep research across 14 sources, about 4 minutes.
      </p>
      <div className="mt-3 flex items-baseline justify-between border-t border-white/10 pt-3">
        <span className="text-xs text-ink-muted">Estimated</span>
        <span className="money text-lg">6 400 credits</span>
      </div>
      <div className="mt-3 flex gap-2">
        <span className="flex-1 rounded-full bg-ink px-3 py-1.5 text-center text-xs font-medium text-ground">
          Run it
        </span>
        <span className="flex-1 rounded-full border border-white/15 px-3 py-1.5 text-center text-xs text-ink-muted">
          Not now
        </span>
      </div>
    </ScreenCard>
  );
}

/** Where credit came from, and the lapse date stated in the product itself. */
export function GrantCard() {
  return (
    <ScreenCard label="Where your credit came from, with its lapse date">
      <p className="text-xs text-ink-faint">Where it came from</p>
      <div className="mt-3 flex items-baseline justify-between">
        <span className="text-sm text-ink">{formatCredits(60000)} free</span>
        <span className="text-xs text-ink-faint">lapses 15 Sep</span>
      </div>
      <p className="mt-3 border-t border-white/10 pt-3 text-xs leading-relaxed text-ink-muted">
        These are what you were given, not what is left. Your credit is one
        balance.
      </p>
    </ScreenCard>
  );
}

/** A shared chat splitting its cost. Pillar 1 as much as Pillar 3. */
export function SharedChatCard() {
  return (
    <ScreenCard label="A shared chat splitting its cost between five people">
      <div className="flex items-center gap-1.5">
        {["T", "N", "K", "M", "S"].map((initial, index) => (
          <span
            key={initial}
            className="grid size-6 place-items-center rounded-full border border-surface bg-surface-high text-[0.625rem] text-ink-muted"
            style={{ marginLeft: index === 0 ? 0 : "-0.5rem" }}
          >
            {initial}
          </span>
        ))}
        <span className="ml-2 text-xs text-ink-muted">5 people</span>
      </div>
      <p className="mt-3 text-sm text-ink">Weekend braai plan</p>
      <div className="mt-3 flex items-baseline justify-between border-t border-white/10 pt-3">
        <span className="text-xs text-ink-muted">Your share</span>
        <span className="money text-sm">{formatRand(4, { decimals: true })}</span>
      </div>
    </ScreenCard>
  );
}

/**
 * The language picker as a full screen, for the "ask in your own language"
 * step. No capture of it exists, so this is a recreation, like the
 * answer-with-cost screen. The eleven names are the official list and are
 * spelled as each language spells itself.
 */
export function LanguagePickerScreen() {
  const languages = [
    "English",
    "isiZulu",
    "isiXhosa",
    "Afrikaans",
    "Sepedi",
    "Setswana",
    "Sesotho",
    "Xitsonga",
    "siSwati",
    "Tshivenda",
    "isiNdebele",
  ];

  return (
    <div className="px-4 pb-6">
      <p className="mt-6 font-heading text-xl font-bold">Which language?</p>
      <p className="mt-2 text-xs text-ink-faint">
        Asked before anything else. Change it any time.
      </p>
      <div className="mt-5 space-y-2">
        {languages.map((language, index) => (
          <div
            key={language}
            className={
              index === 1
                ? "flex items-center justify-between rounded-xl bg-surface-high px-3.5 py-2.5"
                : "flex items-center justify-between rounded-xl bg-surface px-3.5 py-2.5"
            }
          >
            <span
              className={index === 1 ? "text-sm text-ink" : "text-sm text-ink-muted"}
            >
              {language}
            </span>
            {index === 1 ? (
              <span
                aria-hidden="true"
                className="grid size-4 place-items-center rounded-full bg-steel text-[0.5rem] text-ground"
              >
                ✓
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * The dinner list, built rather than screenshotted, and set straight onto its
 * card rather than inside a panel of its own.
 *
 * The real capture is 1206x2622, and at the size this card gives it the text
 * was illegible, which defeats the point: the argument is that seventeen
 * properly specified items come back, and you have to be able to read them
 * to believe it. Items and quantities are taken from the real capture.
 *
 * Completed items are struck through and set in on-image muted rather than
 * anything fainter. The strikethrough already carries "done", so the colour
 * does not need to whisper as well, and that keeps colour from being the only
 * indicator.
 */
export function ListCard() {
  const items = [
    ["500 g spaghetti", true],
    ["500 g beef mince", true],
    ["2 x onions", false],
    ["4 cloves garlic", true],
    ["2 x 400 g tins chopped tomatoes", false],
    ["2 tbsp tomato paste", false],
    ["50-100 g Parmesan", false],
  ] as const;

  return (
    <div
      role="img"
      aria-label="A shopping list filled in by AI: seventeen specified items with quantities, three of them already ticked off"
    >
      <div className="flex items-baseline justify-between">
        <p className="text-sm font-medium text-on-image">Food for dinner</p>
        <p className="figure text-xs text-on-image-muted">3 of 17</p>
      </div>

      <ul className="mt-5 space-y-3">
        {items.map(([label, done]) => (
          <li key={label} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className={
                done
                  ? "mt-px grid size-4 shrink-0 place-items-center rounded-[5px] bg-steel text-[0.5rem] text-[#191C20]"
                  : "mt-px size-4 shrink-0 rounded-[5px] border border-white/35"
              }
            >
              {done ? "\u2713" : ""}
            </span>
            <span
              className={
                done
                  ? "text-xs text-on-image-muted line-through"
                  : "text-xs text-on-image"
              }
            >
              {label}
            </span>
          </li>
        ))}
        <li className="pt-1 text-xs text-on-image-muted">and ten more</li>
      </ul>
    </div>
  );
}

export function ModelPickerCard() {
  return (
    <ScreenCard label="Claude and Gemini, chosen per question">
      <p className="text-xs text-ink-faint">Answer this one with</p>
      <div className="mt-3 space-y-2">
        <div className="flex items-center justify-between rounded-lg bg-surface-high px-3 py-2">
          <span className="text-sm text-ink">Claude</span>
          <span className="text-xs text-ink-faint">Long reasoning</span>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-white/10 px-3 py-2">
          <span className="text-sm text-ink-muted">Gemini</span>
          <span className="text-xs text-ink-faint">Fast, with search</span>
        </div>
      </div>
      <p className="mt-3 border-t border-white/10 pt-3 text-xs text-ink-muted">
        One balance, either way.
      </p>
    </ScreenCard>
  );
}
