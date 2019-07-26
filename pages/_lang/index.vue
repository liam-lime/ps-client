<template>
    <div class="page">
        <Section>
            <Container>
                <PageIntro
                    :title="$t('home.title')"
                    :introduction="$t('home.introduction')"
                />
            </Container>
        </Section>
        <Section>
            <Container>
                <PostList #default="{ post }">
                    <PostCard :post="post" />
                </PostList>
            </Container>
        </Section>
        <Section
            v-background="$css.color.background.lightGray"
            v-border.top.bottom
        >
            <Container>
                <CallForEmail />
            </Container>
        </Section>
    </div>
</template>

<script>
import PageIntro from "~/components/Page/PageIntro"
import PostList from "~/components/Blog/PostList"
import PostCard from "~/components/Blog/PostCard"
import CallForEmail from "~/components/Banners/CallForEmail"

export default {
    head() {
        return { title: this.$t('home.title') }
    },
    components: {
        PageIntro,
        PostList,
        PostCard,
        CallForEmail
    }
    // async fetch ({ store }) {
    //     if (!store.getters['blog/POSTS'].length) {
    //         await store.dispatch('blog/GET_POSTS')
    //     }
    // }
}
</script>
