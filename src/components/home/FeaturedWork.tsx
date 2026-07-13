import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { ProjectCardCompact } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function FeaturedWork() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="mx-auto max-w-7xl px-6 py-28 sm:px-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Selected Work"
          title="Firmware, PCBs, and silicon."
          description="A sample of the embedded and digital-design projects driving real hardware — race cars, wearables, and custom ICs."
        />
        <Link
          href="/projects"
          className="group flex shrink-0 items-center gap-1.5 text-sm font-medium text-neon-blue"
        >
          View all projects
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((project, i) => (
          <ProjectCardCompact key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
