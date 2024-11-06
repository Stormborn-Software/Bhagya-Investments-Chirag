/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com']
  },
  basePath: '/Chirag-Nagar-Portfolio',
  assetPrefix: '/Chirag-Nagar-Portfolio/',
}

module.exports = nextConfig 