"use client";

import Image from "next/image";
import { useState } from "react";
import {
  portfolioCategories,
  portfolioItems,
  type PortfolioCategory,
} from "@/lib/content";

export function Portfolio() {
  const [active, setActive] = useState<PortfolioCategory>("All");

  const filtered =
    active === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  return (
    <section id="portfolio" className="bg-cream-dark py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-rose-gold">
              Portfolio
            </p>
            <h2 className="mt-4 font-serif text-4xl text-espresso md:text-5xl">
              Recent artistry
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`rounded-full px-5 py-2 text-xs uppercase tracking-[0.15em] transition-all ${
                  active === cat
                    ? "bg-espresso text-cream"
                    : "border border-espresso/15 text-espresso-soft hover:border-rose-gold hover:text-rose-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {filtered.map((item) => (
            <figure
              key={item.id}
              className="group relative mb-5 break-inside-avoid overflow-hidden"
            >
              <div
                className={`relative w-full overflow-hidden ${
                  item.aspect === "tall"
                    ? "aspect-[3/4]"
                    : item.aspect === "wide"
                      ? "aspect-[4/3]"
                      : "aspect-square"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/40" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-full p-6 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="text-xs uppercase tracking-[0.2em] text-champagne">
                    {item.category}
                  </p>
                  <p className="mt-1 font-serif text-xl text-cream">
                    {item.title}
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
