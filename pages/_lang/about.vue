<template>
    <div class="page">
        <Section>
            <h1>{{ $t('about.title') }}</h1>
            <p>{{ $t('about.introduction') }}</p>
        </Section>
        <Section style="background: #F3F3F3">
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
