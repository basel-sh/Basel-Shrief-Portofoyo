import type { Metadata } from "next";
import EmbeddedHero from "@/components/embedded/EmbeddedHero";
import ExperienceHighlight from "@/components/embedded/ExperienceHighlight";
import ProtocolGrid from "@/components/embedded/ProtocolGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import { ProjectCardDetailed } from "@/components/projects/ProjectCard";
import CTASection from "@/components/home/CTASection";
import { projectsByCategory } from "@/data/projects";

export const metadata: Metadata = {
  title: "Embedded Systems",
  description:
    "STM32/ESP32 firmware, FreeRTOS, PCB design, and telemetry systems built by Basel Shrief for racing cars, wearables, and IoT products.",
};

export default function EmbeddedPage() {
  const embeddedProjects = projectsByCategory("embedded");

  return (
    <>
      <EmbeddedHero />

      <div className="py-24">
        <ExperienceHighlight />
      </div>

      <section className="mx-auto max-w-7xl px-6 py-4 sm:px-10">
        <SectionHeading
          eyebrow="Flagship Projects"
          title="Firmware & hardware, shipped."
          description="From wearables to race-car telemetry — each project below covers the problem, the architecture, and the results."
        />
        <div className="mt-12 flex flex-col gap-8">
          {embeddedProjects.map((project, i) => (
            <ProjectCardDetailed key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      <ProtocolGrid />
      <CTASection />
    </>
  );
}
