<template>
    <div class="app">
        <Menu />
        <Header />
        <main class="main" role="main">
            <Nuxt />
        </main>
        <Footer />
    </div>
</template>

<script>
import Menu from "~/components/Menu/Menu"
import Header from "~/components/Header/Header"
import Footer from "~/components/Footer/Footer"

export default {
    components: {
        Menu,
        Header,
        Footer
    }
}
</script>
