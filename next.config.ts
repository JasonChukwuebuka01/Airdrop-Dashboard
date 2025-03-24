import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    domains: ['app.despeed.net','localhost'], // Add your external domain here
  },
};

export default nextConfig;
