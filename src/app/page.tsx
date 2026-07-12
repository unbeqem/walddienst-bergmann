import { Hero } from "@/components/sections/home/Hero";
import { FounderTeaser } from "@/components/sections/home/FounderTeaser";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { ClosingCta } from "@/components/sections/home/ClosingCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FounderTeaser />
      <ServicesOverview />
      <ClosingCta />
    </>
  );
}
