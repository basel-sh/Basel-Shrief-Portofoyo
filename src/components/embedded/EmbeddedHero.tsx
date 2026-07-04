import CircuitCanvas from "@/components/three/CircuitCanvas";
import Reveal from "@/components/ui/Reveal";

export default function EmbeddedHero() {
  return (
    <section className="relative overflow-hidden border-b border-border-subtle pb-20 pt-36 sm:pt-44">
      <CircuitCanvas className="absolute inset-0 h-full w-full opacity-60" />
      <div className="grid-overlay absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,var(--bg-void)_75%)]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-10">
        <Reveal>
          <p className="font-technical mb-4 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-neon-blue">
            <span className="h-px w-8 bg-neon-blue" /> Priority 01
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-4xl font-bold tracking-tight text-text-primary sm:text-6xl">
            Embedded <span className="text-gradient">Systems</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            STM32 and ESP32 firmware, FreeRTOS, PCB design, and telemetry systems built for real
            racing cars, wearables, and IoT products — where C, communication protocols, and
            hardware meet.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
