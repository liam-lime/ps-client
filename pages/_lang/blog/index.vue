<template>
    <div class="page">
        <Section>
            <PostList />
        </Section>
        <Section :class="'section--light-gray'">
            <CallForEmail />
        </Section>
    </div>
</template>

<script>
import Section from "~/components/Section/Section"
import PostList from "~/components/Blog/PostList"
import CallForEmail from "~/components/Banners/CallForEmail"

export default {
    head() {
        return { title: 'Post List' }
    },
    components: {
        Section,
        PostList,
        CallForEmail
    }
}
</script>
