import Hero from "@/components/home/Hero";
import PriorityMarquee from "@/components/home/PriorityMarquee";
import StatsStrip from "@/components/home/StatsStrip";
import PriorityGrid from "@/components/home/PriorityGrid";
import FeaturedWork from "@/components/home/FeaturedWork";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <PriorityMarquee />
      <div className="py-20">
        <StatsStrip />
      </div>
      <PriorityGrid />
      <FeaturedWork />
      <CTASection />
    </>
  );
}
