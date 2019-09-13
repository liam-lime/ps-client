module.exports = {
    head: {
        title: 'client',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=EB+Garamond:400,400i,500,500i,600,600i,700,700i,800,800i|Noto+Sans+SC:100,300,400,500,700,900&display=swap&subset=cyrillic' }
        ]
    },
    modules: [
        '@nuxtjs/style-resources'
    ],
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
        // Injections
        { src: '~/plugins/injections/routes' },
        { src: '~/plugins/injections/padding' },
        { src: '~/plugins/injections/button' },
        { src: '~/plugins/injections/color' },
        { src: '~/plugins/injections/container' },

        // NPM modules
        { src: '~/plugins/modules/axios' },
        { src: '~/plugins/modules/mq' },
        { src: '~/plugins/modules/i18n' },
        { src: '~/plugins/modules/hammer', mode: 'client' },

        // Global components
        { src: '~/plugins/globalComponents/general' },
        { src: '~/plugins/globalComponents/icons' },

        // Directives
        { src: '~/plugins/directives/background' },
        { src: '~/plugins/directives/border' },

    ],
    build: {
        vendor: [
            'axios'
        ],
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
