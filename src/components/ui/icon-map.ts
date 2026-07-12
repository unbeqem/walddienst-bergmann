import { Tractor, Cable, Axe, Sprout, Moon, Logs, type LucideIcon } from "lucide-react";
import type { Service } from "@/content/services";

export const iconMap: Record<Service["icon"], LucideIcon> = {
  tractor: Tractor,
  cable: Cable,
  axe: Axe,
  sprout: Sprout,
  moon: Moon,
  logs: Logs,
};
