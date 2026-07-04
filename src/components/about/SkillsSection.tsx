import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import { skillGroups } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 sm:px-10">
      <SectionHeading
        eyebrow="Skill Stack"
        title="Ranked by where I spend my time."
        description="Embedded software and digital/analog design sit at the top — web and mobile round things out."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.05}>
            <GlassCard className="flex h-full flex-col gap-4 p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-text-primary">
                  {group.title}
                </h3>
                <span className="font-technical text-xs text-text-muted">
                  Priority 0{group.priority}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant={group.priority <= 3 ? "blue" : "default"}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
