import type { Metadata } from "next";
import { PhotoSection } from "@/components/ui/PhotoSection";
import { Reveal } from "@/components/ui/Reveal";
import { ContactInfo } from "@/components/sections/kontakt/ContactInfo";
import { ContactForm } from "@/components/sections/kontakt/ContactForm";
import { kontaktBgImage } from "@/content/images";

export const metadata: Metadata = {
  title: "Kontakt | Walddienst Bergmann",
  description:
    "Kontaktieren Sie Walddienst Bergmann telefonisch, per E-Mail oder über das Kontaktformular.",
};

export default function KontaktPage() {
  return (
    <PhotoSection image={kontaktBgImage} alt="Wald bei Sonnenaufgang" overlay="bg-forest-950/60" className="min-h-[80vh] flex items-center">
      <Reveal className="mx-auto grid max-w-4xl gap-10 rounded-3xl bg-forest-950/40 p-8 ring-1 ring-linen-50/15 backdrop-blur-sm sm:p-12 md:grid-cols-2 md:gap-16">
        <ContactInfo />
        <ContactForm />
      </Reveal>
    </PhotoSection>
  );
}
