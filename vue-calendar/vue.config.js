const StyleLintPlugin = require('stylelint-webpack-plugin')
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ['**/*.{vue,scss}']
      })
    ]
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/styles/variables.scss";'
      }
    }
  }
})
