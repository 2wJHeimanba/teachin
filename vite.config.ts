import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
// import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers:[ElementPlusResolver()],
    })
  ],
  server: {
    proxy: {
      // 字符串简写写法
      // '/foo': 'http://localhost:4567/foo',
      // 选项写法
      '/api': {
        target: 'http://yxj.51job.com',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
      // 正则表达式写法
      // '^/fallback/.*': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/fallback/, '')
      // }
    }
  }
})
