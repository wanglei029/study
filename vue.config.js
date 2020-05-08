module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'styles': '@/assets/styles',
                'components': '@/components',
                'router': '@/router',
                'views': '@/views',
            }
        }
    }
}