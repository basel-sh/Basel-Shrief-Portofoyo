export type ProjectCategory = "embedded" | "digital-design" | "web" | "mobile";

export interface Project {
  slug: string;
  category: ProjectCategory;
  subCategory?: string;
  title: string;
  period: string;
  summary: string;
  problem?: string;
  architecture?: string;
  results?: string;
  lessons?: string;
  tags: string[];
  /** Path under /public — only set when a real image file exists on disk. */
  image?: string;
  /** Shown via ImagePlaceholder when no real image is available yet. */
  placeholder?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  // ---------------- EMBEDDED SYSTEMS ----------------
  {
    slug: "smart-medical-watch",
    category: "embedded",
    title: "Embedded Smart Medical Watch",
    period: "Mar 2026",
    summary:
      "STM32/ESP32-based wearable that streams live vitals to a mobile app over BLE, built around a low-power wake strategy for real all-day battery life.",
    problem:
      "Continuous health monitoring wearables need to balance real-time sensor sampling with strict power budgets while still streaming live data to a companion app.",
    architecture:
      "STM32 and ESP32 dual-MCU design integrating I2C sensors — MAX30102 (heart rate / SpO2), BMI160 (IMU), and a temperature sensor. BLE handles real-time data streaming to a mobile application. A USB charging circuit and low-power wake-up strategy were engineered to extend battery efficiency, with continuous integration managed through Git.",
    results:
      "Working wearable prototype with real-time BLE vitals streaming and a measurably improved low-power wake/charge cycle.",
    lessons:
      "Deepened experience coordinating two MCUs over shared I2C sensor buses and tuning wake-up strategies for battery-constrained embedded products.",
    tags: ["STM32", "ESP32", "I2C", "BLE", "Wearables", "Low Power", "Git"],
    placeholder: "Put Smart Medical Watch Photo Here",
    featured: true,
  },
  {
    slug: "motor-control-pcb-altium",
    category: "embedded",
    subCategory: "PCB Design",
    title: "Motor Control PCB (Altium)",
    period: "Mar 2026",
    summary:
      "A 100cm² PCB built around an ESP32, level shifters, and DRV8825 drivers to control high-current 3-phase motors on a real racing car.",
    problem:
      "The Eco Racing car needed a compact, reliable board capable of driving 3-phase motors at high current and voltage without signal integrity issues between logic-level and motor-driver domains.",
    architecture:
      "Designed entirely in Altium Designer: ESP32 as the control core, level shifters bridging logic-level signals to the motor driver ICs, and DRV8825 drivers switching high current/voltage to the 3-phase motors. Careful copper pour and trace-width planning for current handling on a 100cm² footprint.",
    results:
      "Board fabricated and integrated into the Eco Racing team's race car motor-control subsystem.",
    tags: ["Altium", "PCB Design", "ESP32", "DRV8825", "Motor Control", "3-Phase"],
    placeholder: "Put STM32 Motor Control PCB Image Here",
    featured: true,
  },
  {
    slug: "racing-telemetry-system",
    category: "embedded",
    subCategory: "IoT / Telemetry",
    title: "Racing Car Telemetry System",
    period: "Jan 2026",
    summary:
      "GPS + IMU telemetry over ESP32/STM32 pushed via MQTT to a live web dashboard — field-tested at the Qatar Shell Eco-marathon.",
    problem:
      "Drivers and engineers needed live positional and dynamics data from the race car without being tethered to it, in a form usable trackside during competition.",
    architecture:
      "GPS-NEO6M with antenna, gyroscope and accelerometer sensors, integrated across ESP32 and STM32 using their native IDEs (STM32CubeIDE with HAL). Telemetry is published over MQTT to an external host powering a real-time web dashboard for engineers and drivers.",
    results:
      "Deployed and tested live at the Qatar Shell Eco-marathon 2026, feeding the engineering team's trackside dashboard.",
    tags: ["ESP32", "STM32", "GPS", "MQTT", "HAL", "IoT", "Telemetry"],
    placeholder: "Put Racing Telemetry Dashboard Screenshot Here",
    featured: true,
  },
  {
    slug: "automated-lane-follower",
    category: "embedded",
    title: "Automated Lane Follower Car",
    period: "Feb 2025",
    summary:
      "Autonomous line-following car on an STM32 'Blue Pill' — went on to win First Place at the Cairo University Line Follower Competition.",
    architecture:
      "Built and programmed on the STM32 'Blue Pill' microcontroller using STM32CubeIDE, with sensor-driven closed-loop steering logic for real-time lane tracking.",
    results: "First Place, Line Follower Car Competition — Cairo University Eco Racing Team, Feb 2025.",
    tags: ["STM32", "STM32CubeIDE", "Autonomous Systems", "Control Loops"],
    placeholder: "Put Line Follower Car Photo Here",
  },
  {
    slug: "designing-multimeter",
    category: "embedded",
    subCategory: "PCB Design",
    title: "Designing a Multimeter",
    period: "Dec 2024",
    summary:
      "Custom multimeter circuit on Arduino and Op-Amps, reading voltage, current, and resistance to over 95% accuracy on a small designed PCB.",
    architecture:
      "Arduino-driven measurement circuit using operational amplifiers to condition and amplify signals for voltage, current, and ohmic resistance readings, laid out on a compact custom PCB.",
    results: "Achieved accuracy exceeding 95% against reference readings across all measured components.",
    tags: ["Arduino", "Op-Amps", "PCB Design", "Analog Circuits"],
    placeholder: "Put Multimeter PCB Photo Here",
  },

  // ---------------- DIGITAL DESIGN ----------------
  {
    slug: "risc-v-processor",
    category: "digital-design",
    subCategory: "Processor Design",
    title: "RISC-V Processor Designer",
    period: "July 2025",
    summary:
      "A 32-bit single-cycle RISC-V processor built in Verilog — full datapath, control unit, and memory modules, verified in ModelSim and Vivado.",
    architecture:
      "Complete single-cycle RISC-V datapath in Verilog: instruction fetch/decode, ALU, register file, control unit, and memory modules, with full instruction execution flow simulated in ModelSim and synthesized in Vivado.",
    tags: ["Verilog", "RISC-V", "RTL", "Datapath", "Control Unit", "Vivado", "ModelSim"],
    placeholder: "Put RISC-V Processor Waveform/Vivado Screenshot Here",
    featured: true,
  },
  {
    slug: "8-bit-processor",
    category: "digital-design",
    subCategory: "Processor Design",
    title: "8-Bit Processor Designer",
    period: "Aug 2025",
    summary:
      "A single-cycle 8-bit processor designed in VHDL for the NTI summer training program, with a complete datapath and control unit.",
    architecture:
      "Full 8-bit single-cycle datapath, control unit, and memory modules designed in VHDL, with instruction execution simulated in ModelSim and implemented in Vivado.",
    tags: ["VHDL", "Processor Design", "RTL", "ModelSim", "Vivado"],
    placeholder: "Put 8-Bit Processor ModelSim Screenshot Here",
    featured: true,
  },
  {
    slug: "i2c-uart-protocols",
    category: "digital-design",
    subCategory: "Communication Protocols",
    title: "I2C & UART Protocol Design",
    period: "Aug 2025",
    summary:
      "Two communication-protocol modules — I2C and UART — designed and simulated from the ground up during NTI's Verilog summer training.",
    architecture:
      "RTL modules implementing the I2C and UART protocol state machines and timing, simulated to validate correct framing, addressing, and data transfer behavior.",
    tags: ["Verilog", "I2C", "UART", "FSM", "RTL"],
    placeholder: "Put I2C/UART Simulation Waveform Here",
  },
  {
    slug: "frequency-dividers-cadence",
    category: "digital-design",
    subCategory: "Analog / IC Design",
    title: "Injection-Locked & E-TSPC Frequency Dividers",
    period: "Nov 2025",
    summary:
      "Digital and analog frequency divider ICs designed and tuned in Cadence Virtuoso for optimal bandwidth and power consumption.",
    architecture:
      "Analog injection-locked frequency divider and an E-TSPC digital divider, designed with NMOS/PMOS devices in Cadence Virtuoso and tuned for the best achievable bandwidth-to-power tradeoff.",
    tags: ["Cadence Virtuoso", "Analog IC Design", "Frequency Dividers", "NMOS/PMOS"],
    placeholder: "Put Cadence Virtuoso Schematic Screenshot Here",
  },
  {
    slug: "ldo-ota-cadence",
    category: "digital-design",
    subCategory: "Analog / IC Design",
    title: "LDO & OTA Design",
    period: "Dec 2025",
    summary:
      "A low-dropout regulator and operational transconductance amplifier designed in Cadence Virtuoso with voltage-controlled step tuning.",
    architecture:
      "LDO circuit with a voltage-controlled step potentiometer, designed and tuned in Cadence Virtuoso using NMOS/PMOS devices for the best constant-voltage output and power consumption.",
    tags: ["Cadence Virtuoso", "LDO", "OTA", "Analog IC Design"],
    placeholder: "Put LDO/OTA Cadence Schematic Here",
  },
  {
    slug: "logic-gates-transistors",
    category: "digital-design",
    subCategory: "Analog / IC Design",
    title: "Logic Gates from Transistors & Diodes",
    period: "Apr 2025",
    summary:
      "Ground-up logic gate design using transistors, MOSFETs, and diodes — implemented into a real 2-bit binary adder/subtractor circuit.",
    architecture:
      "Discrete-device abstraction of standard logic gates built from transistors, MOSFETs, and diodes, composed into a working 2-bit binary adder/subtractor circuit.",
    tags: ["Transistors", "MOSFETs", "Logic Gates", "Digital Electronics"],
    placeholder: "Put Transistor Logic Gates Breadboard Photo Here",
  },

  // ---------------- WEB ----------------
  {
    slug: "portfolio-website",
    category: "web",
    title: "Personal Engineering Portfolio",
    period: "Aug 2025 — rebuilt 2026",
    summary:
      "This site — a Next.js, TypeScript, and Framer Motion/GSAP/Three.js portfolio built to showcase embedded and digital design work.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
    placeholder: "Put Portfolio Website Screenshot Here",
    github: "https://github.com/basel-sh",
  },
  {
    slug: "breathtech-ai-doctor",
    category: "web",
    title: "BreathTech — AI Doctor for Diagnosis",
    period: "2025",
    summary:
      "An AI-assisted diagnosis web app that analyzes symptoms to help guide medical triage decisions.",
    tags: ["React", "Node.js", "MongoDB", "AI"],
    image: "/assets/images/web/breathtech-ai-doctor.png",
    github: "https://github.com/basel-sh/BreathTech",
    demo: "https://breathtech.vercel.app/",
  },
  {
    slug: "exoplanets-discoverer",
    category: "web",
    title: "3D Exoplanets Discoverer",
    period: "Oct 2024",
    summary:
      "A website simulating exoplanets in our galaxy in 3D, built with a small team in 48 hours for the NASA Space Apps Challenge.",
    tags: ["React", "Three.js", "HTML/CSS/JS", "NASA Space Apps"],
    image: "/assets/images/web/exoplanets-discoverer.png",
    github: "https://github.com/basel-sh/nasa-space-apps2024-czmd",
    demo: "https://exoplanets-discoverer.vercel.app/",
  },

  // ---------------- MOBILE ----------------
  {
    slug: "sparrow-flutter-app",
    category: "mobile",
    title: "Sparrow Companion App Connectivity",
    period: "Mar 2026 – Present",
    summary:
      "Flutter mobile app connectivity built to pair with the Sparrow embedded system's ESP-based hardware over BLE.",
    tags: ["Flutter", "BLE", "ESP32", "Mobile Connectivity"],
    placeholder: "Put Sparrow App Screenshot Here",
  },
  {
    slug: "medical-watch-companion-app",
    category: "mobile",
    title: "Smart Medical Watch Companion App",
    period: "Mar 2026",
    summary:
      "Mobile app pairing for the STM32/ESP32 smart medical watch, streaming live vitals over BLE for real-time viewing.",
    tags: ["BLE", "Wearables", "Mobile", "Real-Time Data"],
    placeholder: "Put Medical Watch App Screenshot Here",
  },
];

export const otherWork = [
  {
    title: "Sunlight Simulation & Illumination Analysis on a 3D Human Model",
    period: "May 2025",
    summary:
      "Simulated sun movement over a 3D STL model in MATLAB, analyzing surface lighting and shadow effects and importing custom math models into the simulation.",
    tags: ["MATLAB", "3D Simulation", "Illumination Analysis"],
  },
];

export function projectsByCategory(category: ProjectCategory) {
  return projects.filter((p) => p.category === category);
}
