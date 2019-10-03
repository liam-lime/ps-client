<template lang="html">
    <select class="locale-select" v-model="locale">
        <option value="ru">Русский</option>
        <option value="ua">Украинский</option>
        <option value="en">Английский</option>
    </select>
</template>

<script>
export default {
    data() {
        return {
            locale: this.$store.getters['lang/LOCALE']
        }
    },
    watch: {
        locale(locale) {
            this.changeLocale(locale)
        }
    },
    methods: {
        changeLocale(locale) {
            this.$router.push( this.generatePath(locale) )
        },
        generatePath(locale) {
            if (this.$store.getters['lang/LOCALE'] === 'en') {
                return `/${locale}${this.$route.fullPath}`
            } else if (locale === 'en') {
                return this.$route.fullPath.replace(/^\/[^\/]+/, '')
            } else {
                return `/${locale}${this.$route.fullPath.replace(/^\/[^\/]+/, '')}`
            }
        }
    }
}
</script>

<style lang="scss">
.locale-select {}
</style>
