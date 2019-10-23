<template lang="html">
    <div class="technology-card text-content">
        <h3 class="technology-card__title">{{ technology.title }}</h3>
        <iconBase class="technology-card__image" :width="160" :height="160">
            <component :is="technology.iconName"></component>
        </IconBase>
    </div>
</template>

<script>
export default {
    props: {
        technology: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.technology-card {
    background-color: $color-light-gray;
    padding: 15px 10px 45px;
    position: relative;
    overflow: hidden;

    &__image {
        transform: rotate(20deg);
        position: absolute;
        bottom: -40px;
        right: -40px;
    }
}
</style>
