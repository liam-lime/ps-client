<template lang="html">
    <div class="technology-card">
        <h3 class="technology-card__title">{{ technology.title }}</h3>
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

}
</style>
