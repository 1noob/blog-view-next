const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/us-coffee-roasters",
        destination: "https://uscoffeeroasters.app",
        permanent: true,
      },
      {
        source: "/experience",
        destination: "/cv",
        permanent: true,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
