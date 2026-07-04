import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";
import { experience } from "@/data/experience";

export default function ExperienceHighlight() {
  const sparrow = experience[0];

  return (
    <section className="mx-auto max-w-7xl px-6 sm:px-10">
      <Reveal>
        <div className="glow-border relative overflow-hidden rounded-3xl bg-gradient-to-br from-panel to-panel-2 p-8 sm:p-12">
          <div className="grid-overlay pointer-events-none absolute inset-0 opacity-20" />
          <p className="font-technical relative text-xs uppercase tracking-[0.25em] text-neon-teal">
            Currently — {sparrow.period}
          </p>
          <h2 className="font-display relative mt-3 text-2xl font-semibold text-text-primary sm:text-3xl">
            {sparrow.role} <span className="text-text-secondary">@ {sparrow.org}</span>
          </h2>
          <p className="relative mt-4 max-w-3xl text-sm leading-relaxed text-text-secondary sm:text-base">
            {sparrow.description}
          </p>
          <div className="relative mt-6 flex flex-wrap gap-2">
            {sparrow.tags.map((t) => (
              <Badge key={t} variant="blue">
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
