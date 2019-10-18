<template>
    <NuxtLink :to="$i18n.path($routes.home.path)" class="logo__link">
        <div class="logo" v-hammer:swipe.left="onSwipeLeft">NL</div>
    </NuxtLink>
</template>

<script>
export default {
    methods: {
        onSwipeLeft() {
            console.log('hammer detected!')
        }
    }
}
</script>

<style lang="scss">
.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    background: $color-cheese;
    color: $color-white;
    line-height: 1;
    width: 46px;
    height: 46px;
    letter-spacing: 2px;
    font-size: 20px;
    font-family: $font-family-secondary;
    font-weight: 700;
    line-height: 1;

    &__link {
        color: #FFF;
        text-decoration: none;

        &:hover,
        &:focus {
            outline: 5px solid $color-cheese;
        }
    }
}
</style>
