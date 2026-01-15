/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/RibbaPortfolio",
  assetPrefix: "/RibbaPortfolio/",

  images: {
    unoptimized: true,
  },

  experimental: {
    appDir: true,
  },

  reactStrictMode: false,
};

export default nextConfig;
