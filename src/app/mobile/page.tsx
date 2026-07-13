import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";
import PhoneMockup from "@/components/mobile/PhoneMockup";
import CTASection from "@/components/home/CTASection";
import { projectsByCategory } from "@/data/projects";

export const metadata: Metadata = {
  title: "Mobile",
  description: "Mobile app connectivity work by Basel Shrief — Flutter companion apps for embedded hardware.",
};

export default function MobilePage() {
  const mobileProjects = projectsByCategory("mobile");

  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-36 text-center sm:px-10 sm:pt-44">
        <p className="font-technical mb-4 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-neon-blue">
          <span className="h-px w-8 bg-neon-blue" /> Also Building
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-text-primary sm:text-6xl">
          Mobile <span className="text-gradient">Connectivity</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
          The mobile side of my embedded systems — Flutter apps that pair with hardware over BLE
          to stream and visualize live data.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <SectionHeading eyebrow="Companion Apps" title="Hardware, in your pocket." />
        <div className="mt-14 grid grid-cols-1 gap-16 sm:grid-cols-2">
          {mobileProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center">
                <PhoneMockup label={project.subCategory ?? "Mobile App"} alt={project.title} />
                <h3 className="font-display mt-6 text-lg font-semibold text-text-primary">
                  {project.title}
                </h3>
                <p className="font-technical mt-1 text-xs text-text-muted">{project.period}</p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-secondary">
                  {project.summary}
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {project.tags.map((t) => (
                    <Badge key={t} variant="blue">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
