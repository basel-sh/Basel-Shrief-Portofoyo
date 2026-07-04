import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Reveal from "@/components/ui/Reveal";
import type { Project } from "@/data/projects";

function Media({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }
  return (
    <ImagePlaceholder
      label={project.placeholder ?? `Put ${project.title} Photo Here`}
      aspect="aspect-[16/10]"
    />
  );
}

export function ProjectCardDetailed({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Reveal delay={index * 0.05}>
      <GlassCard className="group grid grid-cols-1 gap-6 overflow-hidden p-5 sm:p-7 lg:grid-cols-2 lg:gap-8">
        <Media project={project} />

        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-3">
            <p className="font-technical text-xs uppercase tracking-wider text-neon-blue">
              {project.subCategory ?? project.category.replace("-", " ")}
            </p>
            <p className="font-technical text-xs text-text-muted">{project.period}</p>
          </div>

          <h3 className="font-display mt-2 text-2xl font-semibold text-text-primary">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">{project.summary}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Badge key={t} variant="blue">
                {t}
              </Badge>
            ))}
          </div>

          <div className="mt-5 space-y-4 border-t border-border-subtle pt-5">
            {project.problem && (
              <div>
                <p className="font-technical text-[11px] uppercase tracking-wider text-signal-amber">
                  Problem
                </p>
                <p className="mt-1 text-sm leading-relaxed text-text-secondary">{project.problem}</p>
              </div>
            )}
            {project.architecture && (
              <div>
                <p className="font-technical text-[11px] uppercase tracking-wider text-neon-purple">
                  Architecture
                </p>
                <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                  {project.architecture}
                </p>
              </div>
            )}
            {project.results && (
              <div>
                <p className="font-technical text-[11px] uppercase tracking-wider text-neon-teal">
                  Results
                </p>
                <p className="mt-1 text-sm leading-relaxed text-text-secondary">{project.results}</p>
              </div>
            )}
            {project.lessons && (
              <div>
                <p className="font-technical text-[11px] uppercase tracking-wider text-neon-blue">
                  Lessons Learned
                </p>
                <p className="mt-1 text-sm leading-relaxed text-text-secondary">{project.lessons}</p>
              </div>
            )}
          </div>

          {(project.github || project.demo) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-xs font-medium text-text-primary transition-colors hover:border-neon-blue hover:text-neon-blue"
                >
                  <GithubIcon size={14} /> GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-xs font-medium text-text-primary transition-colors hover:border-neon-blue hover:text-neon-blue"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </GlassCard>
    </Reveal>
  );
}

export function ProjectCardCompact({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Reveal delay={index * 0.05}>
      <GlassCard className="group flex h-full flex-col overflow-hidden p-4">
        <Media project={project} />
        <div className="flex flex-1 flex-col p-2 pt-4">
          <div className="flex items-center justify-between gap-2">
            <p className="font-technical text-[11px] uppercase tracking-wider text-neon-blue">
              {project.subCategory ?? project.category.replace("-", " ")}
            </p>
            <p className="font-technical text-[11px] text-text-muted">{project.period}</p>
          </div>
          <h3 className="font-display mt-2 text-lg font-semibold text-text-primary">
            {project.title}
          </h3>
          <p className="mt-1.5 flex-1 text-sm leading-relaxed text-text-secondary">
            {project.summary}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
          {(project.github || project.demo) && (
            <div className="mt-4 flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-neon-blue"
                >
                  <GithubIcon size={13} /> Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-neon-blue"
                >
                  <ExternalLink size={13} /> Demo
                </a>
              )}
            </div>
          )}
        </div>
      </GlassCard>
    </Reveal>
  );
}
