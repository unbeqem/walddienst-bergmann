import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/über",
        destination: "/ueber",
        permanent: true,
      },
      {
        source: "/%C3%BCber",
        destination: "/ueber",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
