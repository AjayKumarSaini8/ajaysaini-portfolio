import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@chakra-ui/react', 'react-icons', 'framer-motion'],
  },
};

export default nextConfig;