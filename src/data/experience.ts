export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  description: string;
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Embedded Software Engineering Paid Intern",
    org: "Sparrow",
    period: "Mar 2026 – Present",
    description:
      "Leading end-to-end embedded software development of the Sparrow system: building firmware modules, integrating ESP-based hardware peripherals and communication interfaces, running unit-testing workflows, and wiring up Flutter mobile app connectivity — while delivering feature upgrades, system validation, debugging, and performance improvements in a paid internship environment.",
    tags: ["ESP32", "Firmware", "Unit Testing", "Flutter", "Paid Internship"],
  },
  {
    role: "RTOS Embedded Team Member",
    org: "Cairo University Eco Racing Team",
    period: "Aug 2025 – Present",
    description:
      "Developing FreeRTOS-based embedded systems for the university's Shell Eco-marathon race car, with full technical documentation covering architecture, firmware modules, and validation results.",
    tags: ["FreeRTOS", "STM32", "Technical Documentation", "Motorsport"],
  },
  {
    role: "Networks & Embedded Training",
    org: "PetroJet — New Cairo Metro Line 4 (TBM Project)",
    period: "July 2025 – Aug 2025",
    description:
      "Trained on networking and embedded systems used on Tunnel Boring Machine (TBM) operations for the New Cairo Metro Line 4 infrastructure project.",
    tags: ["Industrial Networks", "Embedded Systems", "Infrastructure"],
  },
  {
    role: "Class Representative",
    org: "Faculty of Engineering, Cairo University",
    period: "Aug 2024 – Aug 2025",
    description:
      "Facilitated dialogue between students and faculty, directly impacting curriculum adjustments — efforts resulted in a 20% increase in course satisfaction ratings reported in end-of-semester surveys.",
    tags: ["Leadership", "Communication"],
  },
];
