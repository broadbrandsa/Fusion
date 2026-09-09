import type { Metadata } from "next";

import { Wordmark } from "@/components/brand/wordmark";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatCredits, formatRand } from "@/lib/format";

/** Internal reference surface, not for the public site. */
export const metadata: Metadata = {
  title: "Brand reference",
  robots: { index: false, follow: false },
};

const graphite = [
  ["Ground", "#191C20", "The screen itself"],
  ["Surface", "#232830", "Bubbles, the composer, sheets"],
  ["Surface high", "#2B313B", "Raised elements"],
  ["Ink", "#EEF1F4", "Text"],
  ["Ink muted", "#9AA3AD", "Secondary text"],
  ["Ink faint", "#697079", "Placeholders, timestamps"],
  ["Steel", "#6E9BC5", "Money, and nothing else in the app"],
  ["Gold", "#E0B75A", "Credit held against an answer in flight"],
  ["Danger", "#FF5A4E", "Errors only"],
] as const;

const paper = [
  ["Ground", "#ECEEF2", "The screen itself"],
  ["Surface", "#FFFFFF", "Bubbles, the composer, sheets"],
  ["Ink", "#1C2126", "Text"],
  ["Ink muted", "#676E76", "Secondary text"],
  ["Steel, deep", "#2E5E8C", "Money on light grounds"],
  ["Gold, deep", "#A3771D", "Held credit on light grounds"],
  ["Danger, deep", "#B3261E", "Errors only"],
] as const;

function Swatches({
  rows,
}: {
  rows: readonly (readonly [string, string, string])[];
}) {
  return (
    <ul className="divide-y divide-border">
      {rows.map(([role, value, use]) => (
        <li key={role} className="flex items-center gap-4 py-3">
          <span
            className="size-7 shrink-0 rounded border border-border"
            style={{ backgroundColor: value }}
          />
          <span className="w-32 shrink-0 text-sm">{role}</span>
          <span className="figure w-24 shrink-0 text-xs text-ink-muted">
            {value}
          </span>
          <span className="text-xs text-ink-faint">{use}</span>
        </li>
      ))}
    </ul>
  );
}

export default function BrandReference() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-20 md:px-10">
      <Wordmark className="text-3xl" />
      <p className="mt-8 text-xs tracking-[0.14em] text-ink-faint uppercase">
        Internal reference
      </p>
      <h1 className="mt-3 text-4xl">The steel identity</h1>
      <p className="mt-4 text-sm text-ink-muted">
        Checked against brand book v1.1, 01 September 2026. The money is the
        only colour: chrome is greyscale, content is greyscale, and the single
        chromatic element is the credit figure.
      </p>

      <h2 className="mt-16 text-2xl">Type</h2>
      <div className="mt-6 rounded-lg border border-border bg-card p-6">
        <p className="text-3xl">Prepaid AI, priced per answer</p>
        <p className="mt-2 text-xs tracking-[0.12em] text-ink-faint uppercase">
          Archivo, headlines and display, 600 to 800
        </p>
        <p className="mt-6 text-base">
          IBM Plex Sans carries running text on the web and in documents.
        </p>
        <p className="mt-2 text-xs tracking-[0.12em] text-ink-faint uppercase">
          IBM Plex Sans, body, 400 to 600
        </p>
        <p className="money mt-6 text-lg">
          {formatRand(2495, { decimals: true })} &nbsp;·&nbsp;{" "}
          {formatCredits(12440)} credits &nbsp;·&nbsp; 30 days
        </p>
        <p className="mt-2 text-xs tracking-[0.12em] text-ink-faint uppercase">
          IBM Plex Mono, money and figures, tabular numerals always
        </p>
      </div>
      <p className="mt-4 text-xs text-ink-faint">
        13px is the floor and nothing is set under it, so text-xs resolves to
        13px rather than Tailwind&rsquo;s default 12px.
      </p>

      <h2 className="mt-16 text-2xl">Graphite</h2>
      <p className="mt-2 text-sm text-ink-muted">
        The dark theme and the brand&rsquo;s home ground.
      </p>
      <div className="mt-6">
        <Swatches rows={graphite} />
      </div>

      <h2 className="mt-16 text-2xl">Paper</h2>
      <p className="mt-2 text-sm text-ink-muted">
        The light theme: the same shapes on a neutral off-white, with the
        accents darkened for contrast.
      </p>
      <div className="mt-6">
        <Swatches rows={paper} />
      </div>

      <h2 className="mt-16 text-2xl">The lime accent</h2>
      <p className="mt-2 text-sm text-ink-muted">
        #E9FF72. Not in the brand book, added 09 September 2026 as the marketing
        accent. It sits alongside the money rule rather than inside it, so it
        comes with limits.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-5">
          <div className="flex h-16 items-center justify-center rounded-md bg-lime">
            <span className="text-sm font-medium text-[#191C20]">
              Graphite on lime
            </span>
          </div>
          <p className="figure mt-3 text-xs text-ink-muted">15.48:1 · AAA</p>
          <p className="mt-1 text-xs text-ink-faint">
            The only way it is ever used. A fill, with graphite text.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-5">
          <div className="flex h-16 items-center justify-center rounded-md bg-white">
            <span className="text-sm font-medium text-lime">
              Lime as text on white
            </span>
          </div>
          <p className="figure mt-3 text-xs text-ink-muted">1.10:1 · fails</p>
          <p className="mt-1 text-xs text-ink-faint">
            Never do this. Lime is a fill, not a text colour.
          </p>
        </div>
      </div>
      <ul className="mt-6 space-y-2 text-sm text-ink-muted">
        <li>
          Interaction only: primary buttons, small marks, atmospheric washes.
        </li>
        <li>
          Never beside a credit figure. Lime is 2.9 times the luminance of steel
          on graphite, so it wins the eye, and the money is the point.
        </li>
        <li>
          Focus rings stay ink. A lime ring is invisible on paper.
        </li>
      </ul>

      <h2 className="mt-16 text-2xl">Primitives</h2>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button variant="accent">Get the app</Button>
        <Button>Get a bundle</Button>
        <Button variant="outline">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Badge>Prepaid</Badge>
        <Badge variant="outline">30 days</Badge>
      </div>
      <p className="mt-4 text-xs text-ink-faint">
        shadcn primitives on the neutral base, re-pointed at the brand tokens.
        Chrome stays greyscale on purpose.
      </p>
    </main>
  );
}
