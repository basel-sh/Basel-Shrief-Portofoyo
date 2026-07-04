import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import CategoryTiles from "@/components/projects/CategoryTiles";
import ProjectsFilter from "@/components/projects/ProjectsFilter";
import CTASection from "@/components/home/CTASection";
import { otherWork } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "All engineering projects by Basel Shrief — embedded systems, digital design, web, and mobile.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-36 sm:px-10 sm:pt-44">
        <SectionHeading
          eyebrow="Everything I've Built"
          title="All projects."
          description="Firmware, PCBs, silicon, and the occasional website — organized by discipline."
        />
        <div className="mt-12">
          <CategoryTiles />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <ProjectsFilter />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <SectionHeading eyebrow="Also Worth Mentioning" title="Other engineering work." />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {otherWork.map((work, i) => (
            <Reveal key={work.title} delay={i * 0.05}>
              <GlassCard className="p-6">
                <p className="font-technical text-xs text-text-muted">{work.period}</p>
                <h3 className="font-display mt-2 text-lg font-semibold text-text-primary">
                  {work.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{work.summary}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
