<template>
    <nav class="navigation">
        <ul class="navigation__list">
            <li class="navigation__item" v-for="link in links" :key="link.id">
                <NuxtLink :to="link.to" class="navigation__link">{{ link.text }}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    id: 1,
                    to: this.$i18n.path(this.$routes.home.path),
                    text: this.$t('links.home')
                },
                {
                    id: 2,
                    to: this.$i18n.path(this.$routes.blog.path),
                    text: this.$t('links.blog')
                },
                {
                    id: 3,
                    to: this.$i18n.path(this.$routes.about.path),
                    text: this.$t('links.about')
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.navigation {

    &__list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
    }

    &__item {
        margin-right: 12px;

        &:last-child {
            margin-right: 0;
        }
    }
}
</style>
