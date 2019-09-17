<template>
    <div class="page">
        <Section :padding="$mq | mq({ tabletBig: $padding.big })" v-border.bottom>
            <Container>
                <PageIntro :title="$t('home.title')" />
            </Container>
        </Section>
        <Section v-border.bottom>
            <Container>
                <SectionHeader :title="'Services'" />
                <List :items="services" #default="{ item }">
                    <ServiceCard :service="item" />
                </List>
            </Container>
        </Section>
        <Section>
            <Container>
                <SectionHeader :title="'Latest in blog'" />
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
import ServiceCard from "~/components/Portfolio/ServiceCard"
import PostCard from "~/components/Blog/PostCard"
import CallForEmail from "~/components/Banners/CallForEmail"

export default {
    head() {
        return { title: this.$t('home.title') }
    },
    components: {
        PageIntro,
        ServiceCard,
        PostCard,
        CallForEmail
    },
    computed: {
        about() {
            return this.$store.getters['portfolio/ABOUT'](this.$store.getters['lang/LOCALE'])
        },
        services() {
            return this.$store.getters['portfolio/SERVICES'](this.$store.getters['lang/LOCALE'])
        },
        posts() {
            return this.$store.getters['blog/POSTS'](this.$store.getters['lang/LOCALE'])
        }
    },
    created() {
        this.$store.commit('page/SET_TITLE', this.$t('home.page-title'))
    }
    // async fetch ({ store }) {
    //     if (!store.getters['blog/POSTS'].length) {
    //         await store.dispatch('blog/GET_POSTS')
    //     }
    // }
}
</script>
