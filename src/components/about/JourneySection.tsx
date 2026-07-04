import SectionHeading from "@/components/ui/SectionHeading";
import Timeline from "@/components/ui/Timeline";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";

const educationEntries = [
  {
    period: profile.university.period,
    title: profile.university.name,
    subtitle: profile.university.degree,
    description: profile.university.focus,
  },
];

const experienceEntries = experience.map((e) => ({
  period: e.period,
  title: e.role,
  subtitle: e.org,
  description: e.description,
}));

export default function JourneySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 sm:px-10">
      <SectionHeading eyebrow="Engineering Journey" title="Education & experience." />

      <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <h3 className="font-technical mb-8 text-xs uppercase tracking-[0.25em] text-text-muted">
            Education
          </h3>
          <Timeline entries={educationEntries} accent="blue" />
        </div>
        <div>
          <h3 className="font-technical mb-8 text-xs uppercase tracking-[0.25em] text-text-muted">
            Experience &amp; Training
          </h3>
          <Timeline entries={experienceEntries} accent="purple" />
        </div>
      </div>
    </section>
  );
}
