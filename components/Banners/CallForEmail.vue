<template>
    <div class="call-for-email">
        <h2 class="call-for-email__title">{{ $t('banners.interested-in-doing-a-project-together') }}</h2>
        <Button class="call-for-email__button" :onClick="onClickEmailButton">{{ $t('buttons.email-me') }}</Button>
    </div>
</template>

<script>
export default {
    methods: {
        onClickEmailButton() {
            console.log('Email Button Clicked!')
        }
    }
}
</script>

<style lang="scss">
.call-for-email {
    text-align: center;
}
</style>
