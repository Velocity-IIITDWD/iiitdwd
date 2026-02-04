"use client";

import AdditionalFacilities from "./components/AdditionalFacilities";
import BlockNavigation from "./components/BlockNavigation";
import BlockSection from "./components/BlockSection";
import HeroSection from "./components/HeroSection";
import RollingStats from "./components/RollingStats";
import { blocksData } from "./data/amenitiesData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <RollingStats />
      <BlockNavigation />

      {blocksData.map((block, index) => (
        <BlockSection key={block.id} block={block} index={index} />
      ))}

      <AdditionalFacilities />
    </div>
  );
};

export default Index;
