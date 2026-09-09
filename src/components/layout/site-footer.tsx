import { Wordmark } from "@/components/brand/wordmark";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="px-6 py-14 md:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Wordmark className="text-base" />
        <div className="text-xs text-ink-faint">
          <p>{site.url.replace("https://", "")}</p>
          <p className="mt-1">
            {site.name}. Prepaid, in rand, nothing renews on its own.
          </p>
        </div>
      </div>
    </footer>
  );
}
