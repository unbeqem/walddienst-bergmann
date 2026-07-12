"use client";

import { motion } from "framer-motion";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function TeamHero() {
  return (
    <section className="relative flex h-[70vh] min-h-[420px] w-full items-end overflow-hidden bg-forest-950">
      <ImagePlaceholder
        label="Team Walddienst Bergmann"
        className="absolute inset-0 h-full w-full rounded-none border-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/20 to-transparent" />

      <motion.div
        className="relative z-10 w-full pb-14 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="font-display text-3xl tracking-[0.15em] text-linen-50 sm:text-4xl">
          #TEAMBERGMANN
        </p>
      </motion.div>
    </section>
  );
}
