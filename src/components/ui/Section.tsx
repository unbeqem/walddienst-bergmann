import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Tone = "linen" | "linen-alt" | "forest" | "transparent";

const toneClasses: Record<Tone, string> = {
  linen: "bg-linen-50 text-ink-900",
  "linen-alt": "bg-linen-100 text-ink-900",
  forest: "bg-forest-950 text-linen-50",
  transparent: "",
};

export function Section({
  id,
  tone = "transparent",
  className,
  containerClassName,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("py-20 sm:py-28 scroll-mt-24", toneClasses[tone], className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
