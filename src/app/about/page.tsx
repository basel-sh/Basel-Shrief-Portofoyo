import type { Metadata } from "next";
import CairoPoster from "@/components/about/CairoPoster";
import BioSection from "@/components/about/BioSection";
import JourneySection from "@/components/about/JourneySection";
import SkillsSection from "@/components/about/SkillsSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Basel Shrief — Electronics & Communication Engineering student at Cairo University, specialized in embedded systems and digital design.",
};

export default function AboutPage() {
  return (
    <>
      <CairoPoster />
      <BioSection />
      <JourneySection />
      <SkillsSection />
      <CTASection />
    </>
  );
}
