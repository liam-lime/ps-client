<template>
    <div class="page">
        <Section>
            <Container>
                <h1>{{ $t('home.title') }}</h1>
                <p>{{ $t('home.introduction') }}</p>
            </Container>
        </Section>
        <Section>
            <Container>
                <PostList />
            </Container>
        </Section>
        <Section :backgroundColor="'#ff0000'">
            <Container>
                <CallForEmail />
            </Container>
        </Section>
    </div>
</template>

<script>
import PostList from "~/components/Blog/PostList"
import CallForEmail from "~/components/Banners/CallForEmail"

export default {
    head() {
        return { title: this.$t('home.title') }
    },
    components: {
        PostList,
        CallForEmail
    }
    // async fetch ({ store }) {
    //     if (!store.getters['blog/POSTS'].length) {
    //         await store.dispatch('blog/GET_POSTS')
    //     }
    // }
}
</script>
