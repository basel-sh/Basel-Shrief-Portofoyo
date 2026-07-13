export interface GalleryItem {
  id: string;
  src?: string;
  label: string;
  span?: "tall" | "wide" | "square";
}

export const galleryItems: GalleryItem[] = [
  { id: "me", src: "/assets/images/me/basel-shrief.jpg", label: "Basel Shrief", span: "tall" },
  {
    id: "university",
    src: "/assets/images/university/cairo-university-engineering.jpg",
    label: "Faculty of Engineering, Cairo University",
    span: "wide",
  },
  {
    id: "tccd",
    src: "/assets/images/competitions/tccd-research-day-2025.jpg",
    label: "TCCD Research Day 2025 — First Place",
    span: "square",
  },
  { id: "nile", src: "/assets/images/gallery/nile.jpg", label: "Cairo, along the Nile", span: "tall" },
  {
    id: "breathtech",
    src: "/assets/images/web/breathtech-ai-doctor.png",
    label: "BreathTech — AI Doctor",
    span: "wide",
  },
  {
    id: "exoplanets",
    src: "/assets/images/web/exoplanets-discoverer.png",
    label: "3D Exoplanets Discoverer",
    span: "square",
  },
  { id: "poland-ceremony", label: "Poland — Award Ceremony", span: "square" },
  { id: "poland-team", label: "Poland — Eco Racing Team", span: "tall" },
  { id: "poland-car", label: "Poland — Race Car", span: "wide" },
  { id: "qatar-ceremony", label: "Qatar — Award Ceremony", span: "square" },
  { id: "qatar-group", label: "Qatar — Team Photo", span: "wide" },
  { id: "qatar-car", label: "Qatar — Race Car", span: "tall" },
  {
    id: "smart-watch",
    src: "/assets/images/embedded/smart-medical-watch.jpg",
    label: "Smart Medical Watch",
    span: "square",
  },
  {
    id: "motor-pcb",
    src: "/assets/images/embedded/motor-control-pcb-altium.jpg",
    label: "STM32 Motor Control PCB",
    span: "wide",
  },
  {
    id: "lane-follower",
    src: "/assets/images/embedded/automated-lane-follower.jpg",
    label: "Line Follower Car",
    span: "square",
  },
  {
    id: "fpga-screenshot",
    src: "/assets/images/digital/risc-v-processor.png",
    label: "RISC-V / Vivado Screenshot",
    span: "tall",
  },
  {
    id: "altium-pcb",
    src: "/assets/images/embedded/motor-control-pcb-altium.jpg",
    label: "Altium PCB Layout",
    span: "wide",
  },
];
