import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

export interface TimelineEntry {
  period: string;
  title: ReactNode;
  subtitle?: string;
  description?: ReactNode;
  badge?: string;
}

export default function Timeline({
  entries,
  accent = "blue",
}: {
  entries: TimelineEntry[];
  accent?: "blue" | "purple";
}) {
  const dot = accent === "blue" ? "bg-neon-blue" : "bg-neon-purple";
  const line = accent === "blue" ? "from-neon-blue/60" : "from-neon-purple/60";

  return (
    <div className="relative pl-8">
      <div
        className={cn(
          "absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b to-transparent",
          line
        )}
      />
      <div className="flex flex-col gap-10">
        {entries.map((entry, i) => (
          <Reveal key={i} delay={i * 0.04}>
            <div className="relative">
              <span
                className={cn(
                  "absolute -left-[35px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-void",
                  dot
                )}
              />
              <p className="font-technical text-xs uppercase tracking-wider text-text-muted">
                {entry.period}
              </p>
              <h3 className="font-display mt-1.5 text-lg font-semibold text-text-primary sm:text-xl">
                {entry.title}
              </h3>
              {entry.subtitle && (
                <p className="mt-0.5 text-sm font-medium text-neon-blue">{entry.subtitle}</p>
              )}
              {entry.description && (
                <div className="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary">
                  {entry.description}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
