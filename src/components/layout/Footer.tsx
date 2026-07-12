import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig, footerServices } from "@/content/site";
import { logoImage } from "@/content/images";

export function Footer() {
  return (
    <footer className="bg-forest-950 text-linen-50">
      <Container className="grid gap-12 py-16 sm:grid-cols-3">
        <div className="text-center sm:text-left">
          <Image
            src={logoImage}
            alt="Walddienst Bergmann"
            className="mx-auto h-20 w-20 rounded-full object-cover sm:mx-0"
          />
          <p className="mt-4 font-display text-lg">{siteConfig.tagline}</p>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="font-display text-lg tracking-wide text-timber-300">
            Leistungen
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-linen-100/90">
            {footerServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h3 className="font-display text-lg tracking-wide text-timber-300">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-linen-100/90">
            <li className="flex items-center justify-center gap-2 sm:justify-start">
              <Phone size={16} /> {siteConfig.phone}
            </li>
            <li className="flex items-center justify-center gap-2 sm:justify-start">
              <Mail size={16} /> {siteConfig.email}
            </li>
          </ul>
          <Button href="/kontakt" variant="secondary" className="mt-6" withArrow={false}>
            Kontakt
          </Button>
        </div>
      </Container>

      <div className="border-t border-linen-50/10 py-6 text-center text-xs text-linen-100/70">
        <Container className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-8">
          <Link href="/impressum" className="hover:text-linen-50">
            Impressum
          </Link>
          <span>Copyright {new Date().getFullYear()}</span>
          <span>Made by Tristan Keick</span>
        </Container>
      </div>
    </footer>
  );
}
