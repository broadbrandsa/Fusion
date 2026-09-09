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
CSS keyframes. Nothing decorative loops or bounces anywhere on any of the three.

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

| Check | Result |
| --- | --- |
| Contrast failures in site copy | 0 of 51 pairs |
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
