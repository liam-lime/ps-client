<template>
    <div class="single-post">
        <header class="single-post__header">
            <h1>{{ post.title }}</h1>
        </header>
        <div class="single-post__main" v-html="post.content"></div>
        <footer class="single-post__footer">
            <p>Author: Nazar Lynovetsky</p>
        </footer>
    </div>
</template>

<script>
export default {
    computed: {
        post() {
            return this.$store.getters['blog/POST'](this.$store.getters['lang/LOCALE'], this.$route.params.slug)
        }
    }
}
</script>
