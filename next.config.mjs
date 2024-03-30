/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/nextjs",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
