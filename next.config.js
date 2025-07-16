/** @type {import('next').NextConfig} */

// const nextConfig = {}

// module.exports = nextConfig

// next.config.js

const withPWA = require('next-pwa')({
  dest: 'public', // required: service worker and precache will be output here
  disable: process.env.NODE_ENV === 'development', // disable in dev mode
})

const nextConfig = {
  // your Next.js config here
  reactStrictMode: true,
  experimental: {
    // optional: for Next.js features
  },
}

module.exports = withPWA(nextConfig)
