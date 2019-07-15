<template>
    <nav class="navigation">
      <NuxtLink :to="$i18n.path('')" class="menu__link" exact>
        {{ $t('links.home') }}
      </NuxtLink>
      <NuxtLink :to="$i18n.path('about')" class="menu__link" exact>
        {{ $t('links.about') }}
      </NuxtLink>
    </nav>
</template>
