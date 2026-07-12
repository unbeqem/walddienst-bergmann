import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ContactInfo } from "@/components/sections/kontakt/ContactInfo";
import { ContactForm } from "@/components/sections/kontakt/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt | Walddienst Bergmann",
  description:
    "Kontaktieren Sie Walddienst Bergmann telefonisch, per E-Mail oder über das Kontaktformular.",
};

export default function KontaktPage() {
  return (
    <Section tone="forest" className="pt-16">
      <Reveal className="mx-auto grid max-w-4xl gap-10 rounded-3xl bg-forest-800/50 p-8 ring-1 ring-linen-50/10 sm:p-12 md:grid-cols-2 md:gap-16">
        <ContactInfo />
        <ContactForm />
      </Reveal>
    </Section>
  );
}
