<template lang="html">
    <div class="page-intro">
        <h1 class="page-intro__title">{{ title }}</h1>
        <p class="page-intro__introduction" v-if="introduction">{{ introduction }}</p>
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

<style lang="scss">
.page-intro {

    &__title {
        margin-bottom: 20px;
    }

    &__introduction {
        font-size: 20px;
        margin-bottom: 0;
    }
}
</style>
