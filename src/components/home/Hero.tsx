"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import CircuitCanvas from "@/components/three/CircuitCanvas";
import MagneticButton from "@/components/ui/MagneticButton";
import TypingRoles from "./TypingRoles";
import { profile } from "@/data/profile";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 20 });
  const springY = useSpring(my, { stiffness: 60, damping: 20 });
  const chipX = useTransform(springX, (v) => v * 18);
  const chipY = useTransform(springY, (v) => v * 18);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-void"
    >
      <CircuitCanvas className="absolute inset-0 h-full w-full" />
      <div className="grid-overlay absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--bg-void)_78%)]" />

      <motion.div
        style={{ x: chipX, y: chipY }}
        className="pointer-events-none absolute right-[8%] top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-3xl border border-neon-blue/25 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 shadow-[0_0_120px_rgba(46,211,255,0.15)] lg:block"
        aria-hidden="true"
      >
        <div className="absolute inset-6 rounded-2xl border border-dashed border-neon-blue/30" />
        <div className="absolute inset-12 grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse-glow rounded-sm bg-neon-blue/40"
              style={{ animationDelay: `${i * 0.25}s` }}
            />
          ))}
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-technical mb-5 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-neon-blue sm:text-sm"
        >
          <span className="h-px w-10 bg-neon-blue" />
          Electronics &amp; Communication Engineering · Cairo University
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-text-primary sm:text-7xl lg:text-8xl"
        >
          Basel <span className="text-gradient">Shrief</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display mt-4 min-h-[2.5em] text-2xl font-medium text-text-secondary sm:text-3xl lg:text-4xl"
        >
          <TypingRoles roles={profile.titles} />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <MagneticButton>
            <Link
              href="/projects"
              className="glow-border relative flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple px-7 py-3.5 text-sm font-semibold text-void shadow-[0_0_30px_rgba(46,211,255,0.3)] transition-transform"
            >
              Explore My Work
            </Link>
          </MagneticButton>
          <MagneticButton>
            <a
              href={profile.resumeGeneralHref}
              download
              className="flex items-center gap-2 rounded-full border border-border-strong px-7 py-3.5 text-sm font-semibold text-text-primary transition-colors hover:border-neon-blue hover:text-neon-blue"
            >
              Download CV
            </a>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 flex items-center gap-4"
        >
          {[
            { icon: GithubIcon, href: profile.github },
            { icon: LinkedinIcon, href: profile.linkedin },
            { icon: Mail, href: profile.emailHref },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-text-secondary transition-colors hover:border-neon-blue hover:text-neon-blue"
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-text-muted"
      >
        <span className="font-technical text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
