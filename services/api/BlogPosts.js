import { HTTP } from '~/plugins/axios'

export default {
    async getPosts () {
        const posts = await HTTP.get('/posts')
        return posts
    }
}
