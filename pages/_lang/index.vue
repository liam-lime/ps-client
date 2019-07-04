<template>
    <div class="page">
        <Section>
            <h1>{{ $t('home.title') }}</h1>
            <p>{{ $t('home.introduction') }}</p>
        </Section>
        <Section>
            <PostList />
        </Section>
        <Section>
            <CallForEmail />
        </Section>
    </div>
</template>

<script>
import Section from "~/components/Section/Section"
import PostList from "~/components/Blog/PostList"
import CallForEmail from "~/components/Banners/CallForEmail"

export default {
    head() {
        return { title: this.$t('home.title') }
    },
    components: {
        Section,
        PostList,
        CallForEmail
    }
    // async fetch ({ store }) {
    //     if (!store.getters['blog/posts'].length) {
    //         await store.dispatch('blog/GET_POSTS')
    //     }
    // }
}
</script>
