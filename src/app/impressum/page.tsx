import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Impressum | Walddienst Bergmann",
};

export default function ImpressumPage() {
  return (
    <Section tone="linen" className="pt-16">
      <h1 className="font-display text-3xl text-forest-800 sm:text-4xl">
        Impressum
      </h1>
      <div className="mt-2 h-1 w-16 rounded-full bg-timber-600" />

      <div className="mt-10 space-y-1 text-lg">
        <p>{siteConfig.founder}</p>
        <p>{siteConfig.address.street}</p>
        <p>{siteConfig.address.city}</p>
      </div>

      <h2 className="mt-10 font-display text-2xl text-forest-800">Kontakt</h2>
      <div className="mt-2 space-y-1 text-lg">
        <p>Telefon: {siteConfig.phone}</p>
        <p>E-Mail: {siteConfig.email}</p>
      </div>

      <p className="mt-10 text-sm text-ink-900/70">
        Quelle:{" "}
        <a
          className="text-forest-600 underline underline-offset-2"
          href="https://www.e-recht24.de/impressum-generator.html"
        >
          https://www.e-recht24.de/impressum-generator.html
        </a>
      </p>
    </Section>
  );
}
