export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Embedded", href: "/embedded" },
  { label: "Digital Design", href: "/digital-design" },
  { label: "Projects", href: "/projects" },
  { label: "Achievements", href: "/achievements" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const moreNavItems: NavItem[] = [
  { label: "Web", href: "/web" },
  { label: "Mobile", href: "/mobile" },
];
