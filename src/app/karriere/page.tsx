import type { Metadata } from "next";
import { PhotoSection } from "@/components/ui/PhotoSection";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { karriereBgImage } from "@/content/images";
import { ApplicationForm } from "@/components/sections/karriere/ApplicationForm";

export const metadata: Metadata = {
  title: "Karriere | Walddienst Bergmann",
  description:
    "Werden Sie Teil des Teams von Walddienst Bergmann - Kurzbewerbung als Forstwirt, in der Baumpflege oder als Maschinenführer.",
};

export default function KarrierePage() {
  return (
    <>
      <PhotoSection
        image={karriereBgImage}
        alt="Waldarbeit"
        overlay="bg-forest-950/65"
        className="pt-24 pb-16 text-center text-linen-50"
      >
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-timber-300">
            Karriere
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl">
            Werden Sie Teil unseres Teams
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-linen-100/85">
            Wir wachsen und suchen Verstärkung, die mit Herz und Fachwissen
            für den Wald arbeitet. Schicken Sie uns gerne eine kurze
            Bewerbung – den Lebenslauf reichen Sie im Anschluss per E-Mail
            nach.
          </p>
        </Reveal>
      </PhotoSection>

      <Section tone="linen">
        <Reveal className="mx-auto max-w-xl">
          <ApplicationForm />
        </Reveal>
      </Section>
    </>
  );
}
