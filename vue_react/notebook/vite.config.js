import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createStyleImportPlugin } from 'vite-plugin-style-import'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), createStyleImportPlugin({
    libs: [
      {
        libraryName: 'zarm',
        esModule: true,
        resolveStyle: (name) => {
          return `zarm/es/${name}/style/css`;
        },
      }
    ]
  })],
  css: {
    modules: {
      localsConvention: 'dashesOnly'
    },
    // preprocessorOptions:{
    //   less:{
    //     javascriptEnabled:true
    //   }
    // }
  },
  resolve: {
    //路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
      'utils': path.resolve(__dirname, './src/utils')
    }
  },
  server: {
    proxy: {
      /**
       *   /api/userInfo 实际请求 http://localhost:5173/api/userInfo
       *   vite运行在5173端口，vite一看发给我的请求以api开头，我帮你转发到target
       */
      '/api': {
        target: 'http://localhost:7001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
//E:\codeStore\workspace\lesson_hm\vue_react\notebook 
// console.log(__dirname)
//E:\codeStore\workspace\lesson_hm\vue_react\notebook\src  
// console.log(path.resolve(__dirname,'./src'))