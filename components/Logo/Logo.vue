<template>
    <div class="logo" v-hammer:swipe.left="onSwipeLeft"><span class="logo__inner">Nazar Lynovetsky</span></div>
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
    background: #d5e985;
    color: #fff;
}
</style>
