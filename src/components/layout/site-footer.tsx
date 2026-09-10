import Link from "next/link";

import { ModelLogo } from "@/components/blocks/model-logo";
import { Wordmark } from "@/components/brand/wordmark";
import { models } from "@/content/models";
import { lapseNotice, nav, site } from "@/content/site";

/**
 * The third column used to be "Get in touch" holding one line, the domain,
 * ever since the schools section it linked to came off the page. A column
 * with a single item in it reads as something broken rather than as something
 * brief, so the domain moved to the bottom bar and the models took the slot.
 * They are the strongest thing left to say at the end of the page, and they
 * repeat a claim the site already makes rather than adding a new one.
 *
 * NEEDS CONFIRMATION, the same as everywhere else the four appear: the brand
 * book names two. See `src/content/models.ts`.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-border py-16">
      <div className="container-site grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.1fr]">
        <div className="flex flex-col">
          <Wordmark className="text-lg" />
          <p className="mt-6 max-w-xs text-base text-ink-muted">
            Prepaid AI for South Africa. Buy it like airtime. See every cost.
          </p>
          <p className="mt-auto max-w-xs pt-10 text-sm text-ink-muted">
            {lapseNotice}
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs tracking-[0.14em] text-ink-muted uppercase">
            The site
          </p>
          <ul className="mt-4">
            {nav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-base text-ink-muted transition-colors duration-300 ease-in-out hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs tracking-[0.14em] text-ink-muted uppercase">
            Answers from
          </p>
          <ul className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {models.map((model) => (
              <li
                key={model.id}
                className="flex items-center gap-3 bg-card px-4 py-4"
              >
                <ModelLogo id={model.id} variant="icon" height={20} />
                <span className="text-base text-ink-muted">{model.name}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-ink-muted">
            One balance across all of them.
          </p>
        </div>
      </div>

      <div className="container-site mt-16 flex flex-col gap-2 border-t border-border pt-8 text-sm text-ink-muted md:flex-row md:justify-between">
        <p>
          {site.name}. Prepaid, in rand. Nothing renews, so there is nothing to
          cancel.
        </p>
        <p>{site.url.replace("https://", "")}</p>
      </div>
    </footer>
  );
}
