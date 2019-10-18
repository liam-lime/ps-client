<template lang="html">
    <div class="service-card text-content">
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
.service-card {}
</style>
