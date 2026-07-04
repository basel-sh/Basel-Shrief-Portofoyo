import type { Metadata } from "next";
import { Mail, Phone, Download } from "lucide-react";
import ContactCard from "@/components/contact/ContactCard";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons/BrandIcons";
import CircuitCanvas from "@/components/three/CircuitCanvas";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Basel Shrief — embedded systems and digital design engineer.",
};

export default function ContactPage() {
  const cards = [
    {
      icon: <WhatsappIcon size={22} />,
      title: "WhatsApp",
      description: "Fastest way to reach me for quick questions.",
      cta: "Chat on WhatsApp",
      href: profile.whatsappHref,
    },
    {
      icon: <Mail size={22} />,
      title: "Email",
      description: profile.email,
      cta: "Send an Email",
      href: profile.emailHref,
    },
    {
      icon: <Phone size={22} />,
      title: "Call Me",
      description: profile.phone,
      cta: "Call Now",
      href: profile.phoneHref,
    },
    {
      icon: <LinkedinIcon size={22} />,
      title: "LinkedIn",
      description: "Let's connect professionally.",
      cta: "View Profile",
      href: profile.linkedin,
    },
    {
      icon: <GithubIcon size={22} />,
      title: "GitHub",
      description: "Firmware, RTL, and web repos.",
      cta: "View GitHub",
      href: profile.github,
    },
    {
      icon: <Download size={22} />,
      title: "Download Resume",
      description: "Embedded Systems-focused resume, PDF.",
      cta: "Download PDF",
      href: profile.resumeEmbeddedHref,
      download: true,
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-border-subtle pb-16 pt-36 sm:pt-44">
        <CircuitCanvas className="absolute inset-0 h-full w-full opacity-40" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,var(--bg-void)_75%)]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-10">
          <p className="font-technical mb-4 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-neon-blue">
            <span className="h-px w-8 bg-neon-blue" /> Let&apos;s Build Something
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-text-primary sm:text-6xl">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Open to embedded software internships, PCB design collaborations, and digital design
            work. Pick whatever&apos;s easiest for you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <ContactCard key={card.title} {...card} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
