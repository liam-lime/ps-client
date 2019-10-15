<template>
    <div class="page">
        <Section :padding="$mq | mq({ tabletBig: $padding.big })" v-border.bottom>
            <Container>
                <PageIntro :title="$t('home.title')" />
            </Container>
        </Section>
        <Section v-border.bottom>
            <Container>
                <SectionHeader :title="$t('sections.about-me')" />
                <p>Front End Development is building out the visual components of a website. Using HTML, CSS , and Javascript, I build fast, interactive websites. This also may include integrating a CMS. UI/UX involves planning and iterating a site's structure and layout. Once the proper information architecture is in place, I design the visual layer to create a beautiful user experience. While most of my attention is on interactive projects, I do branding and collateral from time to time. This includes logo design, business cards, and other printed materials.</p>
            </Container>
        </Section>
        <Section v-border.bottom>
            <Container>
                <SectionHeader :title="$t('sections.services')" />
                <List :items="portfolio.services" #default="{ item }">
                    <ServiceCard :service="item" />
                </List>
            </Container>
        </Section>
        <Section>
            <Container>
                <SectionHeader :title="$t('sections.latest-in-blog')" />
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
// mixins
import page from '~/mixins/page'

// components
import PageIntro from "~/components/Page/PageIntro"
import ServiceCard from "~/components/Portfolio/ServiceCard"
import PostCard from "~/components/Blog/PostCard"
import CallForEmail from "~/components/Banners/CallForEmail"

export default {
    mixins: [page],
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
        portfolio() {
            return this.$store.getters['portfolio/PORTFOLIO'](this.$store.getters['lang/LOCALE'])
        },
        posts() {
            return this.$store.getters['blog/POSTS'](this.$store.getters['lang/LOCALE'])
        }
    },
    created() {
        this.setPageTitle(this.$t('home.page-title'))
    }
    // async fetch ({ store }) {
    //     if (!store.getters['blog/POSTS'].length) {
    //         await store.dispatch('blog/GET_POSTS')
    //     }
    // }
}
</script>
