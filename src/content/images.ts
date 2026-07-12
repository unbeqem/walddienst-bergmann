import gefahrenbaumfaellung from "@/assets/images/gefahrenbaumfaellung.jpg";
import gruenpflege from "@/assets/images/gruenpflege.jpg";
import mondphasenholz from "@/assets/images/mondphasenholz.jpg";
import holzernte from "@/assets/images/holzernte.jpg";
import type { StaticImageData } from "next/image";

export const serviceImages: Partial<Record<string, StaticImageData>> = {
  gefahrenbaumfaellung,
  gruenpflege,
  mondphasenholz,
  holzernte,
};

export { default as heroImage } from "@/assets/images/hero.jpg";
export { default as founderImage } from "@/assets/images/founder-teaser.jpg";
export { default as founderPortrait } from "@/assets/images/founder-portrait.jpg";
export { default as closingImage } from "@/assets/images/closing-cta.jpg";
export { default as logoImage } from "@/assets/images/logo-walddienst-web.jpg";
export { default as leistungenHeroImage } from "@/assets/images/leistungen-hero.jpg";
export { default as kontaktBgImage } from "@/assets/images/kontakt-bg.jpg";
export { default as karriereBgImage } from "@/assets/images/karriere-bg.jpg";
