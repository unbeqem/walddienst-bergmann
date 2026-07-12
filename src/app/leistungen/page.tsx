import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { PhotoSection } from "@/components/ui/PhotoSection";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/services";
import { leistungenHeroImage } from "@/content/images";
import { ServiceDetail } from "@/components/sections/leistungen/ServiceDetail";

export const metadata: Metadata = {
  title: "Leistungen | Walddienst Bergmann",
  description:
    "Maschinen, Seilklettertechnik, Gefahrenbaumfällung, Grünpflege und Zaunbau, Mondphasenholz und Holzernte – die Leistungen von Walddienst Bergmann.",
};

export default function LeistungenPage() {
  return (
    <>
      <PhotoSection
        image={leistungenHeroImage}
        alt="Wald"
        overlay="bg-forest-950/65"
        className="pt-24 pb-16 text-center text-linen-50"
      >
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-timber-300">
            Was wir tun
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl">Leistungen</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-linen-100/85">
            Baumfällung, Baumpflege oder Heckenschnitt? Egal welchen Anspruch
            Sie haben – wir setzen Ihre Wünsche qualifiziert um.
          </p>
        </Reveal>
      </PhotoSection>

      {services.map((service, i) => (
        <ServiceDetail
          key={service.id}
          service={service}
          reversed={i % 2 === 1}
          tone={i % 2 === 0 ? "linen" : "linen-alt"}
        />
      ))}

      <Section tone="linen" className="text-center">
        <Reveal>
          <Button href="/kontakt">Kontaktieren Sie uns</Button>
        </Reveal>
      </Section>
    </>
  );
}
