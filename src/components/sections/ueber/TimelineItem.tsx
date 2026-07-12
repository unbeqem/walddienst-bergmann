"use client";

import { motion } from "framer-motion";
import type { ChronicleEntry } from "@/content/chronicle";
import { cn } from "@/lib/cn";

export function TimelineItem({
  entry,
  side,
}: {
  entry: ChronicleEntry;
  side: "left" | "right";
}) {
  const isRight = side === "right";

  return (
    <div
      className={cn(
        "relative mb-14 pl-16 md:mb-20 md:pl-0",
        "md:grid md:grid-cols-2 md:gap-10",
      )}
    >
      <motion.div
        className="absolute left-[22px] top-1 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-linen-50 bg-timber-600 shadow md:left-1/2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      />

      <motion.div
        className={cn(
          "rounded-2xl bg-linen-50 p-6 shadow-sm ring-1 ring-forest-900/5 sm:p-8",
          isRight ? "md:col-start-2" : "md:col-start-1 md:row-start-1 md:text-right",
        )}
        initial={{ opacity: 0, x: isRight ? 32 : -32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="font-display text-3xl text-forest-600">{entry.year}</p>
        <p className="mt-3 leading-relaxed text-ink-900/85">{entry.text}</p>
      </motion.div>
    </div>
  );
}
