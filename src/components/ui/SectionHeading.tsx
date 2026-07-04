import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center mx-auto", "max-w-2xl", className)}>
      {eyebrow && (
        <Reveal>
          <p className="font-technical mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-neon-blue">
            <span className="h-px w-8 bg-neon-blue" />
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
