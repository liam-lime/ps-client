<template>
    <header class="header">
        <Section>
            <Logo />
            <nav class="menu">
              <NuxtLink :to="$i18n.path('')" class="menu__link" exact>
                {{ $t('links.home') }}
              </NuxtLink>
              <NuxtLink :to="$i18n.path('about')" class="menu__link" exact>
                {{ $t('links.about') }}
              </NuxtLink>
            </nav>
        </Section>
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
