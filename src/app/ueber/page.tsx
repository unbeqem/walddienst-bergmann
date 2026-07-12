import type { Metadata } from "next";
import { TeamHero } from "@/components/sections/ueber/TeamHero";
import { FounderBio } from "@/components/sections/ueber/FounderBio";
import { Chronicle } from "@/components/sections/ueber/Chronicle";

export const metadata: Metadata = {
  title: "Über Uns | Walddienst Bergmann",
  description:
    "Lernen Sie Walddienst Bergmann kennen: Gründer Falk Bergmann, unser Team und unsere Geschichte seit 2019.",
};

export default function UeberPage() {
  return (
    <>
      <TeamHero />
      <FounderBio />
      <Chronicle />
    </>
  );
}
