// 導出 Tailwind 預設顏色
const colors = require('tailwindcss/colors');
// 導出 Tailwind 預設字型
const { fontFamily } = require('tailwindcss/defaultTheme');


module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      // 可針對你的專案去選擇配色
      // 以下為替換掉預設顏色的方式
      colors: {
        // 把預設的 gray 顏色指向改為 zinc 的顏色 (詳細可見官方調色盤的名稱)
        // 如果有自己客製的主題色野最好放在 extend，避免整個預設的顏色物件覆蓋掉
        // 除非你很肯定你需要的顏色就是某幾種。

        // 想客製化標準可參照 https://www.tailwindshades.com/ 來設定你想要的顏色
        'gray': colors.zinc,
      },
      fontFamily: {
        sans: ['Noto Sans TC', ...fontFamily.sans],
        serif: ['Noto Serif TC', ...fontFamily.serif],
        display: ['Cinzel Decorative'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
