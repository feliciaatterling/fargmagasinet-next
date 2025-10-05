import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/uc**", // matches /uc?export=view&id=...
      },
    ],
  },
};

module.exports = nextConfig;
