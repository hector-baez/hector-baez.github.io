// vite.config.js
const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ben: resolve(__dirname, 'posts/ben/ben.html')
      }
    }
  }
}