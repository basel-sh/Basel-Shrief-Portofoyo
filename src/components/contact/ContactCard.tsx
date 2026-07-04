"use client";

import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  cta: string;
  href: string;
  download?: boolean;
  index?: number;
}

export default function ContactCard({
  icon,
  title,
  description,
  cta,
  href,
  download,
  index = 0,
}: ContactCardProps) {
  return (
    <Reveal delay={index * 0.06}>
      <MagneticButton strength={0.15} className="block h-full w-full">
        <a
          href={href}
          download={download}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="glass-panel group flex h-full flex-col justify-between gap-6 rounded-3xl p-7 transition-all duration-300 hover:border-neon-blue/40 hover:shadow-[0_0_50px_rgba(46,211,255,0.12)]"
        >
          <div className="flex items-start justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-blue/15 to-neon-purple/15 text-neon-blue">
              {icon}
            </div>
            <ArrowUpRight
              size={18}
              className="text-text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-neon-blue"
            />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-text-primary">{title}</h3>
            <p className="mt-1.5 text-sm text-text-secondary">{description}</p>
            <p className="font-technical mt-4 text-xs uppercase tracking-wider text-neon-blue">
              {cta}
            </p>
          </div>
        </a>
      </MagneticButton>
    </Reveal>
  );
}
