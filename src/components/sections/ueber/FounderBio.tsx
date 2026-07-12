import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { founderPortrait } from "@/content/images";

const paragraphs = [
  "Ich habe meine Ausbildung als Forstwirt in den Jahren 2009 bis 2012 beim Staatsbetrieb Sachsenforst erfolgreich gemeistert und wurde auch als Geselle übernommen. Da wir uns privat für einen anderen Lebensraum entschieden haben, habe ich die Anstellung im Jahr 2017 verlassen. Seit Oktober 2019 bin ich selbstständig als Forstwirt tätig.",
  "Ich liebe meinen Beruf sehr, weil ich gerne dazu beitragen möchte, dass wir wieder im Einklang mit der Natur leben und ihre Geschenke achtsam für uns nutzen.",
  "Um das zu erreichen, beschäftige ich mich viel mit der Literatur von Peter Wohlleben und Erwin Thoma. Vor allem die Ernte von Mondphasenholz interessiert mich sehr.",
  "Ich freue mich sehr darauf, auch für Sie, für Ihre Vorstellungen und Werte, dem Wald zu dienen.",
];

export function FounderBio() {
  return (
    <Section tone="linen">
      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,320px)_1fr]">
        <Reveal direction="right" className="flex justify-center md:justify-start">
          <div className="relative aspect-square w-56 overflow-hidden rounded-full shadow-xl ring-4 ring-linen-50 sm:w-64">
            <Image
              src={founderPortrait}
              alt="Falk Bergmann"
              fill
              sizes="256px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal direction="left">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-timber-700">
            Der Gründer
          </p>
          <h2 className="mt-3 font-display text-3xl text-forest-800 sm:text-4xl">
            Hallo, ich bin Falk Bergmann
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-900/90">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
