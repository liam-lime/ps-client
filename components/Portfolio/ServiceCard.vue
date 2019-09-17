<template lang="html">
    <div class="service-card">
        <h3 class="service-card__title">{{ service.title }}</h3>
        <p class="service-card__content">{{ service.content }}</p>
    </div>
</template>

<script>
export default {
    props: {
        service: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.service-card {

    &__content {
        color: $color-text-secondary;
    }
}
</style>
