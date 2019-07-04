<template>
    <header class="header">
          <Logo />
          <nav class="menu">
            <NuxtLink :to="$i18n.path('')" class="menu__link" exact>
              {{ $t('links.home') }}
            </NuxtLink>
            <NuxtLink :to="$i18n.path('about')" class="menu__link" exact>
              {{ $t('links.about') }}
            </NuxtLink>
          </nav>
    </header>
</template>

<script>
import Logo from "~/components/Logo/Logo"

export default {
    components: {
        Logo
    }
}
</script>

<style lang="scss">
.header {
    display: flex;
    justify-content: space-between;
}
</style>
