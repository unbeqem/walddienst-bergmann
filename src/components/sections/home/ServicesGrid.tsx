import { Section } from "@/components/ui/Section";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/services";
import { ServiceCard } from "./ServiceCard";

export function ServicesGrid() {
  return (
    <Section id="leistungen" tone="linen-alt">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-timber-600">
          Was wir tun
        </p>
        <h2 className="mt-3 font-display text-3xl text-forest-800 sm:text-4xl">
          Leistungen
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-ink-900/85">
          Baumfällung, Baumpflege oder Heckenschnitt? Egal welchen Anspruch
          Sie haben – wir setzen Ihre Wünsche qualifiziert um.
        </p>
      </Reveal>

      <RevealGroup className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </RevealGroup>

      <Reveal className="mt-16 flex justify-center">
        <Button href="/kontakt">Kontaktieren Sie uns</Button>
      </Reveal>
    </Section>
  );
}
