import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 sm:px-10">
      <Reveal>
        <div className="glow-border relative overflow-hidden rounded-3xl bg-gradient-to-br from-panel to-panel-2 px-8 py-16 text-center sm:px-16">
          <div className="grid-overlay pointer-events-none absolute inset-0 opacity-30" />
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-neon-blue/20 blur-[100px]" />
          <h2 className="font-display relative text-3xl font-semibold text-text-primary sm:text-4xl">
            Building the next embedded system, <span className="text-gradient">or hiring one?</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-text-secondary">
            Open to embedded software internships, PCB design collaborations, and digital design work.
          </p>
          <div className="relative mt-8 flex justify-center">
            <MagneticButton>
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple px-8 py-4 text-sm font-semibold text-void shadow-[0_0_30px_rgba(46,211,255,0.3)]"
              >
                Get In Touch
              </Link>
            </MagneticButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
