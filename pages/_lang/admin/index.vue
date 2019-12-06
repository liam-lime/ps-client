<template>
    <div class="page">
        <Section :padding="$mq | mq({ tabletBig: $padding.big })" v-border.bottom>
            <Container>
                <h1>Admin Panel</h1>
            </Container>
        </Section>
    </div>
</template>

<script>
import PageIntro from "~/components/Page/PageIntro"
import PostCard from "~/components/Blog/PostCard"
import CallForEmail from "~/components/Banners/CallForEmail"

export default {
    head() {
        return { title: 'Admin Panel' }
    }
}
</script>