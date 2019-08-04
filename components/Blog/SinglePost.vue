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

<style lang="scss">
.single-post {

    &__main {
        font-family: 'EB Garamond', serif;
        color: rgba(0, 0, 0, .80);
        font-size: 24px;

        p {
            line-height: 1.5;
        }
    }
}
</style>
