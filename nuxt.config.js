module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'personalsite',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nazar Lynovetsky personal site.' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
    ** Customize the progress bar color
    */
    loading: { color: '#3B8070' },
    /*
    ** Build configuration
    */
    build: {
        vendor: ['vue-i18n'] // webpack vue-i18n.bundle.js
    },
    router: {                // customize nuxt.js router (vue-router).
        middleware: 'i18n'   // middleware all pages of the application
    },
    plugins: ['~/plugins/i18n.js'],
    generate: {
        routes: ['/', '/about', '/fr', '/fr/about']
    }
}
