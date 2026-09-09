import Link from "next/link";

import { Wordmark } from "@/components/brand/wordmark";
import { contact, nav, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-16">
      <div className="container-site grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Wordmark className="text-base" />
          <p className="mt-6 max-w-xs text-base text-ink-muted">
            Prepaid AI for South Africa. Buy it like airtime. See every cost.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.14em] text-ink-muted uppercase">
            The site
          </p>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-base text-ink-muted transition-colors duration-300 ease-in-out hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.14em] text-ink-muted uppercase">
            Get in touch
          </p>
          <ul className="mt-5 space-y-3">
            <li>
              <Link
                href={contact.href}
                className="inline-flex min-h-11 items-center text-base text-ink-muted transition-colors duration-300 ease-in-out hover:text-ink"
              >
                Talk to us
              </Link>
            </li>
            <li className="text-base text-ink-muted">
              {site.url.replace("https://", "")}
            </li>
          </ul>
        </div>
      </div>

      <div className="container-site mt-16 flex flex-col gap-2 border-t border-border pt-8 text-sm text-ink-muted md:flex-row md:justify-between">
        <p>
          {site.name}. Prepaid, in rand. Nothing renews, so there is nothing to
          cancel.
        </p>
        <p>Credit is valid 30 days, the same as airtime.</p>
      </div>
    </footer>
  );
}
