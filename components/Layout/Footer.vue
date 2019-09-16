<template lang="html">
    <footer class="footer">
        <Section>
            <Container>
                <div class="footer__inner">
                    <div class="footer__item">
                        <span>{{ $t('footer.copyright') }}</span>
                    </div>
                    <div class="footer__item">
                        <LocaleSelect />
                    </div>
                </div>
            </Container>
        </Section>
    </footer>
</template>

<script>
import LocaleSelect from "~/components/App/LocaleSelect"

export default {
    components: {
        LocaleSelect
    }
}
</script>

<style lang="scss">
.footer__inner {
    display: flex;
    justify-content: space-between;
}
</style>
