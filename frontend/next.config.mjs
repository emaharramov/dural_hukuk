/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "www.duralhukuk.com",
      "localhost",
      "localhost:3001",
      "localhost:3000",
    ],
  },
};

export default nextConfig;
