import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const concepts = [
  { label: "Verilog", note: "RTL design" },
  { label: "VHDL", note: "RTL design" },
  { label: "FSM", note: "Finite state machines" },
  { label: "ALU", note: "Arithmetic logic" },
  { label: "Datapath", note: "Processor pipelines" },
  { label: "Control Unit", note: "Instruction decode" },
  { label: "Simulation & Timing", note: "Waveform verification" },
  { label: "Vivado", note: "Synthesis & FPGA" },
  { label: "ModelSim / Questasim", note: "RTL simulation" },
  { label: "Cadence Virtuoso", note: "Analog IC design" },
  { label: "NMOS / PMOS", note: "Transistor-level design" },
  { label: "Altium", note: "PCB layout" },
];

export default function ConceptsGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
      <SectionHeading
        eyebrow="Toolchain & Concepts"
        title="From RTL to silicon."
        description="The concepts and EDA tools behind every processor and IC design below."
      />
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {concepts.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.03}>
            <div className="glass-panel rounded-xl p-4 transition-colors hover:border-neon-purple/30">
              <p className="font-technical text-sm font-semibold text-neon-purple">{c.label}</p>
              <p className="mt-1 text-xs text-text-secondary">{c.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
