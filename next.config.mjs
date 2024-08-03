/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '1.5mb'
    }
  },
  reactStrictMode: false
};

export default nextConfig;
