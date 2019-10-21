import { HTTP } from '~/plugins/modules/axios'

export default {

    async getSnippets() {
        const posts = await HTTP.get('/snippets')
        return posts
    },

    async getSnippet(snippetId) {
        const post = await HTTP.get(`/snippets/${snippetId}`)
        return post
    }
}
