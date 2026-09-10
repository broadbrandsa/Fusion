# Design reference and UI/UX audit

Two things in one document. What the three reference sites actually do, and
what our own site measured against that. Dated 09 September 2026.

References: [Appito](https://appito-wbs.webflow.io/),
[Vitara](https://vitara-wbs.webflow.io/),
[Habitline](https://habitline-wbs.webflow.io/).

---

## Part one: how the reference sites work

### Measured, at 1440px

| | Appito | Vitara | Habitline | **Ours** |
| --- | --- | --- | --- | --- |
| h1 | 56px / 700 | 86px / 700 / -2px | 90px / 500 | **84px / 700** |
| h2 | 56px / 700 | 58px / 600 | 48–50px / 500 | **56px** |
| Card title | 24px | 22px | 24px | **24px** |
| Body / lede | 16px | 20px | 20px | **17 / 20px** |
| Container | 1580px | 1380px | 1260px | **1320px** |
| Section padding | 100–130px | 100–200px | 200px | **115px** |
| Button radius | 70px | 100px | 100px | **pill** |
| Button padding | 20px 30px | — | 12px 15px | **56px tall** |
| Card radius | 20 / 30px | 16 / 20px | — | **16px** |

Two things stood out. Their display type is far larger than a document scale
would suggest, which is correct, because the brand book sets documents and a
marketing page is a different job. And their vertical padding is enormous,
100 to 200px, which is what makes the pages feel unhurried.

### The shared section architecture

Strip the three back and the same spine appears.

1. Hero with a device mockup and a floating card off it
2. A trust strip, either logos or a rating
3. A large statement, or the problem
4. A numbered journey, three or four steps
5. A bento grid with real interface inside each card
6. A stat row, usually with one card inverted
7. Social proof
8. Pricing, three up, middle carrying the weight
9. FAQ, two columns
10. A closing panel, often with the wordmark set huge behind it
11. Footer

The pattern they lean on hardest is the bento grid with mini app UI inside each
card. Habitline runs a 2x2 of it, Vitara's "Built for the whole picture" is the
same idea. It suits this product better than it suits theirs, because here the
interface is the argument rather than the decoration.

### Movement

All three do three things and almost nothing else.

**A staggered fade-up as the hero loads.** Habitline starts its badge, title,
description and button at opacity 0 and brings them in in sequence.

**A fade-up as each block scrolls in.** Opacity plus a small lift, once, never
reversing. Habitline drives 89 of these, Appito 23, Vitara a handful.

**0.3s ease-in-out on hover**, on colour and background only.

Habitline also runs infinite marquee strips, driven by Webflow's JS rather than
CSS keyframes. We had one carrying the model logos and it has been removed, so
nothing on our page loops at all. Nothing decorative loops or bounces anywhere
on any of the three references either.

### What we took, and what we did not

Taken: the type scale, the section padding, pill buttons and pill nav, the small
pill above the headline, numbered stage cards, the bento grid with real UI, the
stat row with one card inverted, three-up pricing, two-column FAQ, the closing
panel with a wordmark watermark, the fade-up reveals, the 0.3s hovers, and a
marquee for the model logos.

Not taken: photography-led heroes and section backgrounds. All three lean on
stock imagery, the brand book asks for calm, precise and undecorated, and our
app screens are stronger evidence than a stock kitchen. Also not taken: ratings
and testimonials, because we have no customers yet and inventing them is not
available to a brand built on being checkable.

### Where they have something we do not

**Ratings.** All three carry one: 4.8 from 62 reviews, 4.7 from 125, 4.9 from
12 400. Ours arrives with the first real App Store reviews, not before.

**Testimonials.** Same answer.

**A QR code.** Appito puts one beside its store badges, which is genuinely
useful on a desktop page for a mobile product. Worth adding, but only once the
real Apple app id exists, since a QR pointing at a store search is worse than
none.

---

## Part one and a half: giving each section its own shape

First pass had most sections wearing the same clothes: eyebrow, display heading,
lede, then a grid of bordered cards. The reference sites never repeat a layout
that often, so each section was re-cut to the archetype its own information
actually wants.

| Section | Was | Now | Borrowed from |
| --- | --- | --- | --- |
| Hero | Split with device and floating card, on flat graphite | **Vitara's hero**, matched against its rendered values rather than its markup. See the table below | Vitara |
| Problem | Heading, lede, two equal photos, three facts | **A spend chart** above **Habitline's tabbed cases**: three kinds of burst, each with a photograph, a description and a pattern figure, then a hashtag row saying the list is not exhaustive | The chart makes the argument, the tabs make "in bursts" concrete |
| How it works | Four identical bordered cards | **Appito's sticky scroll stepper**, and it now absorbs the old cost-proof section. See below | Appito |
| Cost proof | Device beside three cards | Merged into the stepper as step three, at full title size | Appito |
| Full strength | Bento, graphite | unchanged layout, moved to paper | Vitara's light bento |
| Bundles | Three-up on paper, middle graphite | Three-up on graphite, middle inverts to paper | Vitara pricing |
| Comparison | Two bordered panels | **A comparison table**, seven rows | None of the three use one, but a versus argument is what a table is for |
| Built for here | Stat row, photo, partner strip | Partner strip removed, photograph now full width, inverted stat card fixed | Vitara, Appito |
| Privacy | Four cards plus one card | **Full-bleed inset panel with no cards at all**, claims as a ruled definition list | Appito's inverted feature panel |
| FAQ | Two-column accordion | unchanged, moved to paper | Vitara, Habitline |
| Talk to us | Centred card on paper | unchanged, moved to graphite | — |
| Closing | Panel with wordmark watermark | unchanged | Vitara |

Three sections now contain no bordered card at all, which is what stops the
page reading as one long list of boxes.

### The spend chart

Worth calling out because it is the one piece of design here that is not
borrowed. An SVG line of what you actually spent across twelve months, in
steel, against a grey dashed line at the cheapest subscription price, with
both totals underneath. Steel is correct rather than an exception, because
every quantity on it is money, and the subscription reference stays grey so
the only coloured thing on the chart is your own usage.

The line draws itself in on reveal via `stroke-dashoffset`, with the area fill
and the dots following.

It is labelled on the page as an example year, and it deliberately uses the
cheapest competitor rather than the dearest so the comparison cannot be
accused of flattering itself. R400 of usage against R1 788 of subscription.

### The problem section, measured against Habitline

| | Habitline | Ours |
| --- | --- | --- |
| Panel padding | 100px | 100px |
| Panel radius | 20px | 20px |
| Decoration | dot grid over the panel | dot grid over the panel |
| Header | centred pill, heading, lede | centred pill, heading, lede |
| Tab menu | centred, 20px gap | centred, 20px gap |
| Tab pill | 10px radius, 12x20 padding | 10px radius, 12x20 padding |
| Info card | absolute, 40px from bottom-right | absolute, 40px from bottom-right |
| Card width | 400px | 400px |
| Card padding | 30px | 30px |
| Figure | 40px | 40px |
| Bottom row | centred label above centred tags | centred label above centred tags |

**One deliberate departure, and it is a contrast fix.** Habitline runs the
glass card at 0.72 opacity with `#B8B8B8` text, which works because the
photograph behind it is dark. Two of ours are not. The renovation photo's
bottom-right measures 0.947 relative luminance at the 99th percentile, where
that pairing lands at **1.64:1**, unreadable. Measured against the brightest of
the three, the glass runs at 0.90 with `on-image-muted`, giving 4.86:1 for the
body and 6.98:1 for the figure. On the page they measure 12.4:1 and 17.4:1.

### The hero, measured against Vitara

Reading the markup was not enough; the first attempt looked wrong because the
scrim was guessed. These are Vitara's computed values at 1440 beside ours.

| | Vitara | Ours |
| --- | --- | --- |
| Grid columns | 431.7 / 385.1 / 423.2 | 431.3 / 385.1 / 423.6 |
| Column gap | 40px | 40px |
| Grid padding-top | 75px | 75px |
| Column padding-top | 200 / 50 / 200 | 200 / 50 / 200 |
| Panel radius | 30px | 30px |
| Title | 86px, -2px | 84px, -2.02px |
| Lede | 20px / 1.2 | 20px / 1.3 |
| Device | 385 x 481 | 385 x 520 |
| Overlay | flat `#101011` at 0.6 | flat `#12151A` at 0.6 |
| Actions | two, stacked | two, stacked |

The outer columns drop 200px while the device column drops only 50px, and
that single fact is what makes the composition work: the device towers over
the type instead of sitting level with it.

**What the first attempt got wrong.** The scrim was 0.72 plus two gradients,
which composited to roughly 0.96 behind the headline and buried the
photograph completely. Vitara uses one flat layer at 0.6.

**Scrim strength is set from this photograph, not a generic worst case.**
Measured off the file: 99th percentile luminance is 0.168 in the headline
third and 0.132 in the copy third, because the image is genuinely dark. At
0.6 plus a light directional gradient that leaves the headline at 11.3:1, and
3.8:1 over the handful of blown pixels near the phone glow, which passes for
84px text. The copy third holds 6.9:1 at its worst.

**Two deliberate deviations.** Vitara's background panel runs 244px taller
than its content and bleeds over the section beneath; ours stops at the panel,
because the next section is paper and a bleed would sit on top of it. And
Vitara's device is a 385x481 cropped render, while ours is a full 1206x2622
capture, so it is clipped to 520px with a gradient dissolving the cut rather
than cutting the phone off square.

### Motion, second pass

The first pass had the three things the references do and nothing else. Added
since, all still entrance or interaction, nothing decorative looping:

| Movement | Where | Why it earns its place |
| --- | --- | --- |
| Figures count up | Chart totals, two of the four stats, bundle credits | The brand book asks for tabular numerals "so a balance does not shift width as it counts". A counting figure is the product's own behaviour |
| Chart bars grow from the baseline | The spend chart, staggered 55ms apart | The chart is the argument, and watching it build makes the shape mismatch land |
| Photographs lift under the cursor | All five | `scale(1.035)`, clipped by the figure, so nothing reflows |
| Header tightens on scroll | Site header | Reads as chrome over content once you leave the hero, rather than part of it |
| Nav underline grows from the left | Header links | Replaces a link that just changed colour |
| Scroll progress hairline | Top of the page | The page runs past 20 000px on a phone. Knowing there is an end is worth two pixels. Lime, because it is chrome and steel belongs to money |

The model logo marquee was removed on 10 September 2026, along with the
`Marquee` component, which had no other user. Nothing on the page loops now.

Counting is deliberately not applied to a year, a zero, or a bundle price. A
price list should read as a price list.

**One thing worth knowing for anyone verifying this.** `requestAnimationFrame`
does not run at all in a hidden document, and CSS transitions do not progress
either. Counters, the progress bar and the header state will all measure as
frozen if the browser pane is backgrounded. Force the trigger state and check
the computed style instead, which is how the chart bar rule was confirmed.

Image decoding is suspended too. A freshly requested image reports
`complete: true` with `naturalWidth: 0`, and `img.decode()` never settles, both
of which look exactly like a broken image and are not.

### The stepper, measured against Appito

| | Appito | Ours |
| --- | --- | --- |
| Grid | 3 equal columns | 3 equal columns |
| Gap | 145px | 145px |
| Align | start | start |
| Per-step block | 900px, sticky | 640px, sticky |
| Step title | 44px / 700 | 44px / 700 |
| Step pill | lime, radius 30, 8x24 padding | lime, pill radius, 8x24 |
| Tick disc | 20px, lime | 20px, lime |
| Item gap | 25px | 25px |
| Device column | sticky, screen swaps | sticky, screen swaps |

Appito's tick disc is `rgb(233, 255, 114)`, which is exactly the lime chosen
for this brand, so that part needed no translation.

Each step carries its own screen: the credit capture, a recreated language
picker, the recreated answer-with-cost, then the spending capture. Step two had
been showing the shared-chat capture, which is about asking together rather
than about language, so it now has a screen that matches what the step
actually claims.

**Why the two sections merged.** The four steps are the mechanism and the cost
claims are what happens at step three, so the two sections were describing the
same sequence twice. Step three keeps the Q1 headline at full 44px, so the
argument loses no weight by moving.

**Blocks are 640px rather than 900px.** Four steps at Appito's height would add
3600px to a page that is already long.

**Two implementation notes worth keeping.**

The active step is derived from scroll position, not from an
IntersectionObserver. The step blocks are sticky, so once pinned they sit in
the viewport permanently and every one of them reports as intersecting, which
holds the active index at zero forever. Their flow position still advances
normally, so measuring the column against the sticky line is both simpler and
correct.

There is no `requestAnimationFrame` throttle on that scroll handler. A passive
scroll listener already fires at most once a frame, so it bought nothing, and
rAF is suspended in a hidden document.

### A third thing that looks like a bug and is not

A hidden document does not emit scroll events at all. `window.scrollTo` moves
the page, `window.scrollY` updates, and no listener fires. Anything driven by
scroll will appear frozen when the browser pane is backgrounded. Dispatch
`new Event("scroll")` by hand after each programmatic scroll when verifying.

### One accessibility bug found in a primitive

The generated shadcn `Tabs` renders `tabindex="-1"` on every trigger, the
selected one included, so the group has no tab stop and cannot be reached by
keyboard at all. Verified: `anyReachableByTab: false`, unchanged by focus
events or a programmatic focus.

A separate bug in the same wrapper, `orientation` destructured out and never
forwarded to the Radix Root, was fixed but was not the cause.

Rather than fight the primitive for one section, `case-tabs.tsx` implements the
WAI-ARIA pattern directly: one tab stop on the selected tab, arrow keys to
move, Home and End to jump, activation following focus, and labelled panels.
`AGENTS.md` warns against the primitive until somebody fixes it properly.

### Tone rhythm

The alternation had drifted into a three-section graphite run and a five-section
one. Now: graphite, paper, graphite, graphite, paper, graphite, paper,
graphite, graphite-inset, paper, graphite, graphite-inset. The two remaining
adjacencies are either closely related sections or an inset panel, which reads
as distinct anyway.

**One real bug this surfaced.** The built-for-here stat row had an "inverted"
card set to `tone-graphite` inside a graphite section, so it was identical to
its neighbours and had been inverting nothing since it was written. It is paper
now, and actually inverts.

---

## Part two: the audit

Measured on the running site, not read off the source.

### Fixed during this pass

| Severity | Finding | Fix |
| --- | --- | --- |
| **Critical** | No visible keyboard focus anywhere. The base reset set an outline colour but left the style at `none`, so links measured `3px none` with no ring. | Global `:focus-visible` at 2px solid ink with 3px offset. Ink rather than lime, because a lime ring is invisible on paper. |
| **High** | 12 text/background pairs below WCAG AA. | See the contrast section below. |
| **High** | 22 interactive elements under 44x44. Nav links were 20px tall, the header CTA 28px. | Nav and footer links to a 44px minimum hit area, header CTA to 44px, store CTAs to 56px, which also matches the references' large buttons. |
| **High** | Reveals hid content behind JS with no fallback. A blocked or failed script left all 72 blocks at opacity 0. | Gated on `@media (scripting: enabled)`. With scripting off, or on a browser that does not know the feature, nothing hides. |
| **Medium** | Hydration mismatch and a React "script tag while rendering" error from the inline motion script. | Removed the script entirely. The CSS media query above does the same job with no script, no mismatch and no warning. |
| **Medium** | Nine FAQ triggers had `cursor: default`. | Pointer cursor and a 44px minimum height, applied at the call site rather than by editing a generated shadcn file. |
| **Medium** | The problem section's opening statement was a `<p>`, so that section had no heading in the document outline. | Promoted to `<h2>`. |
| **Low** | Model wordmarks warned about a modified width without a matching height. | `width: auto` alongside the explicit height. |
| **Critical** | A page opened in a background tab came to the front blank. An IntersectionObserver delivers nothing while the document is hidden, and fronting the tab produces no intersection *change* to fire, so every in-viewport block stayed at opacity 0 permanently. Cmd-clicking a link is common enough that this would have hit real people. | `Reveal` now decides from geometry, not only from the observer. Anything in or above the viewport is revealed from a measurement on the next frame, which still plays the transition, and a `visibilitychange` listener re-measures for anything that mounted hidden. |
| **Low** | A deep link or a reload with restored scroll left elements above the viewport permanently at opacity 0 if the reader scrolled back up. | Same geometry check. Anything already scrolled past at mount reveals immediately; elements below keep their entrance. |

### Text on photography

The hero puts type over an image, which needs its own palette. Three explicit
tokens rather than white with an opacity modifier, for two reasons: the
composited result is reviewable rather than implied, and Tailwind compiles an
opacity modifier to `oklab()`, which any contrast checker written against
`rgb()` silently misreads as near-black. That false-flagged the hero as
failing at 1.23:1 when it was actually passing at 10:1.

Measured against the worst case the scrim can produce, which is a pure white
photograph under both wash layers, landing at `#26292D`:

| Token | Value | Worst case |
| --- | --- | --- |
| `--on-image` | `#FFFFFF` | 14.61:1 |
| `--on-image-muted` | `#D6DAE0` | 10.41:1 |
| `--on-image-faint` | `#B9BFC7` | 7.89:1 |

### A note on verifying this

Screenshots are unreliable while the browser pane reports
`document.visibilityState === "hidden"`, because a hidden document is not
painted and the captured frame is stale. Two findings in this pass looked like
blank-page bugs and were not. Computed styles and geometry are the signal to
trust; measure `data-visible` and `opacity`, not the picture.

That said, the background-tab bug above was found precisely because of it, and
is real.

### Contrast

Twelve failures, from two causes.

**Ink faint was being used as body text.** The brand book scopes it to
"placeholders, timestamps", which is app UI. As marketing copy it measured
2.67:1 to 3.41:1 against four different grounds. Twenty-four usages moved to ink
muted. The token itself is unchanged and still correct inside the phone
mockups, where it is doing the job the book describes.

**Two paper tokens needed darkening.** Both are recorded in `ASSUMPTIONS.md`.

| Token | Was | Now | Ratio on paper ground |
| --- | --- | --- | --- |
| Paper ink muted | `#676E76` (brand book) | `#60676F` | 4.44 → **4.93** |
| Paper ink faint | `#8C939C` (derived here) | `#5F666E` | 2.67 → **5.00** |

The first is worth flagging to whoever owns the brand book: its own pairing of
ink muted on paper ground measures 4.44:1, and AA needs 4.5. Three steps darker
clears it and is invisible to the eye.

**Result: 51 pairs checked, 0 failures in site copy.** Two remain inside the
phone mockups, which are `role="img"` with an aria-label, so their inner text is
presentational and faithfully reproduces the product.

### Responsive

No horizontal scroll at any width. Type is fluid via `clamp()`, so it scales
without a breakpoint per step.

| Width | h1 | h2 | Horizontal scroll |
| --- | --- | --- | --- |
| 375 | 44px | 36px | None |
| 768 | 48px | 36px | None |
| 1024 | 62px | — | None |
| 1440 | 84px | 56px | None |

### Current state

Re-measured after the section variation work, since five sections changed
ground and every contrast pair changed with them.

| Check | Result |
| --- | --- |
| Contrast failures in site copy | 0 of 52 pairs |
| Images missing alt text | 0 of 24 |
| Broken images | 0 |
| Elements below 44x44 | 2, both the "FAQ" nav link at 31–38 x 44. Passes WCAG 2.5.8 AA, which asks 24x24 |
| Interactive elements missing a pointer cursor | 0 |
| `h1` elements | 1 |
| Heading order | No skipped levels |
| Positive `tabindex` | 0 |
| Console errors | 0 |
| `prefers-reduced-motion` | Honoured. Reveals and the marquee both collapse |
| Steel used on non-money elements | 0 |

### Still open

**No social proof.** The single biggest gap against all three references, and it
cannot be closed until real reviews exist.

**No QR code.** Blocked on the Apple app id.

**Motion volume.** 72 reveals across 12 sections. Habitline runs 89, so this is
in line with the references, but it is worth a human eye on whether it reads as
polish or as fuss. Every one is a one-shot entrance, nothing loops.

**Photography is not South African**, which matters most in the built-for-here
section. Covered in `IMAGE-CREDITS.md`.

**The FAQ answers are written from the fears in `POSITIONING.md`**, not from real
support questions.
