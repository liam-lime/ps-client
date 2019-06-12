<template>
    <div class="app">
        <header class="Header">
            <div class="container">
            <h1 class="Header__Title">
              Nuxt i18n
            </h1>
            <nav class="Header__Menu">
                <NuxtLink :to="$i18n.path('')" class="Header__Link" exact>
                    {{ $t('links.home') }}
                </NuxtLink>
                <NuxtLink :to="$i18n.path('about')" class="Header__Link" exact>
                    {{ $t('links.about') }}
                </NuxtLink>
            </nav>
            </div>
        </header>
        <main class="main">
            <nuxt/>
        </main>
        <footer class="footer">Footer</footer>
    </div>
</template>
