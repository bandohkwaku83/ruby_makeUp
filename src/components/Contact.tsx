import { contact, site } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="bg-espresso py-24 text-cream lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-champagne">
              {contact.eyebrow}
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              {contact.title}
            </h2>
            <p className="mt-6 leading-relaxed text-cream/70">
              {contact.description}
            </p>

            <div className="mt-10 space-y-4 text-sm">
              <p>
                <span className="text-cream/50 uppercase tracking-[0.15em] text-xs">
                  Email
                </span>
                <br />
                <a
                  href={`mailto:${site.email}`}
                  className="text-champagne transition-colors hover:text-cream"
                >
                  {site.email}
                </a>
              </p>
              <p>
                <span className="text-cream/50 uppercase tracking-[0.15em] text-xs">
                  Phone
                </span>
                <br />
                <a
                  href={`tel:${site.phoneHref}`}
                  className="text-champagne transition-colors hover:text-cream"
                >
                  {site.phone}
                </a>
              </p>
              <p>
                <span className="text-cream/50 uppercase tracking-[0.15em] text-xs">
                  Instagram
                </span>
                <br />
                <a
                  href={`https://instagram.com/${site.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-champagne transition-colors hover:text-cream"
                >
                  {site.instagram}
                </a>
              </p>
              <p className="text-cream/60">{site.location}</p>
            </div>
          </div>

          <form
            className="space-y-6"
            action={`mailto:${site.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs uppercase tracking-[0.15em] text-cream/50">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-2 w-full border-b border-cream/20 bg-transparent py-3 text-cream outline-none transition-colors placeholder:text-cream/30 focus:border-champagne"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.15em] text-cream/50">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full border-b border-cream/20 bg-transparent py-3 text-cream outline-none transition-colors placeholder:text-cream/30 focus:border-champagne"
                  placeholder="you@email.com"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.15em] text-cream/50">
                Service
              </span>
              <select
                name="service"
                className="mt-2 w-full border-b border-cream/20 bg-transparent py-3 text-cream outline-none focus:border-champagne"
                defaultValue="bridal"
              >
                <option value="bridal" className="bg-espresso">
                  Bridal Beauty
                </option>
                <option value="soft-glam" className="bg-espresso">
                  Soft Glam
                </option>
                <option value="editorial" className="bg-espresso">
                  Editorial & Events
                </option>
                <option value="everyday" className="bg-espresso">
                  Everyday Glam
                </option>
              </select>
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.15em] text-cream/50">
                Message
              </span>
              <textarea
                name="message"
                rows={4}
                required
                className="mt-2 w-full resize-none border-b border-cream/20 bg-transparent py-3 text-cream outline-none transition-colors placeholder:text-cream/30 focus:border-champagne"
                placeholder="Tell me about your date, vision, and inspiration..."
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-rose-gold py-4 text-xs font-medium uppercase tracking-[0.2em] text-cream transition-colors hover:bg-rose-gold-light sm:w-auto sm:px-12"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
