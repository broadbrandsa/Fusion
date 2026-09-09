# Digital Fusion

Marketing website for **Digital Fusion**, a prepaid AI assistant for South
Africa. Buy a bundle the way you buy airtime, ask anything in your own
language, and see what every answer cost the moment it lands.

Standalone Next.js app. No monorepo, no dependencies outside this directory.

## Getting started

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000. The internal brand reference is at
http://localhost:3000/brand.

No environment variables are needed to run or build.

## Commands

| Command | What it does |
| --- | --- |
| `pnpm dev` | Development server on port 3000 |
| `pnpm build` | Production build, type-checks as it goes |
| `pnpm start` | Serve the production build |
| `pnpm lint` | ESLint |

## Stack

Next.js 16 with the App Router, TypeScript, Tailwind CSS v4, shadcn primitives
on the neutral base, Lucide icons, pnpm, deployed on Vercel.

Fonts are Archivo for display, IBM Plex Sans for running text and IBM Plex Mono
for money and figures, all loaded through `next/font/google`.

## Current state

Scaffold and brand layer are done. Sections are placeholders on purpose, and
they say so on the page. Read `docs/SCOPE.md` for what exists and what does
not, and `docs/ASSUMPTIONS.md` before writing copy or filling in any figure.

Read `docs/POSITIONING.md` before writing a single line of copy. It holds the
four positioning answers and the pillar each feature has to prove, and nothing
should go on the site that does not ladder back to one of them.

Two things to know before touching the design. The money is the only colour:
chrome and content stay greyscale, and steel belongs to the credit figure
alone. And the wordmark in `src/components/brand/wordmark.tsx` is a placeholder
set in Archivo, because the official artwork has not been supplied and the
brand book is explicit that the mark is never rebuilt in another typeface.

## Documentation

| Document | Covers |
| --- | --- |
| [docs/PROJECT_OVERVIEW.md](docs/PROJECT_OVERVIEW.md) | What this is, who it is for, the stack, the owner |
| [docs/POSITIONING.md](docs/POSITIONING.md) | The messaging spine: the four positioning answers, and how every feature frames into them |
| [docs/DESIGN-AUDIT.md](docs/DESIGN-AUDIT.md) | What the reference sites do, measured, and our own UI/UX audit against it |
| [docs/IMAGE-CREDITS.md](docs/IMAGE-CREDITS.md) | Every image, its source, where it is used, and what is still missing |
| [docs/ASSUMPTIONS.md](docs/ASSUMPTIONS.md) | What is confirmed, what was guessed, what needs a decision |
| [docs/SCOPE.md](docs/SCOPE.md) | Pages and sections in and out, launch milestones |
| [docs/STRUCTURE.md](docs/STRUCTURE.md) | Folder layout, the brand layer, section rules, content approach |
| [docs/TRACKING_PLAN.md](docs/TRACKING_PLAN.md) | Analytics plan and placeholders, none of it wired yet |
| [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) | GitHub, Vercel, domains, environment variables, redeploys |

## Brand

Everything visual traces to the Digital Fusion Brand Book v1.1, 01 September
2026, the steel identity. A copy lives in `docs/brand/`.
