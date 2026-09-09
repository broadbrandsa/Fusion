# Deployment

## GitHub repository

**Repository:** https://github.com/broadbrandsa/Fusion
**Default branch:** `main`
**Account:** `broadbrandsa`

The repository root is the project root. `package.json` sits at the top level,
there is no monorepo and no workspace nesting, so Vercel needs no root
directory override.

Working on it fresh:

```bash
git clone https://github.com/broadbrandsa/Fusion.git
cd Fusion
pnpm install
pnpm dev
```

Branch naming: `feat/`, `fix/`, `docs/` or `chore/` plus a short description.
Push to a branch, open a pull request, review the Vercel preview, then merge to
`main`.

## Vercel project setup

Import the repository at vercel.com/new and pick the `broadbrandsa` account.
Vercel detects Next.js and pnpm on its own, so most of this is confirming
rather than typing.

| Setting | Value |
| --- | --- |
| Framework preset | Next.js |
| Root directory | `./` (leave as is) |
| Build command | `pnpm build` |
| Install command | `pnpm install` |
| Output directory | leave blank |
| Node version | 22.x |

Do not create a `vercel.json`. Nothing about this project needs one yet, and an
unnecessary config file is one more place for settings to disagree with the
dashboard. If redirects, headers or cron jobs are needed later, that is the
moment to add one.

### Root directory rules

Leave root directory empty, which means the repository root. It is correct
because `package.json`, `next.config.ts` and `src/` are all at the top level.
The only reason to ever change it would be moving the app into a subfolder, and
if that happens the root directory has to move with it or every build will fail
at install with a missing lockfile.

### Node and pnpm

`packageManager` is pinned to `pnpm@10.20.0` in `package.json`, and Vercel
honours it via Corepack, so the build uses the same pnpm as local development.
Do not delete that field. Node is set to 22.x in project settings, matching
local `v22.20.0`.

## Environment variables

Nothing is required to build or run today. The app builds and serves with no
environment variables set at all, which is deliberate at this stage.

Set variables in Vercel under Settings, Environment Variables, choosing the
environments each one applies to. Anything prefixed `NEXT_PUBLIC_` is baked
into the client bundle and is readable by anyone, so it is for identifiers
only, never secrets.

| Variable | Environments | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Production | Google Analytics, see TRACKING_PLAN.md |
| `NEXT_PUBLIC_SITE_URL` | All | Canonical origin, if it ever needs to differ per environment |

Locally, put them in `.env.local`, which `.gitignore` already covers. Never
commit an env file. To pull what is already set on Vercel:

```bash
pnpm dlx vercel env pull .env.local
```

Changing an environment variable does not change a running deployment. A
redeploy is needed for it to take effect, and for a `NEXT_PUBLIC_` variable the
build itself has to run again, since the value is compiled in.

## Domains

| Domain | Role |
| --- | --- |
| digitalfusion.co.za | Home market address, canonical |
| digitalfusionai.com | International traffic, mirrors the App Store name |

Attach both in Vercel under Settings, Domains. Set the .co.za as primary and
redirect the .com to it, so there is one canonical address and no duplicate
content. Print the .co.za on anything South African. The .com exists so the
name is never a dead end.

## How to redeploy

**Push to a branch.** Every push builds a preview deployment with its own URL.
This is the normal way to see a change.

**Merge to `main`.** Production builds and goes live automatically.

**Redeploy the same commit.** Vercel dashboard, Deployments, the three-dot menu
on a deployment, Redeploy. Use this after changing an environment variable, and
uncheck the build cache if a stale cache is the suspect.

**From the terminal.** `pnpm dlx vercel` for a preview, `pnpm dlx vercel --prod`
for production. Handy in a pinch, though pushing to git keeps the deployment
history honest about what is live.

**Roll back.** Deployments, find the last good production deployment, Promote to
Production. Instant, and it does not rebuild. Do this first when production is
broken, then fix the cause without the pressure.

## Before merging to main

```bash
pnpm build
pnpm lint
```

Both have to pass. `pnpm build` runs the TypeScript compilation, so a type error
fails the build rather than reaching production. Vercel will catch it too, but
finding it locally is faster than finding it in a queue.
