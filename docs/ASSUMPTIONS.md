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

**Answer counts are not safe to publish.** The app estimates 468, 1289 and 3437
answers, all from an assumed 128 credits per answer. The single real transaction
in the spending log cost 861, which would make Starter about 70 answers. Both
can be true, since a quick question is cheap and a deep research job is not, so
what is needed is the middle value and the range across a few hundred real
answers. The likely resolution is better than a fixed number anyway: drop the
counts and show real examples of what a short question and a long research job
each cost. See `POSITIONING.md` for the full explanation.

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

**The free grant is probably 60 000 credits, not confirmed.** The brand book
says only that a newly verified number starts with a free grant, without a
size. The Your credit screen shows 60 000 credits granted, labelled "from
Starter", lapsing 15 Sep 2026, and 60 000 minus the 861 spent equals the 59 139
balance exactly. So that device received a full Starter bundle's worth free.
Whether that is the standard welcome grant or a seeded test account is the open
part.

**Audience decided 09 September 2026.** `POSITIONING.md` defines the audience
by usage pattern rather than payment blocker: AI use comes in bursts while a
subscription bills flat. Consumers first, education and training second.

**Education and training is unvalidated against the product.** Per-learner
accounts with preloaded credit is a strong demand story from team input, and
nothing in the seven screenshots supports it. The site therefore makes no
education claim and carries only a talk-to-us route. All that is needed for now
is a high-level read from engineering on whether this is close or far off.

**Enquiries have nowhere to go yet.** Customer and institutional enquiries share
one destination, decided 09 September 2026. It needs a real address or form and
somebody named to answer, because an unanswered enquiry route does more damage
than none.

**The Apple app id is missing.** The Google Play link is correct, built from the
`com.dsg.vasai` package. Apple needs a numeric app id, so the site links to a
store search in the meantime, decided 09 September 2026 rather than holding the
buttons back.

**Legal pages do not exist.** Privacy policy, terms and POPIA specifics were
out of scope and need input from whoever owns them. The privacy section makes
product claims about server-side enforcement, and how much of that can be
described publicly needs sign-off.

**App screens on the site are partly recreations.** Five sections use the real
captures from 09 September 2026, now in `public/images/app`. But the strongest
moment we could show, an answer landing with its cost beside it, has no capture,
so `src/components/blocks/app-screens.tsx` recreates it in markup. Faithful to
the real interface and clearly marked, and it should be replaced by a real
device capture the moment one exists. The figures shown in the recreations are
illustrative, not logged transactions.

**Two paper tokens were darkened for WCAG AA, 09 September 2026.** Paper ink
muted moved from the brand book's `#676E76` to `#60676F`, because the book's own
pairing against paper ground `#ECEEF2` measures 4.44:1 and AA needs 4.5. Paper
ink faint moved from `#8C939C`, which was derived here rather than taken from the
book and measured 2.67:1, to `#5F666E`. Both changes are invisible to the eye
and take failing pairs to passing. The ink muted one is worth raising with
whoever owns the brand book.

**Ink faint is not a body text colour.** The book scopes it to "placeholders,
timestamps". It was being used for eyebrows, captions and labels across the
site, where it measured 2.67:1 to 3.41:1. Those twenty-four usages moved to ink
muted. The token is unchanged and still used inside the phone mockups, which is
the job the book describes.

**The lime accent departs from the brand book.** #E9FF72 was chosen as the
marketing accent on 09 September 2026, on the owner's instruction, after the
reference sites. The brand book says chrome is greyscale and the money is the
only colour, so this is a documented departure rather than an interpretation.

It is constrained so the money rule still holds where it matters. Lime is a
fill only, never text, since it fails contrast on light grounds. It carries
interaction and nothing else. It never appears beside a credit figure, which is
why the featured bundle badge stayed greyscale. And adding it let steel come
out of the pill dot and the hero washes, where it had been stretched past
"money and nothing else", so the brand rule is observed more closely now than
before. If the brand book is revised, this belongs in it.

**The photography is not South African.** Six Unsplash images were supplied
09 September 2026 and five are in use. They work, but every kitchen, interior
and person in the set reads as North American or European.

That matters in one place in particular. The built-for-here section claims the
product was made for South Africa rather than adapted for it, and illustrating
it with an American kitchen quietly argues the opposite. Treat the current set
as placeholder for that section specifically. Full credits, placements and a
shoot brief are in `IMAGE-CREDITS.md`.

**One supplied image is deliberately not deployable.** A Microsoft Copilot
campaign photograph, with the Windows 11 logo visible on the laptop in frame,
is held in `docs/images-not-used/` rather than `public/`. Shipping a
competitor's AI marketing asset on a site arguing against subscription AI would
be an unforced error. Kept rather than deleted, in case it is wanted
internally.

**One supplied image is unused.** `phone-in-hand.jpg` is lit in a hot pink and
orange wash that fights graphite, steel and lime at once. It is available if
graded down hard, and better replaced.

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
