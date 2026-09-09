import { bundles } from "@/content/site";
import { formatRand } from "@/lib/format";

import { SectionShell } from "./section-shell";

/**
 * Placeholder bundle table. The figures are real, taken from the brand book,
 * and set in mono with tabular numerals because they are money.
 */
export function Bundles() {
  return (
    <SectionShell id="bundles" eyebrow="Bundles" title="Three sizes, no debit order">
      <div className="grid gap-4 sm:grid-cols-3">
        {bundles.map((bundle) => (
          <div
            key={bundle.id}
            className="rounded-lg border border-border bg-card p-6"
          >
            <p className="text-sm text-ink-muted">{bundle.name}</p>
            <p className="money mt-3 text-3xl">{formatRand(bundle.price)}</p>
            <p className="figure mt-2 text-xs text-ink-faint">
              {bundle.validity} days
            </p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-ink-muted">
        A newly verified number starts with a free grant. Nothing renews on its
        own, and a balance can never go below zero.
      </p>
      <p className="mt-3 text-xs text-ink-faint">
        Placeholder layout. Credit allowances per bundle are not published in
        the brand book, so they are deliberately absent until confirmed.
      </p>
    </SectionShell>
  );
}
