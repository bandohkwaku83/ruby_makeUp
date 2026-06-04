import Image from "next/image";
import Link from "next/link";
import { hero, site } from "@/lib/content";
import heroImage from "../../public/images/heromake.png";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Luxury makeup artistry by Ruby Opoku"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/50 to-espresso/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-24 pt-40 lg:px-10 lg:pb-32">
        <div className="max-w-2xl">
          <h1 className="opacity-0-initial animate-fade-up font-serif text-5xl leading-[1.1] text-cream md:text-6xl lg:text-7xl">
            {hero.headline}
          </h1>
          <p className="opacity-0-initial animate-fade-up animation-delay-200 mt-6 max-w-lg text-lg leading-relaxed text-cream/85">
            {hero.subheadline}
          </p>
          <div className="opacity-0-initial animate-fade-up animation-delay-400 mt-10 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="rounded-full bg-rose-gold px-8 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-cream transition-colors hover:bg-rose-gold-light"
            >
              {hero.ctaPrimary}
            </Link>
            <Link
              href="#portfolio"
              className="rounded-full border border-cream/40 px-8 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-cream transition-colors hover:border-cream hover:bg-cream/10"
            >
              {hero.ctaSecondary}
            </Link>
          </div>
        </div>

        <div className="opacity-0-initial animate-fade-in animation-delay-600 mt-16 hidden items-end justify-between border-t border-cream/20 pt-8 lg:flex">
          <p className="max-w-xs text-sm leading-relaxed text-cream/70">
            {site.slogan}
          </p>
          <p className="font-serif text-3xl italic text-champagne">
            {site.tagline}
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[10px] uppercase tracking-[0.3em] text-cream/50">
          Scroll
        </span>
        <div className="h-12 w-px bg-gradient-to-b from-cream/50 to-transparent" />
      </div>
    </section>
  );
}
