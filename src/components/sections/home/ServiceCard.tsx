"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import type { Service } from "@/content/services";
import { serviceImages } from "@/content/images";
import { iconMap } from "@/components/ui/icon-map";
import { IconBadge } from "@/components/ui/IconBadge";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon];
  const image = serviceImages[service.id];

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-linen-50 shadow-sm ring-1 ring-forest-900/5 hover:shadow-lg"
    >
      <div className="relative h-48 w-full">
        {image ? (
          <Image
            src={image}
            alt={service.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <ImagePlaceholder label={service.title} className="h-full w-full rounded-none" />
        )}
        <div className="absolute -bottom-7 left-6">
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <IconBadge icon={Icon} />
          </motion.div>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-10">
        <h3 className="font-display text-xl text-forest-800">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm text-ink-900/75">{service.teaser}</p>
        <Link
          href={`/leistungen#${service.id}`}
          className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-forest-600 hover:text-forest-700"
        >
          Mehr lesen
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
