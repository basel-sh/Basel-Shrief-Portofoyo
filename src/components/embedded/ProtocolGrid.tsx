import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const protocols = [
  { label: "UART", note: "Serial comms" },
  { label: "I2C", note: "Sensor buses" },
  { label: "SPI", note: "High-speed peripherals" },
  { label: "CAN", note: "Automotive networks" },
  { label: "BLE", note: "Wireless telemetry" },
  { label: "MQTT", note: "IoT dashboards" },
  { label: "DMA", note: "Zero-CPU transfers" },
  { label: "ADC", note: "Analog sensing" },
  { label: "Timers / PWM", note: "Motor & signal control" },
  { label: "GPIO / IRQ", note: "Real-time events" },
  { label: "PCB Design", note: "Altium layouts" },
  { label: "FreeRTOS", note: "Task scheduling" },
];

export default function ProtocolGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
      <SectionHeading
        eyebrow="Under the Hood"
        title="Protocols & peripherals I build with."
        description="The building blocks behind every firmware module and PCB in this section."
      />
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {protocols.map((p, i) => (
          <Reveal key={p.label} delay={i * 0.03}>
            <div className="glass-panel rounded-xl p-4 transition-colors hover:border-neon-blue/30">
              <p className="font-technical text-sm font-semibold text-neon-blue">{p.label}</p>
              <p className="mt-1 text-xs text-text-secondary">{p.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
