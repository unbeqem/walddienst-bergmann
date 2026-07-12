import { cn } from "@/lib/cn";

export function QuoteBlock({
  quote,
  cite,
  className,
  size = "lg",
}: {
  quote: string;
  cite?: string;
  className?: string;
  size?: "lg" | "xl";
}) {
  return (
    <blockquote className={cn("text-center", className)}>
      <p
        className={cn(
          "font-display leading-snug",
          size === "xl" ? "text-3xl sm:text-5xl" : "text-2xl sm:text-3xl",
        )}
      >
        „{quote}“
      </p>
      {cite && (
        <cite className="mt-4 block font-sans text-sm not-italic tracking-wide opacity-75">
          — {cite}
        </cite>
      )}
    </blockquote>
  );
}
