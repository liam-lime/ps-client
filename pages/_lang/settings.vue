<template>
    <div class="page">
        <Section v-border.bottom>
            <Container>
                <SectionHeader :title="'Settings'" />
                <LocaleSelect />
            </Container>
        </Section>
    </div>
</template>

<script>
import LocaleSelect from "~/components/Lang/LocaleSelect"

export default {
    head() {
        return { title: this.$t('about.title') }
    },
    created() {
        this.$store.commit('page/SET_TITLE', this.$t('about.page-title'))
    },
    components: {
        LocaleSelect
    }
}
</script>
