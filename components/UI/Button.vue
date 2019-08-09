<template>
    <button
        type="button"
        class="button"
        :class="{'button--icon': view === 'icon'}"
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
    padding: 13px 20px 14px;
    border: none;
    border-radius: 5px;
    font-weight: 300;
    cursor: pointer;
    vertical-align: middle;

    &--icon {
        padding: 5px;
        background: $color-light-gray;
    }
}
</style>
