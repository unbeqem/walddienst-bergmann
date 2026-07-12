"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/services";
import { iconMap } from "@/components/ui/icon-map";

export function ServicesOverview() {
  return (
    <Section id="leistungen" tone="linen-alt">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-timber-700">
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

      <RevealGroup className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-4">
        {services.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <Link
                href={`/leistungen#${service.id}`}
                className="group flex items-center gap-3 rounded-full bg-linen-50 py-3 pl-3 pr-6 shadow-sm ring-1 ring-forest-900/5 transition-shadow hover:shadow-md"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-600 text-linen-50 transition-transform group-hover:scale-105">
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <span className="font-medium text-forest-800">{service.title}</span>
              </Link>
            </motion.div>
          );
        })}
      </RevealGroup>

      <Reveal className="mt-14 flex flex-wrap justify-center gap-4">
        <Button href="/leistungen">Alle Leistungen entdecken</Button>
        <Button href="/kontakt" variant="secondary">
          Kontaktieren Sie uns
        </Button>
      </Reveal>

      <Reveal className="mt-6 text-center">
        <Link
          href="/karriere"
          className="text-sm font-medium text-forest-700 underline underline-offset-4 hover:text-forest-800"
        >
          Wir suchen Verstärkung – zur Kurzbewerbung
        </Link>
      </Reveal>
    </Section>
  );
}
