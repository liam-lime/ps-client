<template>
    <header class="section-header">
        <h2 class="section-header__title">Section header</h2>
        <p class="section-header__content"><a href="#">See more</a></p>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    &__title {
        margin: 0;
    }

    &__content {
        margin: 0;
    }

    @include tablet {
        margin-bottom: 30px;
    }

    @include tablet {
        margin-bottom: 40px;
    }
}
</style>
