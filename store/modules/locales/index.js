// import actions from './actions'
// import getters from './getters'
import mutations from './mutations'

const state = {
    locales: ['en', 'ua', 'ru'],
    locale: 'en'
}

export default {
    namespaced: true,
    state,
    // actions,
    // getters,
    mutations
}
