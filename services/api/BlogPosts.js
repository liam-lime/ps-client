import { HTTP } from '~/plugins/modules/axios'

export default {

    /**
     * Fetch a blog posts data items list.
     *
     * @return {Promise}
    **/

    async getPosts() {
        const posts = await HTTP.get('/posts')
        return posts
    },



    /**
     * Fetch a blog post data with given id.
     *
     * @param {Number} id
     * @return {Promise}
    **/

    async getPost(postId) {
        const post = await HTTP.get(`/posts/${postId}`)
        return post
    }
}
