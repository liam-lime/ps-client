//libs
import Vuex from 'vuex'
// modules
import lang from './modules/lang'
import blog from './modules/blog'


const store = () => {
    return new Vuex.Store({
        namespaced: true,
        modules: {
            lang,
            blog
        }
    })
}

export default store
