<template>
    <div class="app">
        <Header />
        <Sidebar />
        <main class="main" role="main">
            <Nuxt />
        </main>
        <Footer />
    </div>
</template>

<script>
import Sidebar from "~/components/Layout/Sidebar"
import Header from "~/components/Layout/Header"
import Footer from "~/components/Layout/Footer"

export default {
    components: {
        Sidebar,
        Header,
        Footer
    }
}
</script>

<style lang="scss">
.main {
    padding-top: 66px;

    @include desktop {
        padding-top: 86px;
    }
}
</style>
