import { distributionPartners } from "@/content/site";

/**
 * Partners appear in a dedicated strip labelled "Distributed by", in their own
 * brand colours, on a white or paper ground. Partner marks never appear inside
 * the product interface, and the product never adopts a partner's colours.
 */
export function DistributedBy() {
  return (
    <section className="bg-white px-6 py-12 text-[#1C2126] md:px-10">
      <div className="mx-auto w-full max-w-5xl">
        <p className="text-xs font-medium tracking-[0.14em] uppercase opacity-60">
          Distributed by
        </p>
        <ul className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-4">
          {distributionPartners.map((partner) => (
            <li key={partner.id} className="text-lg font-semibold">
              {partner.name}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs opacity-50">
          Placeholder. Partner marks go here in their own brand colours once the
          approved assets arrive.
        </p>
      </div>
    </section>
  );
}
