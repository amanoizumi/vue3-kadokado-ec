import path from 'path';
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
// 讓 icon 元件也能自動引入
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  // 相對路徑的 .. 閱讀起來會很雜亂，
  // 所以改成從 src 開始的絕對路徑別名
  resolve : {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  // 靜態網頁部屬名稱
  base:'/vue3-kadokado-ec/',
  plugins: [
    Vue(),
    Components({
      // 可以設定你想讓哪個資料夾的元件可以被其他元件自動引入
      dirs: ['src/components'],
      resolvers: IconsResolver({
        // 設定：把引入的 icon 的前綴詞 i 拿掉也能使用，較為便利 (預設需要有前綴詞 'i')
        prefix: false,
        // 限定你要引入的 icon 庫，會自動掃描你需要的做打包
        enabledCollections: ['heroicons-solid', 'heroicons-outline', 'mdi'],
      }),
    }),
    Icons(),
  ],
})
