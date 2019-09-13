<template>
    <div class="page">
        <Section :padding="$mq | mq({ tabletBig: $padding.big })" v-border.bottom>
            <Container>
                <PageIntro :title="$t('about.title')" :introduction="$t('about.introduction')" />
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
        return { title: this.$t('about.title') }
    },
    components: {
        PageIntro,
        CallForEmail
    },
    created() {
        this.$store.commit('page/SET_TITLE', this.$t('about.title'))
    }
}
</script>
