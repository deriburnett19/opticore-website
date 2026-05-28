/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: '/work/carhub-barbados',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
