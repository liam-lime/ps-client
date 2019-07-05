<template>
    <div class="logo" v-hammer:swipe.left="onSwipeLeft"><span>Nazar Lynovetsky</span></div>
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
    padding: 0 4px;
    background: $first-brand-color;
    color: $white-text-color;
    line-height: 1;
}
</style>
