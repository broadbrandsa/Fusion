import { SectionPlaceholder, SectionShell } from "./section-shell";

export function Faq() {
  return (
    <SectionShell id="faq" eyebrow="Questions" title="The things people ask first">
      <SectionPlaceholder note="Accordion of the questions support actually receives. Needs the real question list from support logs, not guesses." />
    </SectionShell>
  );
}
