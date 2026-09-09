import { SectionPlaceholder, SectionShell } from "./section-shell";

export function Privacy() {
  return (
    <SectionShell
      id="privacy"
      eyebrow="Privacy"
      title="Private chats that leave nothing behind"
    >
      <SectionPlaceholder note="Kept nowhere, never used for training, erased when ended, enforced on the server rather than promised in a policy. Needs sign-off on how much of the server-side enforcement can be described publicly." />
    </SectionShell>
  );
}
