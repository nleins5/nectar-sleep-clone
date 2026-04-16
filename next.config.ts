import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'media.residenthome.com',
      },
      {
        protocol: 'https',
        hostname: 'ashleyfurniture.scene7.com',
      },
      {
        protocol: 'https',
        hostname: 'www.slumberland.com',
      },
      {
        protocol: 'https',
        hostname: 'lexingtonoverstockwarehouse.com',
      },
      {
        protocol: 'https',
        hostname: 'www.bynder.raymourflanigan.com',
      },
    ],
  },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
