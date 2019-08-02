<template>
    <div class="banner">
        <h2>{{ $t('banners.interested-in-doing-a-project-together') }}</h2>
        <Button :onClick="onClickEmailButton">{{ $t('buttons.email-me') }}</Button>
    </div>
</template>

<script>
export default {
    methods: {
        onClickEmailButton() {
            console.log('Test Button Clicked!')
        }
    }
}
</script>

<style lang="scss">
.banner {
    text-align: center;
}
</style>
