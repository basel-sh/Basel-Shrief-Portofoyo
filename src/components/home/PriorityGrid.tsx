import Link from "next/link";
import { Cpu, CircuitBoard, Wifi, Layers, Code2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";

const items = [
  {
    icon: Cpu,
    title: "Embedded Systems",
    description: "STM32 & ESP32 firmware, FreeRTOS, communication protocols, and real-time control.",
    href: "/embedded",
  },
  {
    icon: Layers,
    title: "Digital Design",
    description: "Verilog, VHDL, RISC-V, and analog IC design in Cadence Virtuoso.",
    href: "/digital-design",
  },
  {
    icon: Wifi,
    title: "IoT & Telemetry",
    description: "MQTT dashboards, BLE wearables, and connected sensor networks.",
    href: "/embedded",
  },
  {
    icon: CircuitBoard,
    title: "PCB Design",
    description: "Altium-designed boards driving real motors and measurement circuits.",
    href: "/embedded",
  },
  {
    icon: Code2,
    title: "Software (Web & Mobile)",
    description: "React, Next.js, and Flutter — the secondary craft behind the hardware.",
    href: "/web",
  },
];

export default function PriorityGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 sm:px-10">
      <SectionHeading
        eyebrow="Focus Areas"
        title="Where the obsession lives."
        description="Ranked by where I spend my time and where I want to build my career."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <Link href={item.href} className="block h-full">
              <GlassCard className="flex h-full flex-col gap-4 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-neon-blue/15 to-neon-purple/15 text-neon-blue">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="font-technical text-xs text-text-muted">0{i + 1}</p>
                  <h3 className="font-display mt-1 text-lg font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
