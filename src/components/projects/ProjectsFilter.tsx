"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ProjectCardCompact } from "@/components/projects/ProjectCard";
import { projects, type ProjectCategory } from "@/data/projects";

const filters: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Embedded", value: "embedded" },
  { label: "Digital Design", value: "digital-design" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
];

export default function ProjectsFilter() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");
  const shown = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => {
          const isActive = active === f.value;
          return (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                isActive ? "text-void" : "text-text-secondary hover:text-text-primary"
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="filter-active"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{f.label}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((project, i) => (
          <ProjectCardCompact key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
