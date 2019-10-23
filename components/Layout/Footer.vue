<template lang="html">
    <footer class="footer">
        <Section>
            <Container>
                <div class="footer__inner">
                    <div class="footer__item">
                        <span>{{ $t('footer.copyright') }}</span>
                    </div>
                </div>
            </Container>
        </Section>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    background: $color-white;

    &__inner {
        display: flex;
        justify-content: space-between;
    }
}
</style>
