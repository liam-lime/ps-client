<template>
    <div class="container" :style="cssProperties">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        maxWidth: {
            type: String,
            default: '1330px'
        }
    },
    computed: {
        cssProperties() {
            return {
                'max-width': this.maxWidth
            }
        }
    }
}
</script>

<style lang="scss">
.container {
    box-sizing: border-box;
    width: 100%;
    padding: 0 7%;
    margin-right: auto;
    margin-left: auto;
}
</style>
