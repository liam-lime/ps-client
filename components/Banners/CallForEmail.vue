<template>
    <div class="banner">
        <h2>{{ $t('banners.interested-in-doing-a-project-together') }}</h2>
        <Button :onClick="onClickEmailButton">{{ $t('buttons.email-me') }}</Button>
    </div>
</template>

<script>
import Button from "~/components/Button/Button"

export default {
    components: {
        Button
    },
    methods: {
        onClickEmailButton() {
            console.log('Test Button Clicked!')
        }
    }
}
</script>
