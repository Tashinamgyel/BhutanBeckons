import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    localPatterns: [{ pathname: "/images/**" }],
  },
};

export default nextConfig;
