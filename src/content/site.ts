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
    body: "Prepaid, in rand, with no subscription and no debit order. Nothing renews on its own, so there is nothing to cancel.",
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
  { id: "no-subscription", pillar: "nothing-to-cancel", label: "No subscription, no debit order", claim: "Nothing to commit to", live: true },
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
    body: "A R20 bundle bought like airtime, with no subscription and no monthly debit order.",
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

/**
 * Competitor pricing, checked 28 August 2026. Re-check before launch.
 *
 * Decided 09 September 2026: no competitor is named on the site. Copy compares
 * by range only, "a typical AI subscription costs R149 to R324 a month", so
 * `claudeProZar` is kept for internal reference and must not reach a page.
 */
/**
 * Unused since 10 September 2026, when the comparison section came off the
 * page. Kept because the figures are checked and dated, and restoring the
 * section is a one-line change.
 */
export const competitorPricing = {
  checkedOn: "2026-08-28",
  subscriptionRangeZar: [149, 324] as const,
  claudeProZar: 324,
} as const;

/**
 * Decided copy, 09 September 2026. See docs/POSITIONING.md.
 *
 * The headline is the brand book tagline, carrying the mechanism. "Nothing to
 * cancel" lands at the end of the subhead, which is where it does the most
 * work, because by then the reader knows what the product is and the line
 * answers the objection they were about to raise.
 */
export const hero = {
  headline: "Prepaid AI, priced per answer",
  /* Short on purpose. Three statements, no clauses. */
  subhead: "Buy it like airtime. See what every answer costs. Nothing renews.",
} as const;

/**
 * The primary action is the app store download, promising the free start
 * rather than a purchase, because in-app top-up is not built yet. The
 * sequence has to stay honest: download, verify your number, use the free
 * grant. Nobody meets the top-up screen until the grant runs out.
 *
 * Only Apple is shown on the site, decided 10 September 2026. The Play link
 * stays here because it is correct, built from the known package, so putting
 * it back is a one-line change in StoreBadge.
 *
 * The Apple link is still a store search, because the numeric app id was never
 * supplied. TODO: swap in the listing URL once the app id is known.
 */
export const stores = [
  {
    id: "apple",
    label: "Download on the App Store",
    href: "https://apps.apple.com/za/search?term=digital%20fusion%20ai",
  },
  {
    id: "google",
    label: "Get it on Google Play",
    href: "https://play.google.com/store/apps/details?id=com.dsg.vasai",
  },
] as const;

export const cta = {
  /**
   * Sits under the store buttons, so the promise stays the free start.
   *
   * "No card" came off every one of the seven places it appeared on
   * 10 September 2026. Bundles are bought through the App Store, which means
   * a payment method on the Apple account, so the claim was false. What is
   * still true, and is what the pillar actually rests on, is that nothing
   * renews: no subscription and no debit order of ours.
   */
  promise: "Start free. Nothing renews.",
  secondary: { label: "See what an answer costs", href: "/#how-it-works" },
} as const;

/**
 * The one genuine limitation in the offer, stated in the main flow rather than
 * buried. Saying it ourselves turns it into another proof that nothing is
 * hidden, which is the only way to play a real constraint.
 */
export const lapseNotice =
  "Credit lasts 30 days, the same as airtime. We would rather say it here than in fine print.";

/**
 * One destination for every enquiry, customer and institutional alike, decided
 * 09 September 2026. Institutions get a route rather than a feature, because
 * per-learner accounts and bulk provisioning are not built, so the site
 * invites the conversation without describing anything.
 *
 * TODO: the real destination. An anchor is a placeholder, not an answer.
 */
export const contact = {
  href: "#contact",
  general: "Questions? Talk to us.",
  institutions: "Buying for a school or a team? Talk to us.",
} as const;

export const nav = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#bundles", label: "Bundles" },
  { href: "/#full-strength", label: "Features" },
  { href: "/#faq", label: "FAQ" },
] as const;
