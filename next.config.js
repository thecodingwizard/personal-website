module.exports = {
  async redirects() {
    return [
      {
        source: '/usaco-classes',
        destination: '/',
        permanent: false,
      },
    ]
  },
}