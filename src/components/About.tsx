import Image from "next/image";
import { about } from "@/lib/content";
import aboutImage from "../../public/images/about.jpg";

export function About() {
  return (
    <section id="about" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={aboutImage}
              alt="Ruby Opoku, makeup artist at work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden h-48 w-48 border border-rose-gold/30 bg-cream p-6 lg:block">
            <p className="font-serif text-4xl text-rose-gold">RO</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-espresso-soft">
              Makeup Artistry
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-rose-gold">
            {about.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-espresso md:text-5xl">
            {about.title}
          </h2>
          <div className="mt-8 space-y-5 text-espresso-soft leading-relaxed">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <p className="mt-8 font-serif text-2xl italic text-espresso">
            — {about.signature}
          </p>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-blush pt-10">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-3xl text-rose-gold md:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.15em] text-espresso-soft">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
