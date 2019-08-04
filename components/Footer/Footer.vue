<template lang="html">
    <footer class="footer">
        <Section>
            <Container>
                <span>Made by Nazar Lynovetsky</span>
                <IconBase
                    :width="$css.icon.size.default"
                    :height="$css.icon.size.default"
                    :iconColor="$css.color.purple"
                    :iconName="$t('icons.eye')"
                ><IconEye /></IconBase>
            </Container>
        </Section>
    </footer>
</template>

<style lang="scss">
.footer {
    text-align: center;
}
</style>
