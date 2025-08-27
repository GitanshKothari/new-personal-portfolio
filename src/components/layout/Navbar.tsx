'use client';

import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-brand-500 via-fuchsia-500 to-indigo-500 shadow-md" />
          <span className="text-base font-semibold tracking-wide text-white">
            Gitansh
          </span>
        </div>

        <nav className="hidden sm:flex gap-6 text-sm">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative transition-colors ${
                  isActive
                    ? "text-brand-400"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-brand-500 via-fuchsia-500 to-indigo-500 rounded-full"></span>
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
