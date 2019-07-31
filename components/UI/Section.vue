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
            default: '50px'
        }
    },
    computed: {
        cssProperties() {
            return {
                'padding-top': this.padding,
                'padding-bottom': this.padding
            }
        }
    }
}
</script>
