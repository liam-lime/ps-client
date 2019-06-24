import BlogPostsApi from '../services/api/BlogPosts'

export const state = () => ({
    posts: {
        en: [
            {title: "3 Amazing Ways To Write Simple Code EN", slug: "3-amazing-ways-to-write-simple-code-en"},
            {title: "Error/Exception handling in Vue.js application EN", slug: "error-exception-handling-in-vue-js-application-en"},
            {title: "Why Text Buttons Hurt Mobile Usability EN", slug: "why-text-buttons-hurt-mobile-usability-en"}
        ],
        ua: [
            {title: "3 Amazing Ways To Write Simple Code UA", slug: "3-amazing-ways-to-write-simple-code-ua"},
            {title: "Error/Exception handling in Vue.js application UA", slug: "error-exception-handling-in-vue-js-application-ua"},
            {title: "Why Text Buttons Hurt Mobile Usability UA", slug: "why-text-buttons-hurt-mobile-usability-ua"}
        ],
        ru: [
            {title: "3 Amazing Ways To Write Simple Code RU", slug: "3-amazing-ways-to-write-simple-code-ru"},
            {title: "Error/Exception handling in Vue.js application RU", slug: "error-exception-handling-in-vue-js-application-ru"},
            {title: "Why Text Buttons Hurt Mobile Usability RU", slug: "why-text-buttons-hurt-mobile-usability-ru"}
        ]
    }
})

export const mutations = {
    SET_POSTS (state, posts) {
        state.posts = posts
    }
}

export const actions = {
    async GET_POSTS ({ commit }) {
        const response = await BlogPostsApi.getPosts()
        commit('SET_POSTS', response.data)
    }
}

export const getters = {
    posts (state) {
        return state.posts
    }
}
