<template>
    <div class="page">
        <Section :padding="$mq | mq({ tabletBig: $padding.big })" v-border.bottom>
            <Container>
                <PageIntro :title="$t('blog.title')" />
            </Container>
        </Section>
        <Section>
            <Container>
                <List :items="posts" #default="{ item }">
                    <PostCard :post="item" />
                </List>
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
import PageIntro from "~/components/Page/PageIntro"
import PostCard from "~/components/Blog/PostCard"
import CallForEmail from "~/components/Banners/CallForEmail"

export default {
    head() {
        return { title: 'Post List' }
    },
    components: {
        PageIntro,
        PostCard,
        CallForEmail
    },
    created() {
        this.$store.commit('page/SET_TITLE', this.$t('blog.page-title'))
    },
    computed: {
        posts () {
            return this.$store.getters['blog/POSTS'](this.$store.getters['lang/LOCALE'])
        }
    }
}
</script>
