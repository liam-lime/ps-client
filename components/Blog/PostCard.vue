<template>
    <div class="post-card" @click="onOpenPost(post.slug)">
        <h3>{{ post.title }}</h3>
        <div v-html="post.content"></div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        onOpenPost(slug) {
            this.$router.push(`/${this.$store.getters['lang/LOCALE']}/blog/${slug}`)
        }
    }
}
</script>
