/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true, // Partial Prerendering
    after: true, // After Response
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default nextConfig