const cssnano = require('cssnano')

module.exports = {
  plugins: [
    require('precss'),
    require('autoprefixer'),
    ...process.env.HUGO_ENVIRONMENT === 'production'
      ? [cssnano]
      : []
  ]
}
