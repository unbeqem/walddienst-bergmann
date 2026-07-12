import gefahrenbaumfaellung from "@/assets/originals/cut-tree-close.jpg";
import gruenpflege from "@/assets/originals/vegetationspflege.jpg";
import mondphasenholz from "@/assets/originals/cut-tree.jpg";
import holzernte from "@/assets/originals/sawdust.jpg";
import type { StaticImageData } from "next/image";

export const serviceImages: Partial<Record<string, StaticImageData>> = {
  gefahrenbaumfaellung,
  gruenpflege,
  mondphasenholz,
  holzernte,
};

export { default as heroImage } from "@/assets/originals/green-trees.jpg";
export { default as founderImage } from "@/assets/originals/Falk-im-wald.jpg";
export { default as closingImage } from "@/assets/originals/colorfull-trees.jpg";
export { default as logoImage } from "@/assets/originals/Logo_Final_klein.jpg";
