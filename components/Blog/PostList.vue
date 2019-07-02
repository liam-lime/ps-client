<template>
    <div class="post-list">
        <template v-if="!posts.length">
            <h3>Posts not found.</h3>
        </template>
        <template v-if="posts.length">
            <PostCard
                v-for="post in posts"
                :key="post.slug"
                :post="post"
            />
        </template>
    </div>
</template>

<script>
import PostCard from "~/components/Blog/PostCard"

export default {
    components: {
        PostCard
    },
    computed: {
        posts () {
            return this.$store.getters['blog/posts']
        }
    }
}
</script>
