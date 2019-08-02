<template>
    <div class="section" :style="cssProperties">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        padding: {
            type: String,
            default: ''
        }
    },
    computed: {
        cssProperties() {
            if (!this.padding) return {}
            return {
                'padding-top': this.padding,
                'padding-bottom': this.padding
            }
        }
    }
}
</script>

<style lang="scss">
.section {
    padding-top: 50px;
    padding-bottom: 50px;
}
</style>
