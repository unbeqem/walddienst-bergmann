import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export function ImagePlaceholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-2xl border border-timber-300/60 bg-gradient-to-br from-timber-100 to-linen-100 text-timber-700",
        className,
      )}
    >
      <ImageIcon size={32} strokeWidth={1.5} />
      <div className="text-center">
        <p className="font-display text-sm tracking-wide">Foto folgt</p>
        <p className="text-xs opacity-70">{label}</p>
      </div>
    </div>
  );
}
