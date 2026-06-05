import path from "path";
import { fileURLToPath } from "url";
import type { NextConfig } from "next";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
);

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
