export const state = () => ({
    locales: ['en', 'ua', 'ru'],
    locale: 'en'
})

export const mutations = {
    SET_LOCALE(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale
        }
    }
}