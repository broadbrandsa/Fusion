/**
 * Money is always plain: what it costs, what it drew, what is left.
 *
 * South African English writes rand amounts as R2 495,00, so a space groups
 * the thousands and a comma marks the decimal. Intl gets the grouping right
 * for en-ZA but uses a non-breaking space and its own currency prefix, so we
 * normalise both here rather than in every component.
 */
export function formatRand(amount: number, options?: { decimals?: boolean }) {
  const decimals = options?.decimals ?? !Number.isInteger(amount);

  const digits = new Intl.NumberFormat("en-ZA", {
    minimumFractionDigits: decimals ? 2 : 0,
    maximumFractionDigits: decimals ? 2 : 0,
  })
    .format(amount)
    /* Intl gives a narrow no-break space for en-ZA grouping. Keep the
       non-breaking behaviour, drop the narrowness. */
    .replace(/[  \s]/g, " ");

  return `R${digits}`;
}

/** Whole credits, tabular, grouped the same way as rand. */
export function formatCredits(credits: number) {
  return new Intl.NumberFormat("en-ZA", {
    maximumFractionDigits: 0,
  })
    .format(credits)
    .replace(/[  \s]/g, " ");
}
