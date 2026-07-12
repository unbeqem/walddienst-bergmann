import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { founderImage } from "@/content/images";

export function FounderTeaser() {
  return (
    <Section id="unternehmer" tone="linen">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Reveal direction="right" className="order-2 md:order-1">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-timber-700">
            Der Unternehmer
          </p>
          <h2 className="mt-3 font-display text-3xl text-forest-800 sm:text-4xl">
            Falk Bergmann
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-900/90">
            Falk Bergmann ist bei uns der Chef im Haus. Er ist ausgebildeter
            Forstwirt und hat mit seiner Liebe zu dem Beruf 2019 sein eigenes
            Unternehmen gegründet.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-900/90">
            Besonders im Vordergrund stehen bei uns die fachgerechte
            Ausführung der Tätigkeiten und die Arbeit für und mit dem Wald.
          </p>
        </Reveal>

        <Reveal direction="left" className="order-1 md:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={founderImage}
              alt="Falk Bergmann im Wald"
              fill
              sizes="(min-width: 768px) 384px, 80vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
