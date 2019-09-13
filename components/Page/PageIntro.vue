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
        margin-bottom: 10px;
    }

    &__introduction {
        font-size: 1.15rem;
        color: $color-text-secondary;
        margin-bottom: 0;
        line-height: 1.4;
    }



    @include tablet {

        &__title {
            margin-bottom: 15px;
        }

        &__introduction {
            font-size: 1.2rem;
        }
    }



    @include desktop {

        &__title {
            margin-bottom: 20px;
        }

        &__introduction {
            font-size: 1.3rem;
        }
    }
}
</style>
