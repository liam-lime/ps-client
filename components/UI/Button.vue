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
export default {
    props: {
        view: {
            type: String,
            default: 'button'
        },
        onClick: {
            type: Function,
            required: true
        }
    }
}
</script>

<style lang="scss">
.button {
    color: $color-lightest-gray;
    background: $color-purple;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    font-weight: 300;
    cursor: pointer;
}
</style>
