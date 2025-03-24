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
      '/api': {
        target: 'http://localhost:3000/api/',
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