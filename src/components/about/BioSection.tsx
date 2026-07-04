import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export default function BioSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 sm:px-10">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal direction="left">
          <GlassCard className="glow-border mx-auto max-w-sm p-3 sm:p-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
              <Image
                src="/assets/images/me/basel-shrief.jpg"
                alt="Basel Shrief"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 400px"
              />
            </div>
          </GlassCard>
        </Reveal>

        <div>
          <SectionHeading eyebrow="Who I Am" title="Engineer, first and always." />
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-text-secondary">{profile.bio}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { label: "University", value: "Cairo University" },
                { label: "Major", value: "Electronics & Comm. Eng." },
                { label: "GPA", value: profile.university.gpa.split(" ")[0] },
                { label: "Location", value: profile.location },
                { label: "Languages", value: "Arabic · English" },
                { label: "Focus", value: "Embedded & Digital Design" },
              ].map((fact) => (
                <div key={fact.label} className="rounded-xl border border-border-subtle p-3">
                  <p className="font-technical text-[10px] uppercase tracking-wider text-text-muted">
                    {fact.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-text-primary">{fact.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
