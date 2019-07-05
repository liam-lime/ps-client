<template>
    <div class="page">
        <Section>
            <SinglePost />
        </Section>
        <Section :class="'section--light-gray'">
            <CallForEmail />
        </Section>
    </div>
</template>

<script>
import Section from "~/components/Section/Section"
import SinglePost from "~/components/Blog/SinglePost"
import CallForEmail from "~/components/Banners/CallForEmail"

export default {
    head() {
        return { title: 'Single Post' }
    },
    components: {
        Section,
        SinglePost,
        CallForEmail
    }
}
</script>
