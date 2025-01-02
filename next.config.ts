import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Matches all external hosts
      },
      {
        protocol: 'http',
        hostname: '**', // Matches all external hosts over HTTP
      },
    ],
    domains: ['*'], // Accepts any domain
    unoptimized: true, // Allows unoptimized images for more flexibility
  },
};

export default nextConfig;