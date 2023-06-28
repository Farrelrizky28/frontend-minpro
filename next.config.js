/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
  env: {
    API_URL: "http://localhost:3001",
    imageUser: "http://localhost:3001/users",
  },
}

module.exports = nextConfig
