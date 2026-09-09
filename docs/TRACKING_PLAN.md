# Tracking Plan

Nothing is wired yet. No measurement IDs existed at build time, so this is the
plan and the placeholders, not a description of a working setup. Every ID below
is a placeholder to be replaced.

One principle carries over from the product: the brand is honest about money,
and it should be equally honest about measurement. Decline non-essential
cookies by default, keep the consent banner plain, and never ship a tracker
that the privacy section would have to apologise for.

## Google Analytics

**Placeholder measurement ID:** `G-XXXXXXXXXX`

Set it as `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel, per environment. Leave it
unset in development so local traffic never reaches production data.

Install with `@next/third-parties/google`, which handles script loading
properly in the App Router:

```tsx
// src/app/layout.tsx
import { GoogleAnalytics } from "@next/third-parties/google";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// inside <body>, after {children}
{gaId ? <GoogleAnalytics gaId={gaId} /> : null}
```

Gate it behind consent before production. The guard above only stops it when
the ID is missing, which is not the same thing.

## Event tracking

Events to define, named in snake_case, with the payload each one needs. None
are implemented.

| Event | Fires when | Payload |
| --- | --- | --- |
| `bundle_view` | Bundles section enters the viewport | `section` |
| `bundle_select` | A bundle card is chosen | `bundle_id`, `price_zar` |
| `cta_click` | Any primary or secondary CTA is clicked | `cta_id`, `location`, `label` |
| `store_click` | An App Store or Play Store link is clicked | `platform` |
| `faq_open` | An FAQ item is expanded | `question_id` |
| `language_view` | Languages section enters the viewport | none |
| `comparison_view` | Competitor comparison enters the viewport | none |
| `scroll_depth` | 25, 50, 75, 100 percent of a page | `percent`, `path` |
| `outbound_click` | Any link leaving the site | `href` |

Two rules for the payloads. Prices go in as numbers in rand, never as
formatted strings, so they stay aggregatable. And `location` on `cta_click`
should be the section id, since the same label appears in the header, the hero
and the footer, and knowing which one converts is the entire point.

Put the event helper in `src/lib/analytics.ts` when the time comes, with a
single typed `track()` function and a union of event names, so a typo in an
event name fails the build instead of quietly producing a dead metric.

## Form submission tracking

No forms exist yet. When one arrives, track three moments rather than one,
because a single submit event cannot tell abandonment from disinterest.

| Event | Fires when | Payload |
| --- | --- | --- |
| `form_start` | First field receives focus | `form_id` |
| `form_submit` | Submit succeeds | `form_id` |
| `form_error` | Validation or server error | `form_id`, `field`, `error_type` |

Never put personal data in an event payload. No email addresses, no phone
numbers, no names, no free-text field contents. Field names only. The same
applies to URLs: personal data never goes in a query string.

## Vercel Analytics

Available on the hosting we are already using, no cookie, no consent banner
needed for the basic page-view product. Worth turning on first, since it gives
real numbers before the GA and consent work is finished.

```bash
pnpm add @vercel/analytics @vercel/speed-insights
```

```tsx
// src/app/layout.tsx
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// inside <body>
<Analytics />
<SpeedInsights />
```

Speed Insights matters more than usual here. The product is built to run on an
entry-level Android from 2017, and a marketing site that only performs on a
flagship would be arguing against itself. Watch mobile LCP and INP on real
traffic, not just a local Lighthouse run.

## Conversion goals

Placeholders. Nobody has agreed these yet, and the numbers are guesses that
exist to be replaced.

| Goal | Definition | Target |
| --- | --- | --- |
| Primary: bundle intent | `bundle_select`, or `cta_click` on a bundle CTA | TBC |
| Secondary: app install | `store_click` on either platform | TBC |
| Engagement: comparison seen | `comparison_view` | TBC |
| Health: mobile LCP | Vercel Speed Insights, p75 mobile | under 2.5s |

Two things to settle before the numbers mean anything. First, whether a
conversion is measurable at all on this site, given that the actual purchase
happens in the app, which makes this an intent funnel
rather than a sales funnel. Second, whether attribution can survive the handoff
to an app store, because if it cannot, the primary goal is the
best proxy available and should be described honestly as one.

## Before any of this ships

Consent gating in place and tested. A privacy policy that matches what is
actually collected. Events verified firing in a Vercel preview deployment
before production. Development traffic excluded. And a named owner for the
dashboard, because an unowned analytics account stops being true within a
month.
