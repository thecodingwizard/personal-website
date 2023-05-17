module.exports = {
  async redirects() {
    return [
      {
        source: '/usaco-classes',
        destination: 'https://classes.thecodingwizard.me/',
        permanent: false,
      },
    ]
  },
  experimental: {
    serverActions: true,
  },
}