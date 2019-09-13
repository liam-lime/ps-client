<template>
    <div class="page">
        <Section>
            <Container :maxWidth="$container.maxWidth.small">
                <SinglePost />
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
    created() {
        this.$store.commit('page/SET_TITLE', this.$t('blog.page-title'))
    }
}
</script>
