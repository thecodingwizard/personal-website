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
      // We need this rewrite in beforeFiles, otherwise
      // tcw.sh will still serve the normal homepage
      beforeFiles: [
        {
          source: '/',
          has: [
            {
              type: 'host',
              value: 'tcw.sh',
            },
          ],
          destination: '/l/',
        },
      ]
    }
  },
}