/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const withSerwist = require("@serwist/next").default({
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
});

module.exports = withSerwist(nextConfig);
