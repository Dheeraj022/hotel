import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "*.preview.c40.airoapp.ai",
    "*.airoapp.ai",
    "yyon9bieiw.preview.c40.airoapp.ai",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
      },
    ],
  },
};

export default nextConfig;
