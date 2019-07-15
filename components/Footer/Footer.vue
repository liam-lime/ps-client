<template lang="html">
    <footer class="footer">
        <Section>
            <span>Made by Nazar Lynovetsky</span>
            <IconBase
                :width="$icon.size.base"
                :height="$icon.size.base"
                :iconColor="$icon.color.base"
                :iconName="$t('icons.eye')"
            ><IconEye /></IconBase>
        </Section>
    </footer>
</template>

<script>
import Section from "~/components/Section/Section"

export default {
    components: {
        Section
    }
}
</script>

<style lang="scss">
.footer {
    text-align: center;
}
</style>
