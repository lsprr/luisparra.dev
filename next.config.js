/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePath: [path.join(__dirname, 'sass')]
  }
}

module.exports = nextConfig
