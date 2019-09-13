import Vue from 'vue'

const OPTIONS = {
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

Vue.prototype.$routes = OPTIONS
