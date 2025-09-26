module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
    cssnano: process.env.JEKYLL_ENV == 'production' ? { preset: 'default' } : false,
  }
}