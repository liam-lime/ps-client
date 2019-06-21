<template>
    <div class="app">
        <Header />
        <main class="main" role="main">
            <Nuxt />
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from "~/components/Header/Header"
import Footer from "~/components/Footer/Footer"

export default {
    components: {
        Header,
        Footer
    }
}
</script>
