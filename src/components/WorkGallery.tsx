import Image from "next/image";
import { workGallery } from "@/lib/content";

export function WorkGallery() {
  return (
    <section id="at-work" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-rose-gold">
            {workGallery.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-4xl text-espresso md:text-5xl">
            {workGallery.title}
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
          <p className="mt-6 leading-relaxed text-espresso-soft">
            {workGallery.description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-6">
          {workGallery.images.map((item, index) => (
            <figure
              key={item.id}
              className={`group relative overflow-hidden ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className={`relative w-full overflow-hidden ${
                  index === 0 ? "aspect-[4/3] lg:aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={
                    index === 0
                      ? "(max-width: 1024px) 50vw, 66vw"
                      : "(max-width: 1024px) 50vw, 33vw"
                  }
                />
                <div className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/35" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-espresso/80 to-transparent p-4 transition-transform duration-500 group-hover:translate-y-0 sm:p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-champagne sm:text-xs">
                    {item.caption}
                  </p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
