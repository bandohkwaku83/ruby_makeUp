"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/content";
import logoImage from "../../public/images/logo.png";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link
          href="/"
          className="block transition-opacity hover:opacity-80"
          aria-label={site.name}
        >
          <Image
            src={logoImage}
            alt={`${site.name} logo`}
            priority
            className={`h-9 w-auto transition-all duration-500 md:h-11 ${
              scrolled ? "brightness-0" : "brightness-0 invert"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
                scrolled
                  ? "text-black hover:text-rose-gold"
                  : "text-white hover:text-cream/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className={`hidden rounded-full px-6 py-2.5 text-xs font-medium uppercase tracking-[0.15em] transition-all md:inline-block ${
            scrolled
              ? "border border-black/20 bg-black text-white hover:bg-black/85"
              : "border border-white/40 text-white hover:border-white hover:bg-white/10"
          }`}
        >
          Book Now
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-0.5 w-6 transition-transform ${scrolled || menuOpen ? "bg-black" : "bg-white"} ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-opacity ${scrolled || menuOpen ? "bg-black" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-transform ${scrolled || menuOpen ? "bg-black" : "bg-white"} ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-blush bg-cream px-6 py-8 md:hidden">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-serif text-2xl text-espresso"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="inline-block rounded-full bg-espresso px-8 py-3 text-xs font-medium uppercase tracking-[0.15em] text-cream"
                onClick={() => setMenuOpen(false)}
              >
                Book Now
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
