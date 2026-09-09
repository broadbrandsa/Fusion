# Scope

Current state: scaffold complete, placeholders in place, no finished sections.
Step 3 of the build brief was explicit that sections are not to be built yet,
so what exists is structure and a wired brand layer.

## Pages

### In this build

| Route | State | Notes |
| --- | --- | --- |
| `/` | Placeholder | Composes every placeholder section in intended order |
| `/brand` | Built | Internal reference for palette, type and primitives. `noindex` |

### Planned, not built

| Route | Purpose |
| --- | --- |
| `/bundles` | Full pricing detail, once credit allowances are confirmed |
| `/how-it-works` | Long-form walkthrough with real product screens |
| `/privacy` | Privacy policy, pending legal input |
| `/terms` | Terms of use, pending legal input |
| `/partners` | Distribution partner detail for Clicks Connect, Absa, Digital Mobile |
| `/support` | Help entry point, once support channels are decided |

## Sections

### Placeholders that exist

All in `src/components/sections`, all rendered on `/`, all honest about being
unfinished.

| Component | Section | State |
| --- | --- | --- |
| `hero.tsx` | Hero | Placeholder copy, real structure |
| `how-it-works.tsx` | How it works | Placeholder note only |
| `bundles.tsx` | Bundles | Real prices and validity, placeholder layout |
| `languages.tsx` | Languages | Placeholder note only |
| `privacy.tsx` | Privacy | Placeholder note only |
| `faq.tsx` | FAQ | Placeholder note only |
| `distributed-by.tsx` | Distributed by | Partner names as text, no marks yet |

Supporting pieces: `section-shell.tsx` for shared rhythm and max width,
`src/components/layout/site-header.tsx`, `site-footer.tsx`, and
`src/components/brand/wordmark.tsx`.

### Planned, not built

Sections are now planned against the four pillars in `POSITIONING.md` rather
than as a feature list. Each one has to prove a pillar or it does not get built.

| Section | Pillar | Why it exists |
| --- | --- | --- |
| Cost demonstration | Nothing hidden | Shows an answer reporting what it drew. The best proof we have, and it is a screenshot rather than a claim |
| Spending screens | Nothing hidden | The 30-day chart and by-conversation totals. No subscription product has any reason to build this screen |
| Competitor comparison | Nothing to cancel | A month of Claude Pro is about 16 Starter bundles. The most persuasive arithmetic available |
| Privacy detail | Nothing hidden | Server-enforced private chats, receipts held only on the phone |
| Product breadth | Full strength | Two AIs, web search, photos, documents, decks, deep research, shopping in rand. Kills the suspicion that prepaid means less |
| Lists and collections | Full strength | The dinner list came back with 17 specified items. Concrete beats adjectives |
| Shared chats | Full strength and Nothing to cancel | Up to five people, cost split between whoever pays |
| Games | Full strength | Quiz Night, Twenty Questions, Stop the Bus, The Court. Goes late and never near the hero, because it is the feature most likely to read as a toy |
| App store download | Built for here | Only once in-app top-up ships |
| Partner detail | Built for here | Clicks Connect, Absa, Digital Mobile |
| Social proof | All | Needs real customers first |

## Explicitly excluded

Not in this repository, and not planned for it without a new brief.

- The product itself. This is the marketing site only.
- Authentication, accounts, balances or any signed-in surface.
- Payment processing, top-up flows and partner billing integrations.
- A CMS. Content lives in `src/content` as typed modules, by design.
- A blog or content marketing engine.
- Internationalised routing. The site is `en-ZA`, even though the product
  answers in 11 languages. Translating the marketing site is a separate call.
- Email capture, forms and CRM integration.
- Legal copy of any kind.
- Analytics wiring. Planned in `TRACKING_PLAN.md`, deliberately not installed.
- The official wordmark SVG, which was not supplied.
- A light and dark theme toggle. Both palettes are wired, graphite is the
  default, and no switch is exposed.

## Launch milestones

**M1, scaffold. Done.** Next.js with App Router, TypeScript, Tailwind v4,
shadcn primitives, brand tokens wired, fonts loaded, docs written, build
passing, repository pushed, ready for Vercel.

**M2, content lock.** Resolve every open item in `ASSUMPTIONS.md`, in
particular the six versus eleven languages question and the per-bundle credit
allowances. Final copy written for every section. Real wordmark supplied.
No section gets built against unresolved facts.

**M3, sections built.** Replace placeholders with finished sections. Real
product screens. The competitor comparison written and checked. Partner marks
dropped in.

**M4, measurement.** Wire analytics per `TRACKING_PLAN.md`, define the
conversion goals, confirm events fire in preview before production.

**M5, pre-launch.** Legal pages live. Accessibility pass, including contrast
checks on both palettes and keyboard paths through every interactive element.
Lighthouse on a throttled mobile profile, since the product is built for an
entry-level Android from 2017 and the site should respect the same audience.
Re-check competitor pricing. Custom domains attached with .co.za as canonical.

**M6, launch.** Production deploy from `main`, DNS cut over, tracking verified
against live traffic.
