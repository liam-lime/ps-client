export default {
    loading: { color: 'cyan' },
    router: {
        middleware: 'i18n'
    },
    plugins: [
        '~/plugins/i18n',
        '~/plugins/axios'
    ],
    generate: {
        routes: ['/', '/about', '/ua', '/ua/about', '/ru', '/ru/about']
    }
}
