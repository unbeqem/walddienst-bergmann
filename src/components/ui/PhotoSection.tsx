import Image, { type StaticImageData } from "next/image";
import { Container } from "./Container";
import { cn } from "@/lib/cn";

export function PhotoSection({
  image,
  alt,
  overlay = "bg-forest-950/70",
  className,
  containerClassName,
  children,
}: {
  image: StaticImageData;
  alt: string;
  overlay?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={cn("relative overflow-hidden py-20 sm:py-28", className)}>
      <Image src={image} alt={alt} fill sizes="100vw" className="object-cover" />
      <div className={cn("absolute inset-0", overlay)} />
      <Container className={cn("relative z-10", containerClassName)}>
        {children}
      </Container>
    </section>
  );
}
