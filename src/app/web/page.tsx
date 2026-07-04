import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import { ProjectCardCompact } from "@/components/projects/ProjectCard";
import CTASection from "@/components/home/CTASection";
import { projectsByCategory } from "@/data/projects";

export const metadata: Metadata = {
  title: "Web Development",
  description: "Web projects by Basel Shrief — secondary to embedded systems, but built with care.",
};

export default function WebPage() {
  const webProjects = projectsByCategory("web");

  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-36 text-center sm:px-10 sm:pt-44">
        <p className="font-technical mb-4 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-neon-blue">
          <span className="h-px w-8 bg-neon-blue" /> Also Building
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-text-primary sm:text-6xl">
          Web <span className="text-gradient">Development</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
          Not my main identity, but a craft I keep sharp — React, Next.js, and full-stack builds,
          including this portfolio itself.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <SectionHeading eyebrow="Web Projects" title="Sites &amp; web apps." />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {webProjects.map((project, i) => (
            <ProjectCardCompact key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
