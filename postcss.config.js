module.exports = {
  plugins: [
    require('postcss-import'),
    // 支援 CSS 巢狀
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
