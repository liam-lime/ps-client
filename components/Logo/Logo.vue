<template>
    <div class="logo" v-hammer:swipe.left="onSwipeLeft"><span>NL</span></div>
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
    padding: 0 4px;
    background: $color-cheese;
    color: $color-white;
    line-height: 1;
    width: 45px;
    height: 45px;
    letter-spacing: 2px;
    font-size: 20px;
    font-family: $font-family-secondary;
    font-weight: 700;
    line-height: 1;
}
</style>
