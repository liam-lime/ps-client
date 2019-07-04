<template>
    <div class="page">
        <Section>
            <h1>{{ $t('about.title') }}</h1>
            <p>{{ $t('about.introduction') }}</p>
        </Section>
        <Section :class="'section--light-gray'">
            <CallForEmail />
        </Section>
    </div>
</template>

<script>
import Section from "~/components/Section/Section"
import CallForEmail from "~/components/Banners/CallForEmail"

export default {
    head() {
        return { title: this.$t('about.title') }
    },
    components: {
        Section,
        CallForEmail
    }
}
</script>
