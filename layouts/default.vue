<template>
    <div class="app-wrapper">
        <App>
            <Header />
            <Sidebar />
            <main class="main" role="main">
                <Nuxt />
            </main>
            <Footer />
        </App>
    </div>
</template>

<script>
import App from "~/components/App/App"
import Sidebar from "~/components/Layout/Sidebar"
import Header from "~/components/Layout/Header"
import Footer from "~/components/Layout/Footer"

export default {
    components: {
        App,
        Sidebar,
        Header,
        Footer
    }
}
</script>

<style lang="scss">
.main {
    padding-top: 67px;

    @include desktop {
        padding-top: 88px;
    }
}
</style>
