/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com']
  },
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig 