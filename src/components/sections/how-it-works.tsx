import { SectionPlaceholder, SectionShell } from "./section-shell";

export function HowItWorks() {
  return (
    <SectionShell
      id="how-it-works"
      eyebrow="How it works"
      title="Buy a bundle, ask, see the cost"
    >
      <SectionPlaceholder note="Three steps, in the order a person actually meets them: top up like airtime, ask in your own language, watch each answer report what it drew. Needs the real screens before it is built." />
    </SectionShell>
  );
}
