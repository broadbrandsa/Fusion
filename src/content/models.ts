/**
 * The AI models that answer inside the app.
 *
 * NEEDS CONFIRMATION. Brand Book v1.1 says "Two frontier AIs, one wallet" and
 * names Claude and Gemini only. Four sets of logos were supplied on
 * 09 September 2026 as "the AI the app uses", so all four are listed here and
 * shown on the site. If the app really answers with two, ChatGPT and Grok must
 * come off, and if it answers with four, the brand book differentiator needs
 * revising. Copy is written so it reads correctly either way.
 */
export const models = [
  {
    id: "claude",
    name: "Claude",
    icon: "/images/models/claude-icon.png",
    wordmark: "/images/models/claude-wordmark.png",
    note: "Long reasoning",
    inBrandBook: true,
  },
  {
    id: "gemini",
    name: "Gemini",
    icon: "/images/models/gemini-icon.png",
    wordmark: "/images/models/gemini-wordmark.png",
    note: "Fast, with search",
    inBrandBook: true,
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    icon: "/images/models/chatgpt-icon.png",
    wordmark: "/images/models/chatgpt-wordmark.png",
    note: "Broad general work",
    inBrandBook: false,
  },
  {
    id: "grok",
    name: "Grok",
    icon: "/images/models/grok-icon.png",
    wordmark: "/images/models/grok-wordmark.png",
    note: "Current and blunt",
    inBrandBook: false,
  },
] as const;

export type ModelId = (typeof models)[number]["id"];
