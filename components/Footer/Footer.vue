<template lang="html">
    <footer class="footer">
        <Section>
            <Container>
                <span>Made by Nazar Lynovetsky</span>
                <IconBase
                    :width="$icon.size.base"
                    :height="$icon.size.base"
                    :iconColor="$icon.color.base"
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
