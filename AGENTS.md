<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Digital Fusion website

Marketing site for Digital Fusion, a prepaid AI assistant for South Africa.
Read `docs/PROJECT_OVERVIEW.md` first, then `docs/STRUCTURE.md` before writing
code, and `docs/ASSUMPTIONS.md` before writing copy or filling in a figure.

## Stack

Next.js 16 App Router, TypeScript strict, Tailwind CSS v4, shadcn (radix base,
`radix-nova` style, neutral base colour), Lucide icons, pnpm.

There is no `tailwind.config.ts`. Tailwind v4 is CSS-first and the whole theme
lives in `src/app/globals.css`. That is intentional, not missing.

**This project does not use Untitled UI or React Aria Components.** A CLAUDE.md
higher up the filesystem describes a different project that does. Its `Aria*`
import prefix rule and its Untitled UI component imports do not apply here. Its
kebab-case file naming and its preference for semantic colour tokens over raw
palette values do apply, and this project follows both.

## The rules that actually matter

**The money is the only colour.** Chrome is greyscale, content is greyscale,
and steel is reserved for the credit figure. Steel arrives only through the
`.money`, `.money-held` and `.figure` classes in `globals.css`. If a component
needs steel and is not showing money, stop and check the brand book.

**Model logos follow their ground automatically.** `ModelLogo` flattens the
mark and inverts it based on `--logo-invert`, which the tone scopes set. Do not
pass `tone` unless you are overriding on purpose. A section that changes tone
would otherwise leave its logos white on white, which is exactly what happened
when Full strength moved to paper.

**There is a temporary accent picker on the site.** Bottom left, added
10 September 2026 for sign-off, because the accent is the one colour here
that is a choice and the room could not agree. Remove two things once it is
settled: `<AccentPicker />` in `layout.tsx` and the `[data-accent]` block at
the end of `globals.css`. Graphite-on-accent text is the `--on-lime` token,
which stays either way.

**The lime accent is a fill, never text.** #E9FF72, added 09 September 2026 as
the marketing accent, available as `bg-lime` and the `accent` button variant.
Graphite on lime is 15.48:1. Lime as text on paper is 1.05:1, which fails, so
it never carries type. It is interaction only, and it never appears beside a
credit figure, because it is 2.9 times the luminance of steel and would win the
eye. Focus rings stay ink.

**Graphite is home ground.** `<html>` carries `dark` by default. Both palettes
are wired; there is no toggle.

**Display type uses the classes, not raw sizes.** `display-1`, `display-2`,
`display-3` and `card-title` in `globals.css`, plus `container-site` and
`section-y` for block rhythm. The scale is measured off the reference sites and
recorded in `docs/DESIGN-AUDIT.md`.

**Movement is entrance and interaction only. Nothing decorative loops.**
The vocabulary: a staggered fade-up on load, a fade-up on scroll via `Reveal`,
0.3s ease-in-out hovers, figures that count up via `CountUp`, chart bars that
grow from the baseline, a photograph that lifts slightly under the cursor, a
header that tightens once you leave the hero, a scroll progress hairline, and
the hero conversation, which types itself in once and then rests on the
finished thread.

The hero conversation is the one place a loop appears, in its typing dots, and
they exist for 850ms at a time as a state indicator. Everything about it is
built the way `chat-demo.tsx` is built: the finished state in the markup, no
React state, and the animation living entirely inside the motion query, so a
blocked script leaves a real conversation on the page rather than an empty
phone.

Everything collapses under `prefers-reduced-motion`, and the reveals are gated
on `@media (scripting: enabled)` so a blocked script never leaves the page
blank.

**Counting is for quantities.** `CountUp` goes on figures that are amounts.
Not on a year, not on a zero, and not on a price in a price list, which should
read as a price list. The brand book asks for tabular numerals "so a balance
does not shift width as it counts", which is where the idea comes from.

**`CountUp` takes a format name, not a format function.** A Server Component
cannot pass a function to a Client Component, and the build fails if you try.

**Ink faint is not body text.** It is for placeholders and timestamps inside the
app mockups. Site copy uses ink muted or better, because ink faint fails WCAG AA
on every ground we have.

**13px is the floor.** `--text-xs` is overridden to 13px, so `text-xs` is the
smallest step available. Nothing goes under it.

**Money is formatted, never hand-written.** Use `formatRand` from
`src/lib/format.ts`. South African English writes rand as R2 495,00.

**Figures use tabular numerals.** Every column of them, so a balance does not
shift width as it counts.

**Claim only what the product does today.** No hype words. If the brand book
does not state a figure, leave it out and note it in `docs/ASSUMPTIONS.md`
rather than inferring it.

**Do not use `src/components/ui/tabs.tsx`.** The generated shadcn Tabs renders
`tabindex="-1"` on every trigger, including the selected one, so the group has
no tab stop and is unreachable by keyboard. `src/components/blocks/case-tabs.tsx`
implements the WAI-ARIA pattern by hand instead: one tab stop, arrow keys,
Home and End. Use that, or fix the primitive properly before reaching for it.

**Downloads are Apple only, for now.** `StoreBadge` renders the official App
Store artwork, which Apple requires be used as supplied rather than rebuilt.
The Google Play URL is still in `stores` and is correct, so putting it back is
a one-line change.

## Voice

South African English. Answer first, then detail. Money always plain: what it
costs, what it drew, what is left. Never bury a price in fine print.

## Commands

```bash
pnpm dev      # http://localhost:3000
pnpm build    # type-checks as it builds
pnpm lint
```
