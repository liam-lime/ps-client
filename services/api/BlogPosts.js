import { HTTP } from '~/plugins/axios'

export default {

    async getPosts () {
        const posts = await HTTP.get('/posts')
        return posts
    },

    async getPost (postId) {
        const post = await HTTP.get(`/posts/${postId}`)
        return post
    }
}