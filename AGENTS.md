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

**Graphite is home ground.** `<html>` carries `dark` by default. Both palettes
are wired; there is no toggle.

**13px is the floor.** `--text-xs` is overridden to 13px, so `text-xs` is the
smallest step available. Nothing goes under it.

**Money is formatted, never hand-written.** Use `formatRand` from
`src/lib/format.ts`. South African English writes rand as R2 495,00.

**Figures use tabular numerals.** Every column of them, so a balance does not
shift width as it counts.

**Claim only what the product does today.** No hype words. If the brand book
does not state a figure, leave it out and note it in `docs/ASSUMPTIONS.md`
rather than inferring it.

## Voice

South African English. Answer first, then detail. Money always plain: what it
costs, what it drew, what is left. Never bury a price in fine print.

## Commands

```bash
pnpm dev      # http://localhost:3000
pnpm build    # type-checks as it builds
pnpm lint
```
