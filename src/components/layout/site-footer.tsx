import Link from "next/link";

import { Wordmark } from "@/components/brand/wordmark";
import { contact, nav, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-14 md:px-8">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Wordmark className="text-base" />
          <p className="mt-5 max-w-xs text-sm text-ink-muted">
            Prepaid AI for South Africa. Buy a bundle like airtime, ask in your
            own language, and see what every answer cost.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.14em] text-ink-faint uppercase">
            The site
          </p>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.14em] text-ink-faint uppercase">
            Get in touch
          </p>
          <ul className="mt-5 space-y-3">
            <li>
              <Link
                href={contact.href}
                className="text-sm text-ink-muted transition-colors hover:text-ink"
              >
                Talk to us
              </Link>
            </li>
            <li className="text-sm text-ink-muted">
              {site.url.replace("https://", "")}
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex w-full max-w-[1200px] flex-col gap-2 border-t border-border pt-7 text-xs text-ink-faint md:flex-row md:justify-between">
        <p>
          {site.name}. Prepaid, in rand. Nothing renews, so there is nothing to
          cancel.
        </p>
        <p>Credit is valid 30 days, the same as airtime.</p>
      </div>
    </footer>
  );
}
