<template>
    <header class="section-header" v-if="Object.keys(link).length || title">
        <h2 class="section-header__title" v-if="title">{{ title }}</h2>
        <p class="section-header__content" v-if="Object.keys(link).length">
            <NuxtLink :to="link.to" class="section-header__link" exact>
              {{ link.text }}
            </NuxtLink>
        </p>
    </header>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        link: {
            type: Object,
            default: () => new Object()
        }
    }
}
</script>

<style lang="scss">
.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    &__title {
        margin: 0;
    }

    &__content {
        margin: 0;
    }

    @include tablet {
        margin-bottom: 30px;
    }

    @include tablet {
        margin-bottom: 40px;
    }
}
</style>
