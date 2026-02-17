import { Suspense } from "react";
import { ScrollScenes } from "@/components/sections/scroll-scenes";
import { PreloadScene } from "@/components/scenes/preload-scene";
import { HeroScene } from "@/components/scenes/hero-scene";
import { CoreScene } from "@/components/scenes/core-scene";
import { AgentsScene } from "@/components/scenes/agents-scene";
import { ArchitectureScene } from "@/components/scenes/architecture-scene";
import { IndustriesScene } from "@/components/scenes/industries-scene";
import { FinalScene } from "@/components/scenes/final-scene";
import { FloatingCTA } from "@/components/ui/floating-cta";
import { QaOverlay } from "@/components/scenes/qa-overlay";

export default function Home({ searchParams }: { searchParams?: { lite?: string } }) {
  const lite = searchParams?.lite === "1";

  return (
    <div className="pb-24" data-lite={lite ? "1" : "0"}>
      <PreloadScene />
      <ScrollScenes />
      <HeroScene />
      <CoreScene />
      <AgentsScene />
      <ArchitectureScene />
      <IndustriesScene />
      <FinalScene />
      <FloatingCTA />
      <Suspense fallback={null}><QaOverlay /></Suspense>
    </div>
  );
}
