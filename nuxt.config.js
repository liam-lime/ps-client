module.exports = {
    head: {
        title: 'client',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    modules: ['@nuxtjs/style-resources'],
    styleResources: {
        scss: [
            'assets/scss/main.scss'
        ]
    },
    loading: { color: '#3B8070' },
    router: {
        middleware: 'i18n'
    },
    plugins: [
        { src: '~/plugins/i18n' },
        { src: '~/plugins/axios' },
        { src: '~/plugins/hammer', ssr: false }
    ],
    generate: {
        routes: [
            '/',
            '/about',
            '/blog',

            '/ua',
            '/ua/about',
            '/ua/blog',

            '/ru',
            '/ru/about',
            '/ru/blog'
        ]
    },
    build: {
        /*
        ** Run ESLint on save
        */
        extend (config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}
