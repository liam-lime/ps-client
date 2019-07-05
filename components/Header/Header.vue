<template>
    <header class="header">
        <div class="header__inner container">
            <Logo />
            <nav class="menu">
              <NuxtLink :to="$i18n.path('')" class="menu__link" exact>
                {{ $t('links.home') }}
              </NuxtLink>
              <NuxtLink :to="$i18n.path('about')" class="menu__link" exact>
                {{ $t('links.about') }}
              </NuxtLink>
            </nav>
        </div>
    </header>
</template>

<script>
import Section from "~/components/Section/Section"
import Logo from "~/components/Logo/Logo"

export default {
    components: {
        Section,
        Logo
    }
}
</script>

<style lang="scss">
.header {
    padding: 20px 0;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .05);

    &__inner {
        display: flex;
        justify-content: space-between;
    }
}
</style>
