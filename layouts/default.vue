<template>
    <div class="app">
        <Header />
        <main class="main">
            <Nuxt />
        </main>
    </div>
</template>

<script>
// components
import Header from "~/components/Header/Header"

export default {
    components: {
        Header
    }
}
</script>
