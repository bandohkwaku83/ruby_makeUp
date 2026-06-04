import Link from "next/link";
import { navLinks, site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream px-6 py-12 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-serif text-2xl text-espresso">{site.name}</p>
          <p className="mt-1 text-sm text-espresso-soft">{site.tagline}</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.15em] text-espresso-soft transition-colors hover:text-rose-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-espresso-soft/60">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
