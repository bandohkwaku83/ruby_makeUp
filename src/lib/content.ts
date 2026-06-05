export const site = {
  name: "Ruby Opoku",
  title: "Ruby Opoku — Makeup Artist",
  tagline: "Flawless artistry. Timeless confidence.",
  slogan: "Where natural beauty meets elevated glamour.",
  email: "Ruby.edwins1@gmail.com",
  phone: "+233 55 024 1234",
  phoneHref: "+233550241234",
  instagram: "@rubyopoku",
  location: "Available for travel & on-location bookings",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "At Work", href: "#at-work" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  headline: "Enhancing natural beauty with precision & grace",
  subheadline:
    "Soft glam, bridal elegance, and bold transformations.",
  ctaPrimary: "Book a Consultation",
  ctaSecondary: "See My Work",
} as const;

export const about = {
  eyebrow: "About Ruby",
  title: "Artistry rooted in confidence & care",
  paragraphs: [
    "Hi, I'm Ruby Opoku, a self-taught makeup artist with a passion for enhancing natural beauty through creativity, precision, and confidence-building artistry. What began as a personal love for makeup quickly grew into a professional journey dedicated to helping every client feel radiant, empowered, and unforgettable.",
    "My artistry blends modern beauty trends with timeless elegance, allowing me to create looks that are both flawless and uniquely tailored to each individual. From soft glam and bridal beauty to bold, statement-making transformations, I believe makeup is more than cosmetics. It is an expression of personality, confidence, and self-love.",
    "Every face I work on is approached with professionalism, attention to detail, and genuine care. My goal is simple: to create beautiful, confidence-boosting experiences while delivering high-quality, polished results that leave lasting impressions.",
  ],
  signature: "Ruby Opoku",
  stats: [
    { value: "500+", label: "Clients Glamoured" },
    { value: "8+", label: "Years of Artistry" },
    { value: "100%", label: "Personalized Looks" },
  ],
} as const;

export const services = [
  {
    id: "bridal",
    title: "Bridal Beauty",
    description:
      "Timeless, camera-ready bridal looks designed to last from your first look through your final dance. Includes trial sessions and touch-up guidance.",
    features: ["Bridal trial", "Ceremony & reception", "Skin prep consultation"],
  },
  {
    id: "soft-glam",
    title: "Soft Glam",
    description:
      "Effortlessly polished radiance: luminous skin, refined definition, and a naturally elevated finish perfect for events and portraits.",
    features: ["Custom shade matching", "Long-wear formulas", "Flawless finish"],
  },
  {
    id: "editorial",
    title: "Editorial & Events",
    description:
      "Bold, statement-making artistry for photoshoots, red carpet moments, and special occasions that demand unforgettable presence.",
    features: ["Creative direction", "On-set touch-ups", "High-definition ready"],
  },
  {
    id: "everyday",
    title: "Everyday Glam",
    description:
      "Elevated beauty for life's everyday moments: polished, confident, and uniquely you without feeling overdone.",
    features: ["Quick sessions", "Technique tips", "Product recommendations"],
  },
] as const;

// Add photos to public/images/work/ then list them here.
export const workGallery = {
  eyebrow: "Behind the Scenes",
  title: "The artistry in action",
  description:
    "A glimpse into the process: thoughtful prep, precise application, and the care behind every look.",
  images: [
    {
      id: "1",
      src: "/images/work/work-1.jpeg",
      alt: "Ruby Opoku during a client makeup session",
      caption: "Client session",
    },
    {
      id: "2",
      src: "/images/work/work-2.jpeg",
      alt: "Ruby Opoku applying makeup with precision",
      caption: "Precision application",
    },
    {
      id: "3",
      src: "/images/work/work-3.jpeg",
      alt: "Ruby Opoku applying detailed eye makeup",
      caption: "Detailed artistry",
    },
    {
      id: "4",
      src: "/images/work/work-4.jpeg",
      alt: "Ruby Opoku finishing a client's look",
      caption: "Finishing touches",
    },
  ],
} as const;

export const testimonials = [
  {
    quote:
      "Ruby made me feel like the most beautiful version of myself. My bridal makeup was flawless from morning until midnight — I couldn't stop receiving compliments.",
    author: "Amara K.",
    occasion: "Bridal Client",
  },
  {
    quote:
      "Her attention to detail is unmatched. She understood exactly the soft glam look I wanted and delivered beyond my expectations.",
    author: "Danielle M.",
    occasion: "Event Glam",
  },
  {
    quote:
      "Professional, warm, and incredibly talented. Ruby's artistry photographs beautifully and feels effortless in person.",
    author: "Priya S.",
    occasion: "Editorial Shoot",
  },
] as const;

export const contact = {
  eyebrow: "Let's Connect",
  title: "Bring your vision to life",
  description:
    "Ready to book your session or have questions about bridal packages? I'd love to hear from you. Share your date, occasion, and inspiration. I'll respond within 48 hours.",
} as const;
