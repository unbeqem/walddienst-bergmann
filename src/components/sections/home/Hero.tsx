"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { founderPortrait } from "@/content/images";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  return (
    <section className="bg-linen-50 pb-16 pt-10 sm:pt-16">
      <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <motion.div
          className="order-2 md:order-1"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={item}
            className="text-sm font-medium uppercase tracking-[0.25em] text-timber-700"
          >
            Walddienst Bergmann
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-4 font-display text-3xl leading-snug text-forest-800 sm:text-5xl sm:leading-tight"
          >
            Ihr Forstwirt aus Neukirch
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-md text-lg leading-relaxed text-ink-900/85">
            Fachgerechte Baumpflege, sichere Fällungen und moderne Technik –
            für einen Wald, der auch morgen noch trägt.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <Button href="/leistungen">Leistungen entdecken</Button>
            <Button href="/kontakt" variant="secondary">
              Kontakt aufnehmen
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={founderPortrait}
              alt="Falk Bergmann"
              fill
              priority
              sizes="(min-width: 768px) 384px, 80vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
