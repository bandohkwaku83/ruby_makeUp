import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: site.title,
  description:
    "Ruby Opoku is a passionate self-taught makeup artist specializing in soft glam, bridal, and elegant beauty transformations tailored to every client.",
  keywords: [
    "makeup artist",
    "bridal makeup",
    "soft glam",
    "Ruby Opoku",
    "luxury makeup",
  ],
  openGraph: {
    title: site.title,
    description: site.slogan,
    type: "website",
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} scroll-smooth`}>
      <body className="overflow-x-hidden font-sans antialiased">{children}</body>
    </html>
  );
}
