import Image from "next/image";
import type { Service } from "@/content/services";
import { serviceImages } from "@/content/images";
import { iconMap } from "@/components/ui/icon-map";
import { IconBadge } from "@/components/ui/IconBadge";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function ServiceDetail({
  service,
  reversed,
  tone,
}: {
  service: Service;
  reversed: boolean;
  tone: "linen" | "linen-alt";
}) {
  const Icon = iconMap[service.icon];
  const image = serviceImages[service.id];

  return (
    <Section id={service.id} tone={tone} className="py-16 sm:py-20">
      <div
        className={`grid items-center gap-12 md:grid-cols-2 ${
          reversed ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal direction={reversed ? "left" : "right"}>
          <IconBadge icon={Icon} className="static h-12 w-12 border-0 shadow-none" />
          <h2 className="mt-5 font-display text-2xl text-forest-800 sm:text-3xl">
            {service.title}
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-900/90">
            {service.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal direction={reversed ? "right" : "left"}>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl shadow-xl">
            {image ? (
              <Image
                src={image}
                alt={service.title}
                fill
                sizes="(min-width: 768px) 448px, 90vw"
                className="object-cover"
              />
            ) : (
              <ImagePlaceholder label={service.title} className="h-full w-full rounded-3xl" />
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
