import { Hero } from "@/components/sections/home/Hero";
import { FounderTeaser } from "@/components/sections/home/FounderTeaser";
import { ServicesGrid } from "@/components/sections/home/ServicesGrid";
import { ClosingCta } from "@/components/sections/home/ClosingCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FounderTeaser />
      <ServicesGrid />
      <ClosingCta />
    </>
  );
}
