import { FileText } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { certificates } from "@/data/achievements";

export default function CertificatesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 sm:px-10">
      <SectionHeading
        eyebrow="Courses & Certifications"
        title="Always training."
        description="Training programs, sprints, and certifications completed alongside coursework."
      />
      <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, i) => (
          <Reveal key={cert.title} delay={i * 0.03}>
            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel flex items-center gap-3 rounded-xl p-4 transition-colors hover:border-neon-blue/30"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neon-blue/10 text-neon-blue">
                <FileText size={16} />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-text-primary">{cert.title}</p>
                <p className="font-technical text-xs text-text-muted">{cert.issuer}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
