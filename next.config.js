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
  rewrites() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'tcw.sh',
          },
        ],
        destination: '/l/:path*',
      }
    ]
  },
  experimental: {
    serverActions: true,
  },
}