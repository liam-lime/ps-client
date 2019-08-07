<template>
    <div class="page-title">{{ title }}</div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
.page-title {
    font-size: 20px;
    line-height: 1;
}
</style>
