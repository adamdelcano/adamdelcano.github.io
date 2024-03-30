/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  basePath: "/",
  reactStrictMode: true,
};

module.exports = nextConfig;
