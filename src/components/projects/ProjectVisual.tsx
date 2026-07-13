import { Cpu, Layers, Globe, Smartphone, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project, ProjectCategory } from "@/data/projects";

const categoryIcon: Record<ProjectCategory, LucideIcon> = {
  embedded: Cpu,
  "digital-design": Layers,
  web: Globe,
  mobile: Smartphone,
};

const categoryLabel: Record<ProjectCategory, string> = {
  embedded: "Embedded Systems",
  "digital-design": "Digital Design",
  web: "Web",
  mobile: "Mobile",
};

// Category-styled schematic card shown in place of a photo — every project
// gets a consistent, intentional look instead of a "photo needed" placeholder.
export default function ProjectVisual({
  project,
  aspect = "aspect-[16/10]",
  className,
}: {
  project: Project;
  aspect?: string;
  className?: string;
}) {
  const Icon = categoryIcon[project.category];

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-border-subtle bg-gradient-to-br from-panel to-panel-2",
        aspect,
        className
      )}
    >
      <div className="grid-overlay absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(46,211,255,0.14),transparent_55%),radial-gradient(circle_at_78%_82%,rgba(168,85,247,0.14),transparent_55%)]" />

      <span className="absolute left-3 top-3 h-4 w-4 border-l border-t border-neon-blue/40" aria-hidden="true" />
      <span className="absolute right-3 top-3 h-4 w-4 border-r border-t border-neon-purple/40" aria-hidden="true" />
      <span className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-neon-purple/40" aria-hidden="true" />
      <span className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-neon-blue/40" aria-hidden="true" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-3 px-4 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-blue/15 to-neon-purple/15 text-neon-blue shadow-[0_0_30px_rgba(46,211,255,0.15)]">
          <Icon size={26} strokeWidth={1.5} />
        </div>
        <p className="font-technical text-[11px] uppercase tracking-[0.2em] text-text-muted">
          {project.subCategory ?? categoryLabel[project.category]}
        </p>
      </div>
    </div>
  );
}
