export interface GalleryPhoto {
  label: string;
  /** Path under /public — omit while the real photo hasn't been supplied yet. */
  src?: string;
}

export interface Achievement {
  slug: string;
  title: string;
  org: string;
  result: string;
  period: string;
  country?: "Poland" | "Qatar" | "Egypt";
  description: string;
  galleryPhotos?: GalleryPhoto[];
  image?: string;
  certificate?: string;
}

export const achievements: Achievement[] = [
  {
    slug: "poland-shell-eco-marathon",
    title: "Shell Eco-marathon — Poland",
    org: "Cairo University Eco Racing Team",
    result: "TOP 10 Worldwide",
    period: "Feb 2026",
    country: "Poland",
    description:
      "Traveled to Poland to represent Egypt internationally at the Shell Eco-marathon, competing against university teams from around the world. Contributed the embedded telemetry and RTOS systems that helped the team place TOP 10 worldwide.",
    galleryPhotos: [
      { label: "Award Ceremony", src: "/assets/images/competitions/poland-award-ceremony.jpg" },
      { label: "Eco Racing Team", src: "/assets/images/competitions/poland-eco-racing-team.jpg" },
      { label: "Race Car", src: "/assets/images/competitions/poland-race-car.jpg" },
    ],
    certificate: "/assets/documents/certificates/Poland2026_ShellEcoMarathon.pdf",
  },
  {
    slug: "qatar-shell-eco-marathon",
    title: "Shell Eco-marathon — Qatar",
    org: "Cairo University Eco Racing Team",
    result: "1st Place MENA Region · 4th Globally",
    period: "Feb 2026",
    country: "Qatar",
    description:
      "Traveled to Qatar to represent Egypt at the Shell Eco-marathon MENA regional finals. Built and field-tested the car's telemetry system — GPS, IMU, and MQTT dashboard — live at the event, helping the team secure 1st place in the MENA region and 4th globally.",
    galleryPhotos: [
      { label: "Award Ceremony", src: "/assets/images/competitions/qatar-award-ceremony.jpg" },
      { label: "Team Photo", src: "/assets/images/competitions/qatar-team-photo.jpg" },
      { label: "Race Car", src: "/assets/images/competitions/qatar-race-car.jpg" },
    ],
    certificate: "/assets/documents/certificates/Qatar2026_ShellEcoMarathon.pdf",
  },
  {
    slug: "tccd-research-day",
    title: "TCCD Research Day Challenge",
    org: "Smart IoT Smart Bulb — Embedded Software Project",
    result: "First Place",
    period: "May 2025",
    country: "Egypt",
    description:
      "Won first place for an embedded software project implementing a smart, IoT-connected bulb — covering firmware, connectivity, and control logic end to end.",
    image: "/assets/images/competitions/tccd-research-day-2025.jpg",
  },
  {
    slug: "line-follower-competition",
    title: "Line Follower Car Competition",
    org: "Cairo University Eco Racing Team",
    result: "First Place",
    period: "Feb 2025",
    country: "Egypt",
    description:
      "Designed and programmed an autonomous line-following car on an STM32 'Blue Pill' microcontroller using STM32CubeIDE, winning first place in the competition.",
  },
  {
    slug: "nasa-space-apps",
    title: "NASA Space Apps Challenge — Port Said Branch",
    org: "NASA",
    result: "First Place & Global Nominee",
    period: "Oct 2024",
    country: "Egypt",
    description:
      "Won first place at the Port Said branch and was nominated globally for a 3D exoplanet-discovery web experience built in 48 hours with a small team.",
    certificate: "/assets/documents/certificates/NASA Space Apps Challenge Certificate.pdf",
  },
];

export interface Course {
  title: string;
  provider: string;
  period: string;
  certificate?: string;
}

export const courses: Course[] = [
  { title: "Power Electronics Design Essentials", provider: "IEEE", period: "June 2026" },
  {
    title: "Digital Design and Verification using Verilog & VHDL",
    provider: "NTI",
    period: "Aug 2025",
    certificate: "/assets/documents/certificates/Digital Design NTI Certificate.pdf",
  },
  {
    title: "AI and Machine Learning",
    provider: "Microsoft Sprints",
    period: "July 2025",
    certificate: "/assets/documents/certificates/Ai and MachineLearning Sprints Microsoft.pdf",
  },
  {
    title: "Embedded C Hardware Essentials & Device Driver Development",
    provider: "ITI — MaharaTech",
    period: "July 2025",
    certificate: "/assets/documents/certificates/Embedded Systems_Mahartech_Certificate_En.pdf",
  },
  {
    title: "Cybersecurity Summer Camp",
    provider: "Microsoft Sprints",
    period: "July 2025",
    certificate: "/assets/documents/certificates/Cybersecurity Sprints Microsoft.pdf",
  },
  {
    title: "Introduction to Digital Design Using Verilog on Questasim",
    provider: "IEEE",
    period: "June 2025",
    certificate: "/assets/documents/certificates/IEEE Digital Design Certificate.pdf",
  },
  { title: "Web Programming with Python and JavaScript (CS50)", provider: "Harvard / edX", period: "Dec 2022" },
];

export interface Certificate {
  title: string;
  issuer: string;
  file: string;
}

export const certificates: Certificate[] = [
  { title: "Embedded Systems", issuer: "Mahartech", file: "/assets/documents/certificates/Embedded Systems_Mahartech_Certificate_En.pdf" },
  { title: "C Language Course", issuer: "Mahartech", file: "/assets/documents/certificates/C Language Course_Mahartech_Certificate_En.pdf" },
  { title: "Digital Design & Verification (Verilog/VHDL)", issuer: "NTI", file: "/assets/documents/certificates/Digital Design NTI Certificate.pdf" },
  { title: "Introduction to Digital Design (Verilog / Questasim)", issuer: "IEEE", file: "/assets/documents/certificates/IEEE Digital Design Certificate.pdf" },
  { title: "AI and Machine Learning", issuer: "Microsoft Sprints", file: "/assets/documents/certificates/Ai and MachineLearning Sprints Microsoft.pdf" },
  { title: "Cybersecurity Summer Camp", issuer: "Microsoft Sprints", file: "/assets/documents/certificates/Cybersecurity Sprints Microsoft.pdf" },
  { title: "Python Programming", issuer: "Course Certificate", file: "/assets/documents/certificates/Course_Certificate_En_Python.pdf" },
  { title: "MATLAB Onramp", issuer: "MathWorks", file: "/assets/documents/certificates/MATLAB Onramp.pdf" },
  { title: "Altium PCB Design — Cumulative Quiz", issuer: "Altium Education", file: "/assets/documents/certificates/certificate-of-completion-for-altium-education-cumulative-quiz.pdf" },
  { title: "Digitopia 2025", issuer: "Digitopia", file: "/assets/documents/certificates/Digitopia_Certificate_2025.pdf" },
  { title: "NASA Space Apps Challenge", issuer: "NASA", file: "/assets/documents/certificates/NASA Space Apps Challenge Certificate.pdf" },
  { title: "NASA Space Apps Challenge — Cairo 2025", issuer: "NASA", file: "/assets/documents/certificates/NASA Space Apps Challenge Cairo 2025.pdf" },
  { title: "Shell Eco-marathon — Poland 2026", issuer: "Shell", file: "/assets/documents/certificates/Poland2026_ShellEcoMarathon.pdf" },
  { title: "Shell Eco-marathon — Qatar 2026", issuer: "Shell", file: "/assets/documents/certificates/Qatar2026_ShellEcoMarathon.pdf" },
];
