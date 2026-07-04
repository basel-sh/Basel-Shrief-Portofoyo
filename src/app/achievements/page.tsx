import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Timeline from "@/components/ui/Timeline";
import CountrySpotlight from "@/components/achievements/CountrySpotlight";
import CertificatesGrid from "@/components/achievements/CertificatesGrid";
import CTASection from "@/components/home/CTASection";
import { PolandFlag, QatarFlag } from "@/components/icons/FlagIcons";
import { achievements } from "@/data/achievements";

const flagByCountry = { Poland: PolandFlag, Qatar: QatarFlag } as const;

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Competition wins, international representation, and recognitions earned by Basel Shrief — including Poland and Qatar Shell Eco-marathon.",
};

export default function AchievementsPage() {
  const international = achievements.filter((a) => a.country === "Poland" || a.country === "Qatar");

  const timelineEntries = achievements.map((a) => {
    const Flag = a.country && a.country in flagByCountry ? flagByCountry[a.country as keyof typeof flagByCountry] : null;
    return {
      period: a.period,
      title: (
        <span className="inline-flex items-center gap-2">
          {Flag && <Flag className="h-4 w-auto shrink-0 rounded-sm" />}
          {a.title}
        </span>
      ),
      subtitle: a.result,
      description: a.description,
    };
  });

  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-36 text-center sm:px-10 sm:pt-44">
        <p className="font-technical mb-4 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-neon-blue">
          <span className="h-px w-8 bg-neon-blue" /> Track Record
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-text-primary sm:text-6xl">
          Achievements
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
          From Port Said to Poland and Qatar — competition wins and international representation
          earned through embedded systems work.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <SectionHeading eyebrow="International Representation" title="Representing Egypt." />
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {international.map((a, i) => (
            <CountrySpotlight key={a.slug} achievement={a} index={i} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
        <SectionHeading eyebrow="Full Record" title="Every win, in order." />
        <div className="mt-14">
          <Timeline entries={timelineEntries} accent="blue" />
        </div>
      </section>

      <CertificatesGrid />
      <CTASection />
    </>
  );
}
