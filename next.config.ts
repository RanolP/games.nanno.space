import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    // @ts-expect-error - instrumentationHook is needed for runtime migrations
    instrumentationHook: true,
  },
};

export default nextConfig;
