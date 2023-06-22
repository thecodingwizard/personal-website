module.exports = {
  async redirects() {
    return [
      {
        source: '/usaco-classes',
        destination: 'https://classes.thecodingwizard.me/',
        permanent: false,
      }
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'tcw.sh',
            },
          ],
          destination: '/l/:path*',
        },
      ],
    }
  },
  experimental: {
    serverActions: true,
  },
}