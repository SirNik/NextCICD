import type { NextConfig } from "next";

// When deploying to GitHub Pages the site is served from
// https://<user>.github.io/<repo>/, so we need a base path.
// The CD workflow sets PAGES_BASE_PATH=/<repo>; locally it is empty.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Produce a fully static site in ./out for GitHub Pages
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    // next/image optimization isn't available on static hosting
    unoptimized: true,
  },
};

export default nextConfig;
