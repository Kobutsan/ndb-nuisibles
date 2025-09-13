import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import ProcessusIntervention from "@/components/sections/ProcessusIntervention";
import Tarifs from "@/components/sections/Tarifs";
import VeloCargo from "@/components/sections/VeloCargo";
import USPSection from "@/components/sections/USPSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <USPSection />
      <Services />
      <VeloCargo />
      <ProcessusIntervention />
      <Tarifs />
      <CTASection />
    </>
  );
}
