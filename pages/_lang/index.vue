<template>
    <div class="page">
        <Section
            :borderBottom="true"
        >
            <Container>
                <PageIntro
                    :title="$t('home.title')"
                    :introduction="$t('home.introduction')"
                />
            </Container>
        </Section>
        <Section>
            <Container>
                <PostList />
            </Container>
        </Section>
        <Section
            :backgroundColor="'#F4D386'"
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
import CallForEmail from "~/components/Banners/CallForEmail"

export default {
    head() {
        return { title: this.$t('home.title') }
    },
    components: {
        PageIntro,
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
