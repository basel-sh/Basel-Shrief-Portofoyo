import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import MasonryGallery from "@/components/gallery/MasonryGallery";
import CTASection from "@/components/home/CTASection";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from competitions, travel, and engineering life — Basel Shrief.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-36 text-center sm:px-10 sm:pt-44">
        <p className="font-technical mb-4 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-neon-blue">
          <span className="h-px w-8 bg-neon-blue" /> Behind The Scenes
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-text-primary sm:text-6xl">
          Gallery
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
          Competitions, travel, and moments from the engineering journey — click any photo to
          expand.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-10">
        <SectionHeading eyebrow="Photo Gallery" title="Moments &amp; milestones." className="mb-10" />
        <MasonryGallery items={galleryItems} />
      </section>

      <CTASection />
    </>
  );
}
