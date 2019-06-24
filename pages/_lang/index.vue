<template>
    <div class="page">
        <Section>
            <h1 class="Content__Title">{{ $t('home.title') }}</h1>
            <p>{{ $t('home.introduction') }}</p>
        </Section>
        <Section>
            <PostList />
        </Section>
    </div>
</template>

<script>
import Section from "~/components/Section/Section"
import PostList from "~/components/Blog/PostList"

export default {
    head() {
        return { title: this.$t('home.title') }
    },
    components: {
        Section,
        PostList
    }
    // async fetch ({ store }) {
    //     if (!store.getters['blog/posts'].length) {
    //         await store.dispatch('blog/GET_POSTS')
    //     }
    // }
}
</script>
