"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { chronicle } from "@/content/chronicle";
import { TimelineItem } from "./TimelineItem";

export function Chronicle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 60%"],
  });

  return (
    <Section tone="linen-alt">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-timber-600">
          Chronik
        </p>
        <h2 className="mt-3 font-display text-3xl text-forest-800 sm:text-4xl">
          Unsere Geschichte
        </h2>
      </Reveal>

      <div ref={containerRef} className="relative mx-auto mt-16 max-w-4xl">
        <div className="absolute left-6 top-0 h-full w-px bg-forest-800/10 md:left-1/2" />
        <motion.div
          className="absolute left-6 top-0 w-px origin-top bg-timber-600 md:left-1/2"
          style={{ scaleY: scrollYProgress, height: "100%" }}
        />

        {chronicle.map((entry, i) => (
          <TimelineItem
            key={entry.year}
            entry={entry}
            side={i % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </Section>
  );
}
