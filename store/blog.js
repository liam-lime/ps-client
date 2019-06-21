import BlogPostsApi from '../services/api/BlogPosts'

export const state = () => ({
    posts: [],
    post: {}
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
