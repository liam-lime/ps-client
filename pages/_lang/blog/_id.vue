<template>
    <div class="page">
        <Section>
            <h1>Single Post</h1>
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
        return { title: 'Single Post' }
    },
    components: {
        Section,
        CallForEmail
    }
}
</script>
