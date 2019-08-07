<template>
    <div class="page">
        <Section :padding="$mq | mq({ tabletBig: $css.padding.big })" v-border.bottom>
            <Container>
                <PageIntro :title="$t('home.title')" :introduction="$t('home.introduction')" />
            </Container>
        </Section>
        <Section>
            <Container>
                <SectionHeader />
                <List :items="posts" #default="{ item }">
                    <PostCard :post="item" />
                </List>
            </Container>
        </Section>
        <Section v-background="$css.color.cheese">
            <Container>
                <CallForEmail />
            </Container>
        </Section>
    </div>
</template>

<script>
import PageIntro from "~/components/Page/PageIntro"
import PostCard from "~/components/Blog/PostCard"
import CallForEmail from "~/components/Banners/CallForEmail"

export default {
    head() {
        return { title: this.$t('home.title') }
    },
    components: {
        PageIntro,
        PostCard,
        CallForEmail
    },
    computed: {
        posts () {
            return this.$store.getters['blog/POSTS'](this.$store.getters['lang/LOCALE'])
        }
    }
    // async fetch ({ store }) {
    //     if (!store.getters['blog/POSTS'].length) {
    //         await store.dispatch('blog/GET_POSTS')
    //     }
    // }
}
</script>
