import { cn } from "@/lib/cn";
import type { LucideIcon } from "lucide-react";

export function IconBadge({
  icon: Icon,
  className,
}: {
  icon: LucideIcon;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-14 w-14 items-center justify-center rounded-full border-4 border-linen-50 bg-forest-600 text-linen-50 shadow-md",
        className,
      )}
    >
      <Icon size={24} strokeWidth={1.75} />
    </div>
  );
}
