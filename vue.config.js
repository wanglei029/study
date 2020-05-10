module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'styles': '@/assets/styles',
                'components': '@/components',
                'router': '@/router',
                'views': '@/views',
                'store': '@/store',
            }
        }
    },
    devServer: {
        proxy: {
          '/api': {
            target: 'http://127.0.0.1:8080',
            pathRewrite: {
              '^/api': '/mock/'
            }
          }
        }
      }
}