import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section tone="linen" className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-display text-6xl text-forest-800">404</p>
      <h1 className="mt-4 font-display text-2xl text-forest-800">
        Diese Seite gibt es im Wald nicht
      </h1>
      <p className="mt-3 max-w-md text-ink-900/80">
        Der gesuchte Pfad führt ins Dickicht. Zurück geht es hier entlang.
      </p>
      <div className="mt-8">
        <Button href="/">Zur Startseite</Button>
      </div>
    </Section>
  );
}
