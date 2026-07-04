export const profile = {
  name: "Basel Shrief",
  fullName: "Basel Shrief Hemaid",
  location: "Giza, Egypt",
  phone: "+20 106 850 6907",
  phoneHref: "tel:+201068506907",
  whatsappHref: "https://wa.me/201068506907",
  email: "Baselshm@gmail.com",
  emailHref: "mailto:Baselshm@gmail.com",
  linkedin: "https://www.linkedin.com/in/basel-shrief-178208288/",
  github: "https://github.com/basel-sh",
  facebook: "https://www.facebook.com/basel.shrief/",
  instagram: "https://www.instagram.com/basel_shrief/",
  resumeEmbeddedHref: "/assets/documents/Basel-Shrief-Embedded-Systems-Resume.pdf",
  resumeGeneralHref: "/assets/documents/Basel-Shrief-CV.pdf",
  titles: [
    "Firmware Engineer",
    "Embedded Systems Engineer",
    "Digital Design Enthusiast",
  ],
  tagline:
    "Electronics & Communication Engineering student at Cairo University building STM32 firmware, RTOS systems, and custom silicon for real racing cars.",
  bio:
    "I'm an Electronics & Communication Engineering student at Cairo University, specialized in designing ICs and embedded software to global standards. My hands-on work spans STM32-based automotive and telemetry systems, custom PCBs, and RTL/analog IC design — with C, communication protocols, PCB design, system integration, and software architecture as my daily tools. Web and mobile development round out my skill set, but embedded systems and digital design are where I live.",
  university: {
    name: "Faculty of Engineering, Cairo University",
    location: "Cairo, Egypt",
    degree: "B.Sc. in Electronics and Communication Engineering",
    period: "Sep 2023 – Expected 2028",
    gpa: "3.02 / 4.00 (Very Good)",
    focus:
      "Specialized in designing ICs and software to global embedded coding standards, with hands-on experience developing STM32-based systems for real-world automotive and telemetry applications.",
  },
} as const;

export const priorities = [
  { label: "Embedded Systems", weight: 1 },
  { label: "Digital Design", weight: 2 },
  { label: "IoT", weight: 3 },
  { label: "PCB Design", weight: 4 },
  { label: "Software (Web & Mobile)", weight: 5 },
] as const;
