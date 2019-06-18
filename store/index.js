import Vue from 'vue'
import Vuex from 'vuex'
// modules
import locales from './modules/locales/index'
//import blog from './modules/blog/index'

Vue.use(Vuex)

export const store = () => new Vuex.Store({
    modules: {
        locales
    }
});
