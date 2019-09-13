<template>
    <div class="page">
        <Section :padding="$mq | mq({ tabletBig: $padding.big })" v-border.bottom>
            <Container>
                <PageIntro :title="$t('blog.title')" :introduction="$t('blog.introduction')" />
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
import CallForEmail from "~/components/Banners/CallForEmail"

export default {
    head() {
        return { title: 'Post List' }
    },
    components: {
        PageIntro,
        CallForEmail
    },
    created() {
        this.$store.commit('page/SET_TITLE', this.$t('blog.page-title'))
    }
}
</script>
