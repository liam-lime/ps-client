import Vue from 'vue'

const ROUTES = {
    home: {
        path: '/'
    },
    about: {
        path: '/about'
    },
    blog: {
        path: '/blog',
    }
}

Vue.prototype.$routes = ROUTES
