<template>
    <div class="page">
        <Section v-border.bottom>
            <Container>
                <h1>{{ $t('about.title') }}</h1>
                <p>{{ $t('about.introduction') }}</p>
            </Container>
        </Section>
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
        return { title: this.$t('about.title') }
    },
    components: {
        CallForEmail
    }
}
</script>
