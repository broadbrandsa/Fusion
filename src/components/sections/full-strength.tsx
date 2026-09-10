import type { ReactNode } from "react";

import { EyeOff, ShieldOff, Smartphone, Trash2 } from "lucide-react";
import Image from "next/image";

import { ListCard } from "@/components/blocks/app-screens";
import { AppShot } from "@/components/blocks/app-shot";
import { CollectionOrbit } from "@/components/blocks/collection-orbit";
import { ModelLogo } from "@/components/blocks/model-logo";
import { photos, type PhotoName } from "@/components/blocks/photo";
import { Reveal } from "@/components/blocks/reveal";
import { models } from "@/content/models";

import { SectionShell } from "./section-shell";

/**
 * Four privacy claims. Each gets a mark, because four short statements in a
 * ruled list read as small print however seriously they are meant, and a
 * line icon gives the eye a way in without adding a word. Lucide throughout,
 * one stroke weight, decorative and hidden from assistive tech: the heading
 * beside each icon already says what the icon says.
 */
const privacyClaims = [
  {
    icon: EyeOff,
    title: "Private chats vanish",
    note: "Kept nowhere. Erased when ended.",
  },
  {
    icon: ShieldOff,
    title: "Never used for training",
    note: "Your work stays yours.",
  },
  {
    icon: Trash2,
    title: "Deletion you can see",
    note: "In Settings, in plain language.",
  },
  {
    icon: Smartphone,
    title: "Receipts stay on your phone",
    note: "We keep less than we could.",
  },
] as const;

function BentoCard({
  title,
  body,
  children,
  className,
  delay = 0,
  photo,
  scrim = [0.93, 0.9],
}: {
  title: string;
  body: string;
  children?: ReactNode;
  className?: string;
  delay?: number;
  /** Fills the card behind its contents rather than sitting inside it. */
  photo?: PhotoName;
  /** Scrim opacity, top and bottom. Set per photograph from its luminance. */
  scrim?: [number, number];
}) {
  return (
    <Reveal delay={delay} className={className}>
      <div
        className={
          photo
            ? "hover-lift relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 p-8"
            : "hover-lift flex h-full flex-col rounded-2xl border border-border bg-card p-8"
        }
      >
        {photo ? (
          <>
            <Image
              src={photos[photo].src}
              alt=""
              fill
              sizes="(min-width: 1024px) 440px, 100vw"
              className="-z-10 object-cover saturate-[0.78]"
            />
            {/* Set from each photograph's 99th-percentile luminance, because
                text now runs the full height of these cards. Kitchen is the
                brighter at 0.889 and needs 0.90 even at its lightest point to
                hold 5.02:1; friends-tea is 0.695 and clears it at 0.86. */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10"
              style={{
                background: `linear-gradient(to bottom, rgba(18,21,26,${scrim[0]}) 0%, rgba(18,21,26,${scrim[1]}) 100%)`,
              }}
            />
          </>
        ) : null}
        <p className={photo ? "card-title text-on-image" : "card-title"}>
          {title}
        </p>
        <p
          className={
            photo
              ? "mt-3 text-base text-on-image-muted"
              : "mt-3 text-base text-ink-muted"
          }
        >
          {body}
        </p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </Reveal>
  );
}

/**
 * The bento grid, the pattern all three references lean on hardest, with real
 * interface inside each card. Its job is one thing: killing the suspicion that
 * prepaid means a cut-down product.
 */
export function FullStrength() {
  return (
    <SectionShell
      id="full-strength"
      tone="paper"
      eyebrow="Full strength"
      title="Not a lite version of anything"
      lede="Prepaid is how you pay. It is not what you get."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <BentoCard
          title="Every model, one wallet"
          body="Pick the right one per question. One balance either way."
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {models.map((model) => (
              <div
                key={model.id}
                className="flex items-center gap-4 rounded-xl border border-border bg-surface-high/40 px-5 py-4"
              >
                <ModelLogo id={model.id} variant="icon" height={24} />
                <span>
                  <span className="block text-base text-ink">{model.name}</span>
                  <span className="block text-sm text-ink-muted">
                    {model.note}
                  </span>
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base text-ink-muted">
            Plus web search, photos, documents, decks, deep research and
            shopping in rand.
          </p>
        </BentoCard>

        <BentoCard
          delay={100}
          photo="kitchenCooking"
          title="Lists it fills for you"
          body="Ask for a week of dinners. Seventeen items come back specified."
        >
          <ListCard />
        </BentoCard>

        {/* Privacy moved in here on 10 September 2026, swapping places with
            the built-for-here stats, which went out to the section this used
            to occupy.

            It earns the closing slot better than the stats did. The grid's
            job is killing the suspicion that prepaid means a cut-down
            product, and "we keep less than we could" is the last and
            strongest thing to say about that. Full width, because four
            claims need the room and an odd fifth card would leave a hole. */}
        <BentoCard
          delay={60}
          className="lg:col-span-2"
          title="What happens here stays here"
          body="All four are how the product is built, not undertakings we are asking you to trust."
        >
          <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 xl:grid-cols-4">
            {privacyClaims.map(({ icon: Icon, title, note }) => (
              <div
                key={title}
                className="flex h-full flex-col bg-card p-6 transition-colors duration-300 ease-in-out hover:bg-surface-high/60"
              >
                <span
                  aria-hidden="true"
                  className="grid size-10 place-items-center rounded-lg border border-border text-ink"
                >
                  <Icon className="size-[18px]" strokeWidth={1.75} />
                </span>
                <dt className="card-title mt-5">{title}</dt>
                <dd className="mt-2 text-base text-ink-muted">{note}</dd>
              </div>
            ))}
          </dl>
        </BentoCard>

        <BentoCard
          delay={140}
          photo="friendsTea"
          scrim={[0.9, 0.86]}
          title="Ask together, split the cost"
          body="Up to five people, one answer, and the cost split between whoever pays. Or hand it a game and let it referee."
        >
          <div className="grid items-start gap-8 xl:grid-cols-2">
            <div>
              <AppShot
                shot="sharedChat"
                width={280}
                className="mx-auto max-w-[11.5rem]"
              />
              <p className="mt-5 text-center text-sm text-on-image-muted">
                Shared from the moment it starts, or never.
              </p>
            </div>
            <div>
              <AppShot
                shot="games"
                width={280}
                className="mx-auto max-w-[11.5rem]"
              />
              <p className="mt-5 text-center text-sm text-on-image-muted">
                Quiz Night, Twenty Questions, Stop the Bus, The Court.
              </p>
            </div>
          </div>
        </BentoCard>

        <BentoCard
          delay={200}
          title="Nothing gets lost"
          body="Everything the app makes for you, kept where you left it."
        >
          <CollectionOrbit />
        </BentoCard>
      </div>
    </SectionShell>
  );
}
