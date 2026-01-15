/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // GitHub Pages project repo name
  basePath: "/RibbaPortfolio",
  assetPrefix: "/RibbaPortfolio/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
