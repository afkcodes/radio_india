/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'a10.gaanacdn.com', 'cdn.statically.io'],
  },
};

module.exports = nextConfig;
