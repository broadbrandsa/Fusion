/**
 * Single source of truth for site-wide copy and figures.
 *
 * Every claim here is traceable to the Digital Fusion Brand Book v1.1
 * (01 September 2026). Anything not in the brand book is marked TODO rather
 * than invented, because the brand only claims what the product does today,
 * in numbers where numbers exist.
 */

export const site = {
  name: "Digital Fusion",
  /** The App Store listing name, since the plain name was taken. */
  storeName: "Digital Fusion AI",
  tagline: "Prepaid AI, priced per answer",
  description:
    "Buy a bundle the way you buy airtime, ask anything in your own language, and see what every answer cost the moment it lands. Claude and Gemini, one balance, in rand.",
  /** Home market address. digitalfusionai.com mirrors it for international traffic. */
  url: "https://digitalfusion.co.za",
  altUrl: "https://digitalfusionai.com",
  locale: "en-ZA",
} as const;

/** Bundles. Each valid 30 days. A newly verified number starts with a free grant. */
export const bundles = [
  { id: "starter", name: "Starter", price: 20, validity: 30 },
  { id: "regular", name: "Regular", price: 50, validity: 30 },
  { id: "heavy", name: "Heavy", price: 120, validity: 30 },
] as const;

/** Five commitments that sit under everything the brand says and ships. */
export const values = [
  {
    id: "honest-about-money",
    title: "Honest about money",
    body: "Every answer shows what it cost as it lands, a balance can never go below zero, and nothing renews on its own.",
  },
  {
    id: "prepaid-on-purpose",
    title: "Prepaid, on purpose",
    body: "Top-up is how South Africa pays for airtime, electricity and data. We treat it as the first-class way to pay for intelligence, never as the budget option.",
  },
  {
    id: "answer-first",
    title: "Answer first",
    body: "Plain language, with the substance in the first reply and the caveat beside it. Never a lecture before the answer.",
  },
  {
    id: "private-by-design",
    title: "Private by design",
    body: "Conversations are never used to train a model, deletion schedules are visible in Settings, and a private chat leaves nothing behind anywhere.",
  },
  {
    id: "built-for-real-phones",
    title: "Built for real phones",
    body: "The heavy lifting happens on our servers, so the product runs properly on an entry-level Android from 2017.",
  },
] as const;

/** Five claims no competitor in this market can make together. */
export const differentiators = [
  {
    id: "prepaid-in-rand",
    title: "Prepaid AI, in rand",
    body: "A R20 bundle bought like airtime, with no card, no subscription and no monthly debit order.",
  },
  {
    id: "two-frontier-ais",
    title: "Two frontier AIs, one wallet",
    body: "Claude and Gemini answer in the same app, chosen per question, spending one balance.",
  },
  {
    id: "eleven-languages",
    title: "All 11 official languages",
    body: "The interface asks your language first and speaks it, and the assistant answers in whichever language you write.",
  },
  {
    id: "cost-as-it-lands",
    title: "Every cost shown as it lands",
    body: "Each answer shows what it drew, big jobs quote before they run, and a balance can never go below zero.",
  },
  {
    id: "private-chats",
    title: "Private chats that leave nothing behind",
    body: "Kept nowhere, never used for training, erased when ended. Enforced on the server, not promised in a policy.",
  },
] as const;

/** Competitor pricing, checked 28 August 2026. Re-check before launch. */
export const competitorPricing = {
  checkedOn: "2026-08-28",
  subscriptionRangeZar: [149, 324] as const,
  claudeProZar: 324,
} as const;

/** Partners appear in a "Distributed by" strip, in their own brand colours. */
export const distributionPartners = [
  { id: "clicks-connect", name: "Clicks Connect" },
  { id: "absa", name: "Absa" },
  { id: "digital-mobile", name: "Digital Mobile" },
] as const;

export const nav = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#bundles", label: "Bundles" },
  { href: "/#languages", label: "Languages" },
  { href: "/#privacy", label: "Privacy" },
  { href: "/#faq", label: "FAQ" },
] as const;
