import { SectionPlaceholder, SectionShell } from "./section-shell";

export function Languages() {
  return (
    <SectionShell
      id="languages"
      eyebrow="Languages"
      title="All 11 official languages"
    >
      <SectionPlaceholder note="The interface asks your language first and speaks it, and the assistant answers in whichever language you write. Needs the confirmed language list and the native-name spellings before it is built." />
    </SectionShell>
  );
}
