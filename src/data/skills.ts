export interface SkillGroup {
  title: string;
  priority: number;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Embedded Software",
    priority: 1,
    skills: ["Embedded C", "STM32 HAL", "FreeRTOS", "MISRA-C (Familiar)", "Unit Testing", "Git"],
  },
  {
    title: "Communication Protocols",
    priority: 2,
    skills: ["UART", "I2C", "SPI", "CAN", "BLE", "MQTT"],
  },
  {
    title: "Digital & IC Design",
    priority: 3,
    skills: ["Verilog", "VHDL", "RTL Design", "FSM", "ALU / Datapath", "Vivado", "ModelSim / Questasim", "Cadence Virtuoso"],
  },
  {
    title: "PCB & Hardware",
    priority: 4,
    skills: ["Altium Designer", "PCB Layout", "Motor Drivers", "Level Shifters", "Oscilloscope", "Logic Analyzer"],
  },
  {
    title: "Tools & Platforms",
    priority: 5,
    skills: ["STM32CubeIDE", "MATLAB", "Python", "Flutter", "Canva / Technical Documentation"],
  },
  {
    title: "Web & Software",
    priority: 6,
    skills: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"],
  },
];

export const personalSkills = ["Leadership", "Communication", "Time Management"];
export const languages = ["Arabic (Native)", "English (Fluent)"];
