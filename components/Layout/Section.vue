<template>
    <div class="section" :style="cssProperties">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        backgroundColor: {
            type: String,
            default: 'transparent'
        }
    },
    computed: {
        cssProperties() {
            return {
                'background-color': this.backgroundColor
            }
        }
    }
}
</script>

<style lang="scss">
.section {
    padding: 50px 0;
    border-bottom: 1px solid $base-border-color;

    &--light-gray {
        background: $light-gray-background-color;
    }

    &--tight {

        & .container {
            max-width: 1024px;
        }
    }
}
</style>
