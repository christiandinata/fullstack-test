/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  ...nextConfig,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  output: 'standalone',
  env: {
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRETS,
    AUTH_TOKEN: process.env.AUTH_TOKEN,
  },

  async redirects() {
    return [
      {
        source: '/', // automatically handles all locales
        destination: '/octocat', // automatically passes the locale on
        permanent: false,
      },
    ];
  },
};
