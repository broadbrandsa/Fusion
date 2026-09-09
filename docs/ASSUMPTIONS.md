# Assumptions

Everything in this repository was built from one input: the Digital Fusion
Brand Book v1.1, 01 September 2026. Nothing else was available at build time.
This document exists so nobody mistakes a reasonable guess for a confirmed
fact.

## Standing limitations

**No internal data access.** No analytics, no support logs, no CRM, no revenue
figures, no funnel data, no existing site to compare against. Nothing here is
informed by how real people currently behave.

**Directional strategy only.** Section order, page structure and the shape of
the argument are informed judgement, not tested. They are a starting point for
a conversation, not a conclusion.

**Requires validation post-approval.** Every item below needs a human to
confirm or correct it before launch. Treat an unresolved item as a blocker on
the section it touches, not as a detail to tidy later.

## Confirmed, straight from the brand book

Safe to build on, since these are quoted rather than inferred.

- Bundles are Starter R20, Regular R50 and Heavy R120, each valid 30 days.
- A newly verified number starts with a free grant.
- Claude and Gemini both answer, chosen per question, spending one balance.
- Graphite and paper palette values, exactly as recorded in `globals.css`.
- Archivo, IBM Plex Sans and IBM Plex Mono, with a 13px floor and tabular
  numerals on every column of figures.
- Domains, App Store bundle `com.dsg.vasai`, and the three distribution
  partners.
- Competitor pricing of roughly R149 to R324 a month, and Claude Pro at about
  R324, checked 28 August 2026.

## Open, and needing a decision

**Six languages or eleven.** The brand book says both. The Answer first value
reads "plain language in six languages", while the differentiator and product
sections both say the interface speaks all 11 official languages and the
assistant answers in whichever the person writes. The site currently claims 11,
following the two later mentions. If six is the truth for the assistant and 11
is the truth for the interface, the copy needs to separate the two claims
plainly, because the brand only claims what the product does today.

**The wordmark is a placeholder.** The brand book is explicit that the mark is
never rebuilt in another typeface, and the official artwork was not in the
folder. `src/components/brand/wordmark.tsx` sets the two-line lockup in Archivo
purely so layout and clear space can be worked on. It carries a
`data-placeholder="wordmark"` attribute and must be swapped for the real SVG
before anything ships.

**Credit allowances per bundle are unknown.** The brand book shows "R2 495,00 ·
12 440 credits · 30 days" as a typography specimen, not as bundle data. So the
bundle cards deliberately show price and validity only. Do not fill this in by
arithmetic.

**Paper borders, ink faint and surface high were derived.** The paper table in
the brand book lists seven roles and does not cover borders, ink faint or
surface high. Paper surface high uses `#F7F9FB`, which is a real brand value
taken from the app icon ground. The rest were interpolated to sit correctly
between ground and surface, and are marked in `globals.css`. They need a
designer's eye.

**Focus rings are greyscale on purpose.** Accessible focus needs contrast, and
steel is reserved for money. So `--ring` is ink in both themes rather than
steel. If the design team wants steel focus rings on marketing surfaces, that
is a defensible reading of "marketing surfaces may use steel more freely", but
it should be a decision rather than a drift.

**Paper is wired but unreachable.** Both themes are defined and the site opens
on graphite, since graphite is the brand's home ground. There is no theme
toggle yet, and no decision on whether the public site should offer one or
follow the system preference.

**All page copy is placeholder.** Headlines, subheads, FAQ questions and CTA
destinations are stand-ins. The FAQ in particular should come from questions
support actually receives, not from guesses.

**Analytics and conversion goals are unconfigured.** See `TRACKING_PLAN.md`.
No measurement IDs existed at build time, so nothing is wired.

**Legal pages do not exist.** Privacy policy, terms and POPIA specifics were
out of scope and need input from whoever owns them. The privacy section makes
product claims about server-side enforcement, and how much of that can be
described publicly needs sign-off.

## Dates

Competitor pricing was checked 28 August 2026 and should be re-checked before
launch, since the whole argument rests on it. The brand identity moved from
ember orange to steel on 01 September 2026, so any asset older than that date
is off-brand and should not be reused.
