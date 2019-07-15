<template>
    <div class="single-post">
        <h1>{{ post.title }}</h1>
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
