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

**Credit allowances per bundle: resolved 09 September 2026.** Read off the
app's own Top up screen. Starter is 60 000 credits, Regular 165 000 and Heavy
440 000, all valid 30 days. These are now in `src/content/site.ts`. The brand
book's "R2 495,00 · 12 440 credits · 30 days" was only ever a typography
specimen and is not bundle data.

**Answer counts are not safe to publish.** The app estimates about 468, 1289
and 3437 answers, which works out at about 128 credits an answer across all
three bundles. But the single real transaction in the app's spending log cost
861 credits, which would make Starter about 70 answers. One data point, on what
looks like a long research answer, so it may be an outlier. Get the real
distribution before any answer count goes on the site. A brand built on showing
every cost cannot advertise a figure that is out by a factor of six.

**In-app top-up is not built.** The Top up screen says so itself: buying credit
needs App Store products and receipt checking on our side, which are not built
yet. So the site cannot send anyone to buy a bundle, and the primary CTA has to
be the free grant until that ships. `in-app-topup` is marked `live: false` in
`src/content/site.ts` and nothing marked false may be claimed on the site.

**The app and the brand book disagree in three places.** The app writes prices
as R20.00 with a full stop, while the brand book writes R2 495,00 with a comma,
and the site follows the book. The app fills list checkboxes in steel, though
steel is meant to be money and nothing else. And the app uses gold for a
not-built-yet warning, though the brand book defines gold as credit held
against an answer in flight. All three look like the app drifting from the
book, but somebody has to decide which moves.

**The screenshots read darker than the graphite spec.** They look closer to
#0F1114 than the #191C20 the brand book gives for ground. Most likely the
capture or display profile rather than the app, so check it with an eyedropper
on a real device before changing a token.

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

**The free grant size is unknown.** The brand book confirms a newly verified
number starts with a grant but never says how big it is. The offer in
`POSITIONING.md` is built on that grant, so the number is needed before the
primary CTA can be written.

**Audience decided 09 September 2026.** `POSITIONING.md` defines the audience
by usage pattern rather than payment blocker: AI use comes in bursts while a
subscription bills flat. Consumers first, education and training second.

**Education and training is unvalidated against the product.** Per-learner
accounts with preloaded credit is a strong demand story from team input, and
nothing in the seven screenshots supports it. No bulk provisioning, no
organisation or admin view, no per-learner spend reporting, and shared chats up
to five people is adjacent but not the same. Nothing about education may appear
on the site until engineering confirms what exists. This is the largest open
question in the project.

**Institutional enquiries have nowhere to go yet.** The site will carry a
talk-to-us route for schools and teams, decided 09 September 2026, and it needs
a destination and a named person before it can be wired. An unanswered enquiry
form does more damage than no form.

**Store URLs are missing.** The primary CTA is now the app store download, so
it needs real Apple and Google Play links. Both stores use `com.dsg.vasai` and
the Apple listing is Digital Fusion AI, but the URLs themselves were never
supplied.

**Legal pages do not exist.** Privacy policy, terms and POPIA specifics were
out of scope and need input from whoever owns them. The privacy section makes
product claims about server-side enforcement, and how much of that can be
described publicly needs sign-off.

## Where the positioning sits

`POSITIONING.md` holds the four positioning answers and the feature framing.
Every open decision in it is also listed here, because a copy decision made
against an unresolved assumption is how a brand ends up claiming something it
cannot check.

## Dates

Competitor pricing was checked 28 August 2026 and should be re-checked before
launch, since the whole argument rests on it. The brand identity moved from
ember orange to steel on 01 September 2026, so any asset older than that date
is off-brand and should not be reused.
