<template>
    <div class="single-post">
        <h1>{{ post.title }}</h1>
    </div>
</template>

<script>
export default {
    computed: {
        post() {
            return this.$store.getters['blog/POSTS'](this.$store.getters['lang/LOCALE'], '3-amazing-ways-to-write-simple-code')
        }
    }
}
</script>
