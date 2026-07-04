import BinaryRainCanvas from "@/components/three/BinaryRainCanvas";
import Reveal from "@/components/ui/Reveal";

export default function DigitalHero() {
  return (
    <section className="relative overflow-hidden border-b border-border-subtle pb-20 pt-36 sm:pt-44">
      <BinaryRainCanvas className="absolute inset-0 h-full w-full opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,var(--bg-void)_75%)]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-10">
        <Reveal>
          <p className="font-technical mb-4 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-neon-purple">
            <span className="h-px w-8 bg-neon-purple" /> Priority 02
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-4xl font-bold tracking-tight text-text-primary sm:text-6xl">
            Digital <span className="text-gradient">Design</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Processors built from scratch in Verilog and VHDL, down to analog IC design in Cadence
            Virtuoso — RTL, FSMs, datapaths, and silicon-level circuits.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
