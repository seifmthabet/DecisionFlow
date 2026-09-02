import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://localhost:3001",
    "192.168.1.35",
  ],
  async redirects() {
    return [
      {
        source: "/",
        destination: "/workflows",
        permanent: false,
      },
    ]
  }
};

export default nextConfig;
