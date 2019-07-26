<template>
    <div class="page">
        <Section>
            <Container>
                <SinglePost />
            </Container>
        </Section>
        <Section v-background="$css.color.general.primary">
            <Container>
                <CallForEmail />
            </Container>
        </Section>
    </div>
</template>

<script>
import SinglePost from "~/components/Blog/SinglePost"
import CallForEmail from "~/components/Banners/CallForEmail"

export default {
    head() {
        return { title: 'Single Post' }
    },
    components: {
        SinglePost,
        CallForEmail
    }
}
</script>
