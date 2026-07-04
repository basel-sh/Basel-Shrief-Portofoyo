import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/projects";
import { achievements, certificates } from "@/data/achievements";

const stats = [
  { value: projects.length, suffix: "+", label: "Engineering Projects" },
  { value: achievements.length, suffix: "", label: "Competition Wins" },
  { value: certificates.length, suffix: "+", label: "Certifications" },
  { value: 2, suffix: "", label: "Countries Represented" },
];

export default function StatsStrip() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 sm:px-10 lg:grid-cols-4">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.06} className="text-center">
          <p className="font-display text-4xl font-bold text-gradient sm:text-5xl">
            <AnimatedCounter value={s.value} suffix={s.suffix} />
          </p>
          <p className="font-technical mt-2 text-xs uppercase tracking-wider text-text-muted">
            {s.label}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
