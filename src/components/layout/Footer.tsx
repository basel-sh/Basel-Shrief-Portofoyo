import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from "@/components/icons/BrandIcons";
import { profile } from "@/data/profile";
import { navItems, moreNavItems } from "@/data/nav";

const socials = [
  { icon: GithubIcon, href: profile.github, label: "GitHub" },
  { icon: LinkedinIcon, href: profile.linkedin, label: "LinkedIn" },
  { icon: FacebookIcon, href: profile.facebook, label: "Facebook" },
  { icon: InstagramIcon, href: profile.instagram, label: "Instagram" },
  { icon: Mail, href: profile.emailHref, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border-subtle">
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-2xl font-semibold text-text-primary">
              Basel<span className="text-gradient">.</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {profile.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-text-secondary transition-colors hover:border-neon-blue hover:text-neon-blue"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="font-technical text-xs uppercase tracking-wider text-text-muted">
                Navigate
              </p>
              <ul className="mt-4 space-y-2.5">
                {navItems.slice(0, 5).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-text-secondary transition-colors hover:text-neon-blue"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-technical text-xs uppercase tracking-wider text-text-muted">
                More
              </p>
              <ul className="mt-4 space-y-2.5">
                {[...moreNavItems, ...navItems.slice(5)].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-text-secondary transition-colors hover:text-neon-blue"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-technical text-xs uppercase tracking-wider text-text-muted">
                Contact
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-text-secondary">
                <li>{profile.location}</li>
                <li>
                  <a href={profile.emailHref} className="hover:text-neon-blue">
                    {profile.email}
                  </a>
                </li>
                <li>
                  <a href={profile.phoneHref} className="hover:text-neon-blue">
                    {profile.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-8 text-xs text-text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Basel Shrief. All rights reserved.</p>
          <p className="font-technical">Built with Next.js · Three.js · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
