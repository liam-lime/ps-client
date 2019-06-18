import HTTP from '~/plugins/axios'

export default {
    async getPosts () {
        const posts = await HTTP.get('/posts')
        return posts
    },

    async getPost (postId) {},

    async createPost (post) {}
}
