import { defineConfig, CSSModulesOptions, CSSOptions, AliasOptions } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: <AliasOptions> {
      '@': path.resolve(__dirname, 'src'),
      'comps': path.resolve(__dirname, 'src/components'),
      'store': path.resolve(__dirname, 'src/store'),
      'router': path.resolve(__dirname, 'src/router'),
      'styles': path.resolve(__dirname, 'src/styles'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'typing': path.resolve(__dirname, 'src/../typing')
    },
  },
  css: <CSSOptions> {
    // css模块化
    modules: <CSSModulesOptions> {
      localsConvention: 'camelCaseOnly'
    },
    // css 全局变量配置
    preprocessorOptions: {
      additionalData: `$main-color-g: #fff;`
    }
  }
})
