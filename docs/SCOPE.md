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
| `/support` | Help entry point, once support channels are decided |

## Sections

Built 09 September 2026, laid out after Appito, Vitara and Habitline. All in
`src/components/sections`, all rendered on `/`, in the order the argument runs
in `POSITIONING.md`.

| Component | Pillar | Tone | State |
| --- | --- | --- | --- |
| `hero.tsx` | 1 | Graphite | Built. Decided headline, store buttons, and a chat that types itself in, answered turn by turn by Claude, Gemini, Grok and ChatGPT while the balance falls |
| `problem.tsx` | Sets up all | Paper | Built. Spend chart contrasting bursty top-ups with flat billing, plus an asymmetric photo pair |
| `how-it-works.tsx` | 1 and 2 | Graphite | Built. Appito's sticky scroll stepper, four steps, absorbing the former cost-proof section as step three |
| `bundles.tsx` | 1 | Photograph | Built. One photograph behind heading and prices together, type in a narrow column at the left, three cards with the middle inverted to paper. No answer counts |
| `full-strength.tsx` | 2 and 3 | Paper | Built. Bento grid, five cards, with the privacy claims full width in the middle row |
| `faq.tsx` | All | Paper | Built. Nine questions in two columns, drawn from the fears in POSITIONING.md |
| `closing-cta.tsx` | 1 | Graphite | Built. Store buttons and the wordmark watermark |

Removed 10 September 2026, all one-line restores from git:

| Component | Was | Why |
| --- | --- | --- |
| `comparison.tsx` | The arithmetic, a seven-row versus table | Cut at the client's request. It was the page's only direct competitor argument, so if the versus case is wanted back this is the file |
| `built-for-here.tsx` | Its own stat section: 11 languages, an entry-level Android from 2017, R20 to start, no debit orders | Cut at the client's request. **This was the whole of the fourth pillar.** Nothing on the site now says the product is made for South Africa rather than adapted for it, and the language count, the low-end Android support and the no-debit-order promise are all gone with it |
| `privacy.tsx` | Its own inverted panel with the four privacy claims | Not lost. The claims moved into `full-strength.tsx` as its middle card, so the panel went. It was the page's only section with no card in it anywhere, which is a shape the page no longer has |
| `talk-to-us.tsx` | Schools and teams, the institutions route | Cut at the client's request. It was the only destination for an institutional enquiry, and the footer's "Talk to us" link pointed at it, so that came out too. See the contact TODO in `site.ts` |

Supporting pieces: `section-shell.tsx` for rhythm, max width and tone
inversion. `src/components/blocks/` holds the pill, eyebrow, phone frame,
hand-built app screens, real app captures and photo slots.
`src/components/layout/` holds the pill header and the footer.

### Design decisions taken from the references

Pill buttons and a floating pill nav. A small pill above the headline. Display
type tracked tight, from -0.02em to -0.03em. Section padding at 80 to 112px.
Container at 1200px. Cards at 16px radius. Muted body text rather than full
contrast. A bento grid with real interface inside each card, which is the
pattern all three lean on hardest. Numbered stage cards. A stat row with one
card inverted. Three-up pricing with the middle carrying the weight. Two-column
FAQ. A closing panel with the wordmark set huge behind it.

Not taken: photography-led heroes and section backgrounds. All three reference
sites lean on stock imagery, and the brand book asks for calm, precise and
undecorated, so the app interface carries the visuals instead. Photo slots are
held open where the layout clearly wants an image.

### Still to build

Social proof, which needs real customers. A cost demonstration using a real
device capture of an answer landing, which would replace the hand-built
recreation. An app store download block, once in-app top-up ships.

## Explicitly excluded

Not in this repository, and not planned for it without a new brief.

- The product itself. This is the marketing site only.
- Authentication, accounts, balances or any signed-in surface.
- Payment processing and top-up flows.
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
product screens. The competitor comparison written and checked.

**M4, measurement.** Wire analytics per `TRACKING_PLAN.md`, define the
conversion goals, confirm events fire in preview before production.

**M5, pre-launch.** Legal pages live. Accessibility pass, including contrast
checks on both palettes and keyboard paths through every interactive element.
Lighthouse on a throttled mobile profile, since the product is built for an
entry-level Android from 2017 and the site should respect the same audience.
Re-check competitor pricing. Custom domains attached with .co.za as canonical.

**M6, launch.** Production deploy from `main`, DNS cut over, tracking verified
against live traffic.
