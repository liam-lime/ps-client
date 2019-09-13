<template>
    <div class="page">
        <Section>
            <Container :maxWidth="$container.maxWidth.small">
                <SinglePost :post="post" />
            </Container>
        </Section>
        <Section v-background="$color.cheese">
            <Container>
                <CallForEmail />
            </Container>
        </Section>
    </div>
</template>

<script>
import SinglePost from "~/components/Blog/SinglePost"
import CallForEmail from "~/components/Banners/CallForEmail"

export default {
    head() {
        return { title: 'Single Post' }
    },
    components: {
        SinglePost,
        CallForEmail
    },
    validate({ params, store }) {
        if (store.getters['blog/POST'](store.getters['lang/LOCALE'], params.slug)) {
            return true
        }
        return false
    },
    created() {
        this.$store.commit('page/SET_TITLE', this.$t('blog.page-title'))
    },
    computed: {
        post() {
            return this.$store.getters['blog/POST'](this.$store.getters['lang/LOCALE'], this.$route.params.slug)
        }
    }
}
</script>
