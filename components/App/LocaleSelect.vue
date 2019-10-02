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
            var path = ''
            if (this.$store.getters['lang/LOCALE'] === 'en') {
                path = this.$route.fullPath
                path = '/' + locale + path
            } else if (locale === 'en') {
                return this.$route.fullPath.replace(/^\/[^\/]+/, '')
            } else {
                path = this.$route.fullPath.replace(/^\/[^\/]+/, '')
                path = '/' + locale + path
            }
            return path
        }
    }
}
</script>

<style lang="scss">
.locale-select {}
</style>
