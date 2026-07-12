"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { heroImage } from "@/content/images";
import { Button } from "@/components/ui/Button";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  return (
    <section className="relative flex h-[92vh] min-h-[560px] w-full items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={heroImage}
          alt="Wald im Morgenlicht"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/70 via-forest-950/40 to-forest-950/80" />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 text-center text-linen-50"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={item}
          className="text-xs uppercase tracking-[0.35em] text-timber-300"
        >
          Walddienst Bergmann
        </motion.p>
        <motion.h1
          variants={item}
          className="font-display text-3xl leading-snug sm:text-5xl sm:leading-tight"
        >
          „Lerne Charakter von den Bäumen, Werte von den Wurzeln und Wandel
          von den Blättern“
        </motion.h1>
        <motion.p variants={item} className="text-sm tracking-wide text-linen-100/80">
          — Tasneem Hameed
        </motion.p>
        <motion.div variants={item}>
          <Button href="#unternehmer" variant="ghost">
            Erfahren Sie mehr
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
