const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    require('precss'),
    require('autoprefixer'),
    ...process.env.HUGO_ENVIRONMENT === 'production'
      ? [purgecss]
      : []
  ]
}
