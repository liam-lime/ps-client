<template>
    <div class="page">
        <Section>
            <h1>Single Post</h1>
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
        return { title: 'Single Post' }
    },
    components: {
        Section,
        CallForEmail
    }
}
</script>
