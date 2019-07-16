<template lang="html">
    <div class="page-intro">
        <h1>{{ title }}</h1>
        <p v-if="introduction">{{ introduction }}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
            required: true
        },
        introduction: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="css" scoped>
</style>
