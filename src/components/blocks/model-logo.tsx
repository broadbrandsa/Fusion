import Image from "next/image";

import { models } from "@/content/models";
import { cn } from "@/lib/utils";

/**
 * Third-party model logos, rendered in a single colour.
 *
 * Monochrome is not a stylistic preference here, it settles three problems at
 * once.
 *
 * The brand book records that the identity moved off ember orange on
 * 01 September 2026 because "charcoal, porcelain and a warm orange accent were
 * the Claude app's exact trio". Claude's own mark is that terracotta, so
 * dropping it in full colour would walk straight back into the collision the
 * rebrand was built to avoid.
 *
 * ChatGPT's and Grok's marks are solid black, which is invisible on graphite.
 *
 * And the money is the only colour. Four logos carrying orange, a blue-purple
 * gradient and two blacks would put more colour in one strip than the rest of
 * the site owns put together, and the credit figure would stop being the thing
 * the eye finds.
 *
 * `brightness(0)` flattens any mark to black, then `invert()` lifts it to
 * white for dark grounds. Both marks keep their alpha, so only the artwork is
 * affected. Single-colour reproduction is permitted by every one of these
 * brands' guidelines; full colour is available via `tone="full"` if legal
 * would rather have it.
 *
 * The default follows `--logo-invert`, which the tone scopes set, so a logo
 * inverts with its ground automatically. This section moved from graphite to
 * paper once and the logos went white on white, which is exactly the failure
 * a prop-driven default invites.
 */
const byId = Object.fromEntries(models.map((model) => [model.id, model]));

export function ModelLogo({
  id,
  variant = "wordmark",
  tone = "auto",
  className,
  height = 28,
}: {
  id: (typeof models)[number]["id"];
  variant?: "wordmark" | "icon";
  tone?: "auto" | "onDark" | "onLight" | "full";
  className?: string;
  height?: number;
}) {
  const model = byId[id];
  const src = variant === "icon" ? model.icon : model.wordmark;
  const ratio = variant === "icon" ? 1 : 3.4;

  return (
    <Image
      src={src}
      alt={`${model.name} logo`}
      width={Math.round(height * ratio)}
      height={height}
      className={cn("w-auto object-contain", className)}
      style={{
        height,
        width: "auto",
        filter:
          tone === "full"
            ? undefined
            : tone === "onDark"
              ? "brightness(0) invert(1)"
              : tone === "onLight"
                ? "brightness(0)"
                : "brightness(0) invert(var(--logo-invert, 1))",
      }}
    />
  );
}
