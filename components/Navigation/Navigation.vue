<template>
    <nav class="navigation">
        <ul class="navigation__list">
            <li class="navigation__item">
                <NuxtLink :to="$i18n.path('')" class="menu__link" exact>
                  {{ $t('links.home') }}
                </NuxtLink>
            </li>
            <li class="navigation__item">
                <NuxtLink :to="$i18n.path('about')" class="menu__link" exact>
                  {{ $t('links.about') }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

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
