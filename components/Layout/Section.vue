<template>
    <div class="section" :style="cssProperties">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        padding: {
            type: Number,
            default: 50
        }
    },
    computed: {
        cssProperties() {
            return {
                'padding-top': `${this.padding}px`,
                'padding-bottom': `${this.padding}px`,
            }
        }
    }
}
</script>
