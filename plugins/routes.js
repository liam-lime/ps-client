import Vue from 'vue'

Vue.prototype.$routes = {
    home: {
        path: '/',
        name: 'home'
    },
    about: {
        path: '/about',
        name: 'about'
    },
    blog: {
        path: '/blog',
        name: 'blog'
    }
}
