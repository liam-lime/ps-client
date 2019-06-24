<template>
    <div class="post-list">
        <PostCard
            v-for="post in posts"
            :key="post.slug"
            :post="post"
        />
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
