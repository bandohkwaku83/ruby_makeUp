import Image from "next/image";
import { services } from "@/lib/content";
import toolsImage from "../../public/images/tools.jpg";

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-espresso py-24 text-cream lg:py-32">
      <div
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-rose-gold/15 blur-3xl services-glow"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-champagne/10 blur-3xl services-glow-delayed"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,124,0.08),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-champagne">
            Services
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
            Signature beauty experiences
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
          <p className="mt-6 text-base leading-relaxed text-cream/75 md:text-lg">
            Whether for weddings, special events, photoshoots, or everyday glam,
            every service is designed to make you look and feel your absolute best.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="group relative min-h-[28rem] overflow-hidden rounded-2xl border border-cream/10 transition-all duration-500 hover:-translate-y-1.5 hover:border-rose-gold/45"
            >
              <Image
                src={toolsImage}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/85 to-espresso/30"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-espresso/40 transition-colors duration-500 group-hover:bg-espresso/25"
                aria-hidden
              />
              <div
                className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-rose-gold via-champagne to-rose-gold-light transition-all duration-500 group-hover:w-full"
                aria-hidden
              />

              <div className="relative z-10 flex h-full min-h-[28rem] flex-col justify-between p-8 lg:p-10">
                <span className="self-end font-serif text-5xl leading-none text-cream/20 transition-colors duration-500 group-hover:text-champagne/40">
                  0{index + 1}
                </span>

                <div>
                  <h3 className="font-serif text-2xl text-cream transition-colors duration-300 group-hover:text-champagne md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-cream/80 md:text-base">
                    {service.description}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="rounded-full border border-cream/15 bg-cream/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.12em] text-cream/80 backdrop-blur-sm transition-colors duration-300 group-hover:border-rose-gold/30 group-hover:bg-rose-gold/20 group-hover:text-cream"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
