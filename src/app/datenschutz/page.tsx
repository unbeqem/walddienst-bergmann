import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Walddienst Bergmann",
};

export default function DatenschutzPage() {
  return (
    <Section tone="linen" className="pt-16">
      <h1 className="font-display text-3xl text-forest-800 sm:text-4xl">
        Datenschutzerklärung
      </h1>
      <div className="mt-2 h-1 w-16 rounded-full bg-timber-600" />

      <div className="mt-10 max-w-2xl space-y-8 text-ink-900/90">
        <section>
          <h2 className="font-display text-xl text-forest-800">
            1. Verantwortlicher
          </h2>
          <p className="mt-2">
            {siteConfig.founder}
            <br />
            {siteConfig.address.street}
            <br />
            {siteConfig.address.city}
            <br />
            Telefon: {siteConfig.phone}
            <br />
            E-Mail: {siteConfig.email}
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-forest-800">
            2. Cookies und Tracking
          </h2>
          <p className="mt-2">
            Diese Website verwendet keine Analyse-, Tracking- oder
            Marketing-Cookies. Es findet keine Erfolgsmessung und keine
            Erstellung von Nutzerprofilen statt. Lediglich Ihre Zustimmung zu
            diesem Hinweis wird technisch notwendig im lokalen Speicher
            (Local Storage) Ihres Browsers vermerkt, damit der Hinweis nicht
            bei jedem Besuch erneut erscheint.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-forest-800">
            3. Hosting
          </h2>
          <p className="mt-2">
            Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf der
            Website erhebt der Hosting-Anbieter automatisch technische
            Informationen (sog. Server-Log-Files), unter anderem
            IP-Adresse, Datum und Uhrzeit des Zugriffs sowie den verwendeten
            Browser. Diese Daten dienen der technischen Bereitstellung und
            Absicherung der Website und werden nicht mit anderen
            Datenquellen zusammengeführt.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-forest-800">
            4. Kontakt- und Bewerbungsformular
          </h2>
          <p className="mt-2">
            Wenn Sie uns über das Kontakt- oder Bewerbungsformular eine
            Nachricht senden, werden die von Ihnen eingegebenen Daten (u. a.
            Name, E-Mail-Adresse, Telefonnummer, Nachricht) ausschließlich
            zur Bearbeitung Ihrer Anfrage bzw. Bewerbung verwendet und
            gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. f
            DSGVO (Vertragsanbahnung bzw. berechtigtes Interesse an der
            Beantwortung Ihrer Anfrage).
          </p>
          <p className="mt-2">
            Zur Versendung nutzen wir den Dienst EmailJS. Dabei werden die
            von Ihnen eingegebenen Formulardaten an die Server dieses
            Anbieters übermittelt und von dort an unsere E-Mail-Adresse
            weitergeleitet. Es werden keine weiteren Daten (z. B.
            Cookies) durch EmailJS auf dieser Website gesetzt.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-forest-800">
            5. Ihre Rechte
          </h2>
          <p className="mt-2">
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
            Ihre gespeicherten personenbezogenen Daten sowie ein Recht auf
            Berichtigung, Sperrung oder Löschung dieser Daten. Zudem steht
            Ihnen ein Beschwerderecht bei der zuständigen
            Aufsichtsbehörde zu. Kontaktieren Sie uns hierzu gerne unter der
            oben genannten E-Mail-Adresse.
          </p>
        </section>

        <p className="pt-6 text-sm text-ink-900/70">
          Hinweis: Dieser Text ist als Entwurf auf Basis gängiger
          Datenschutz-Vorlagen erstellt und ersetzt keine rechtliche
          Beratung. Wir empfehlen, ihn vor Veröffentlichung von einem
          Fachanwalt prüfen zu lassen.
        </p>
      </div>
    </Section>
  );
}
