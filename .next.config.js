module.exports = {
  env: {
    IS_MAINTENANCE_MODE: process.env.IS_MAINTENANCE_MODE,
  }, 
  async redirects() {
    return [
      {
        source: '/*',
        destination: '/',
        permanent: true,
      },
    ]
  },
}