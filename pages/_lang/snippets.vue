<template>
    <div class="page">
        <Section v-border.bottom>
            <Container>
                <SectionHeader :title="'Node.js: Event Loop'" />
                <h3>Section Title</h3>
                <p>Записанный случай.</p>
                <pre>// code</pre>
            </Container>
        </Section>
    </div>
</template>

<script>
import PageIntro from "~/components/Page/PageIntro"

export default {
    head() {
        return { title: this.$t('about.title') }
    },
    components: {
        PageIntro
    },
    created() {
        this.$store.commit('page/SET_TITLE', this.$t('about.page-title'))
    }
}
</script>
