module.exports = {
  publicPath: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://quote.vstonehk.com/vtech-quotation-prod/',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
