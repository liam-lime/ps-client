<template>
    <button
        type="button"
        class="button"
        @click="onClick"
    >
        <slot>Button</slot>
    </button>
</template>

<script>
// source: https://codeburst.io/creating-reusable-components-with-vue-js-button-component-503167facfde
export default {
    props: {
        onClick: {
            type: Function,
            required: true
        }
    }
}
</script>
