import type { Metadata } from "next";
import DigitalHero from "@/components/digital/DigitalHero";
import ConceptsGrid from "@/components/digital/ConceptsGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import { ProjectCardDetailed, ProjectCardCompact } from "@/components/projects/ProjectCard";
import CTASection from "@/components/home/CTASection";
import { projectsByCategory } from "@/data/projects";

export const metadata: Metadata = {
  title: "Digital Design",
  description:
    "Verilog, VHDL, RISC-V processor design, and analog IC design in Cadence Virtuoso by Basel Shrief.",
};

export default function DigitalDesignPage() {
  const digitalProjects = projectsByCategory("digital-design");
  const processors = digitalProjects.filter((p) => p.subCategory === "Processor Design");
  const rest = digitalProjects.filter((p) => p.subCategory !== "Processor Design");

  return (
    <>
      <DigitalHero />

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
        <SectionHeading
          eyebrow="Processor Design"
          title="Built from the ground up."
          description="Full single-cycle processors — datapath, control unit, and memory — verified in simulation and synthesized for FPGA."
        />
        <div className="mt-12 flex flex-col gap-8">
          {processors.map((project, i) => (
            <ProjectCardDetailed key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 sm:px-10">
        <SectionHeading
          eyebrow="RTL & Analog IC Design"
          title="Protocols, dividers, and regulators."
          description="Communication-protocol RTL modules alongside transistor-level analog IC design in Cadence Virtuoso."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <ProjectCardCompact key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      <ConceptsGrid />
      <CTASection />
    </>
  );
}
