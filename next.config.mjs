/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/RibbaPortfolio",
  assetPrefix: "/RibbaPortfolio/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
