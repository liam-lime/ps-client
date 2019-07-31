<template>
    <div class="page">
        <Section v-background="$css.color.cheese">
            <Container>
                <CallForEmail />
            </Container>
        </Section>
    </div>
</template>

<script>
import CallForEmail from "~/components/Banners/CallForEmail"

export default {
    head() {
        return { title: 'Post List' }
    },
    components: {
        CallForEmail
    }
}
</script>
