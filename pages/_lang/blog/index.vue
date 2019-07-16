<template>
    <div class="page">
        <Section>
            <Container>
                <PostList />
            </Container>
        </Section>
        <Section>
            <Container>
                <CallForEmail />
            </Container>
        </Section>
    </div>
</template>

<script>
import PostList from "~/components/Blog/PostList"
import CallForEmail from "~/components/Banners/CallForEmail"

export default {
    head() {
        return { title: 'Post List' }
    },
    components: {
        PostList,
        CallForEmail
    }
}
</script>
