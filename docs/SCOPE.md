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

Social proof, the competitor comparison that carries the R149 to R324 argument,
a partner detail strip, an app store download block, and a cost demonstration
that shows an answer reporting what it drew. That last one is the section most
likely to sell the product, and it needs real product screens.

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
