import Image from "next/image";
import { testimonials } from "@/lib/content";
import testimonialsBg from "../../public/images/kind.jpg";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 z-0">
        <Image
          src={testimonialsBg}
          alt=""
          fill
          aria-hidden
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        <div
          className="absolute inset-0 bg-espresso/45"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-espresso/55 via-espresso/25 to-espresso/55"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-center text-xs font-medium uppercase tracking-[0.35em] text-champagne">
          Kind Words
        </p>
        <h2 className="mt-4 text-center font-serif text-4xl text-cream md:text-5xl">
          Client love
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="flex flex-col border border-cream/15 bg-cream/92 p-8 shadow-lg backdrop-blur-md lg:p-10"
            >
              <p className="font-serif text-4xl leading-none text-rose-gold/50">
                &ldquo;
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-espresso-soft italic">
                {t.quote}
              </p>
              <footer className="mt-8 border-t border-blush pt-6">
                <cite className="not-italic font-medium text-espresso">
                  {t.author}
                </cite>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-espresso-soft/70">
                  {t.occasion}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
