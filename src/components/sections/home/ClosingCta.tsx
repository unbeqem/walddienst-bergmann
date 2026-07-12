import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { closingImage } from "@/content/images";

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden py-28 text-linen-50">
      <Image
        src={closingImage}
        alt="Bunter Wald"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-forest-950/75" />

      <Container className="relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl leading-snug sm:text-4xl">
            „Ich freue mich, Sie mit meinem Team unterstützen zu dürfen – egal
            welchen Anspruch Sie haben – um gemeinsam unsere Zukunft zu
            sichern und den Wald friedfertig und nachhaltig zu nutzen.“
          </p>
          <p className="mt-6 text-sm tracking-wide text-linen-100/80">
            Mit forstlichen Grüßen
            <br />
            Ihr Falk Bergmann
          </p>
          <div className="mt-10 flex justify-center">
            <Button href="/kontakt" variant="ghost">
              Kontaktieren Sie uns
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
