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

/**
 * Bundles. Each valid 30 days. A newly verified number starts with a free grant.
 *
 * Credit and answer figures are read off the app's own Top up screen,
 * 09 September 2026. All three price at about 128 credits per answer, and
 * bigger bundles buy more credits per rand.
 *
 * Caution before publishing `approxAnswers`: the one real transaction in the
 * app's spending log cost 861 credits, not 128, which would make Starter about
 * 70 answers rather than 468. See docs/POSITIONING.md.
 */
export const bundles = [
  {
    id: "starter",
    name: "Starter",
    price: 20,
    credits: 60_000,
    approxAnswers: 468,
    validity: 30,
  },
  {
    id: "regular",
    name: "Regular",
    price: 50,
    credits: 165_000,
    approxAnswers: 1289,
    validity: 30,
  },
  {
    id: "heavy",
    name: "Heavy",
    price: 120,
    credits: 440_000,
    approxAnswers: 3437,
    validity: 30,
  },
] as const;

/**
 * The messaging spine, from docs/POSITIONING.md. Every section and every
 * feature on the site sits under one of these four. If something fits none of
 * them, it does not belong on the site.
 */
export const pillars = [
  {
    id: "nothing-to-cancel",
    title: "Nothing to cancel",
    body: "Prepaid, in rand, with no card and no debit order. Nothing renews on its own, so there is nothing to cancel.",
  },
  {
    id: "nothing-hidden",
    title: "Nothing hidden",
    body: "Every answer shows what it cost as it lands, big jobs quote before they run, and your balance can never go below zero. Private chats are kept nowhere and never used for training.",
  },
  {
    id: "full-strength",
    title: "Full strength, not a lite version",
    body: "Claude and Gemini answer in the same app, chosen per question. Web search, photos, documents, decks, deep research and shopping in rand.",
  },
  {
    id: "built-for-here",
    title: "Built for here",
    body: "All 11 official languages, priced in rand, and it runs properly on an entry-level Android from 2017.",
  },
] as const;

export type PillarId = (typeof pillars)[number]["id"];

/**
 * Features, each tagged with the pillar it proves. Described by the job it
 * does for the reader rather than by what it is. `live` is false where the
 * product does not do it yet, and nothing marked false may be claimed on the
 * site.
 */
export const features = [
  { id: "prepaid-bundles", pillar: "nothing-to-cancel", label: "Bundles from R20", claim: "Buy it like airtime", live: true },
  { id: "no-card", pillar: "nothing-to-cancel", label: "No card, no debit order", claim: "Nothing to commit to", live: true },
  { id: "no-renewal", pillar: "nothing-to-cancel", label: "Nothing renews on its own", claim: "Nothing to cancel", live: true },
  { id: "never-below-zero", pillar: "nothing-to-cancel", label: "Balance never goes below zero", claim: "Bill shock is impossible", live: true },
  { id: "free-grant", pillar: "nothing-to-cancel", label: "Free grant on a verified number", claim: "Try it before you pay", live: true },
  { id: "thirty-days", pillar: "nothing-to-cancel", label: "Valid 30 days", claim: "We tell you the catch ourselves", live: true },
  { id: "cost-as-it-lands", pillar: "nothing-hidden", label: "Each answer reports what it drew", claim: "You always know what it cost", live: true },
  { id: "quotes-first", pillar: "nothing-hidden", label: "Big jobs quote before they run", claim: "No surprises", live: true },
  { id: "spending-chart", pillar: "nothing-hidden", label: "Spending, day by day", claim: "Audit us, we built the screen for it", live: true },
  { id: "spending-by-chat", pillar: "nothing-hidden", label: "Spending by conversation", claim: "See which work drank the credit", live: true },
  { id: "receipts", pillar: "nothing-hidden", label: "Every transaction, with a receipt", claim: "Down to the individual answer", live: true },
  { id: "receipts-local", pillar: "nothing-hidden", label: "Receipts held only on your phone", claim: "We keep less than we could", live: true },
  { id: "private-chats", pillar: "nothing-hidden", label: "Private chats leave nothing behind", claim: "Enforced on the server, not promised", live: true },
  { id: "no-training", pillar: "nothing-hidden", label: "Never used for training", claim: "Your work stays yours", live: true },
  { id: "two-ais", pillar: "full-strength", label: "Claude and Gemini, one balance", claim: "Full strength, not a lite model", live: true },
  { id: "per-question-model", pillar: "full-strength", label: "Chosen per question", claim: "The right model for the job", live: true },
  { id: "web-search", pillar: "full-strength", label: "Searches the web when needed", claim: "Current, not frozen", live: true },
  { id: "photos", pillar: "full-strength", label: "Reads photos", claim: "Point your camera at it", live: true },
  { id: "documents", pillar: "full-strength", label: "Writes documents and slide decks", claim: "Real work, not just chat", live: true },
  { id: "deep-research", pillar: "full-strength", label: "Deep research", claim: "The heavy jobs too", live: true },
  { id: "shopping", pillar: "full-strength", label: "Shops with live prices in rand", claim: "Priced where you actually shop", live: true },
  { id: "lists", pillar: "full-strength", label: "Lists, filled by AI", claim: "It fills the list, you tick it off", live: true },
  { id: "collections", pillar: "full-strength", label: "Files, recipes and bookmarks kept", claim: "Your work is kept, not lost", live: true },
  { id: "shared-chats", pillar: "full-strength", label: "Shared chats, up to five people", claim: "Ask together, split the cost", live: true },
  { id: "games", pillar: "full-strength", label: "Games with an AI referee", claim: "Enjoyable, not only useful", live: true },
  { id: "eleven-languages", pillar: "built-for-here", label: "All 11 official languages", claim: "It speaks the way you do", live: true },
  { id: "language-first", pillar: "built-for-here", label: "The interface asks your language first", claim: "Yours from the first screen", live: true },
  { id: "real-phones", pillar: "built-for-here", label: "Runs on a 2017 entry-level Android", claim: "Built for the phone you own", live: true },
  { id: "partners", pillar: "built-for-here", label: "Sold through brands you already pay", claim: "Buy it where you already are", live: true },
  /* Not live. The app's own Top up screen says buying credit needs App Store
     products and receipt checking, which are not built yet. */
  { id: "in-app-topup", pillar: "nothing-to-cancel", label: "Top up inside the app", claim: "Buy a bundle in two taps", live: false },
] as const satisfies readonly {
  id: string;
  pillar: PillarId;
  label: string;
  claim: string;
  live: boolean;
}[];

/** Only what the product does today may reach the site. */
export const liveFeatures = features.filter((feature) => feature.live);

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
