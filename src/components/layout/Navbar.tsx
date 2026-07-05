"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems, moreNavItems } from "@/data/nav";
import { profile } from "@/data/profile";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const allItems = [...navItems.slice(0, 5), ...moreNavItems, ...navItems.slice(5)];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 transition-all duration-300",
        )}
      >
        <div
          className={cn(
            "flex w-full items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300",
            scrolled ? "glass-panel shadow-[0_8px_32px_rgba(0,0,0,0.35)]" : "bg-transparent"
          )}
        >
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight text-text-primary"
          >
            Basel<span className="text-gradient">.</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    active ? "text-void" : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={profile.resumeEmbeddedHref}
              download
              className="flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-neon-blue hover:text-neon-blue"
            >
              <Download size={15} /> Resume
            </a>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-text-primary lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 z-40 bg-void/98 backdrop-blur-xl lg:hidden"
          >
            <div className="grid-overlay absolute inset-0 opacity-40" />
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={{ open: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } }}
              className="relative flex h-full min-h-full flex-col items-center justify-center gap-1 overflow-y-auto px-6 py-24"
            >
              {allItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    variants={{
                      closed: { opacity: 0, y: 16 },
                      open: { opacity: 1, y: 0 },
                    }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "font-display block py-1.5 text-center text-2xl font-semibold tracking-tight sm:text-3xl",
                        active ? "text-gradient" : "text-text-primary"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.a
                variants={{ closed: { opacity: 0, y: 16 }, open: { opacity: 1, y: 0 } }}
                href={profile.resumeEmbeddedHref}
                download
                className="mt-6 flex shrink-0 items-center gap-2 rounded-full border border-neon-blue/50 px-6 py-3 text-sm font-medium text-neon-blue"
              >
                <Download size={16} /> Resume
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
