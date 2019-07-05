<template>
    <div class="banner">
        <h2>Interested in doing a project together?</h2>
        <Button :onClick="onClickEmailButton">Email me</Button>
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
