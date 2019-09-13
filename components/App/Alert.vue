<template lang="html">
    <div class="app-message">
        <p class="app-message__text">{{ text }}</p>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'info'
        },
        text: {
            type: String,
            default: '',
            required: true
        }
    }
}
</script>

<style lang="scss">
.app-message {
    padding: 10px 20px;
    background: $color-gray;

    &__text {
        margin-bottom: 0;
    }
}
</style>
