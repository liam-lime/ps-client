<template lang="html">
    <select class="locale-select" name="" v-model="locale">
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
            this.generatePath(locale)
            this.$router.push( this.generatePath(locale) )
        }
    },
    methods: {
        generatePath(locale) {
            console.log('selected locale: ', locale);
            console.log('');

            if (locale === this._i18n.fallbackLocale) {
                const toReplace = '^/' + this._i18n.fallbackLocale + (this.$route.fullPath.indexOf('/' + this._i18n.fallbackLocale + '/') === 0 ? '/' : '')
                const re = new RegExp(toReplace)
                return this.$route.fullPath.replace(re, '/')
            }

            return '/'

            // const toReplace = '^/' + defaultLocale + (route.fullPath.indexOf('/' + defaultLocale + '/') === 0 ? '/' : '')
            // const re = new RegExp(toReplace)
            // return redirect(route.fullPath.replace(re, '/'))
            //
            // let path = ''
            //
            // if (locale === this._i18n.fallbackLocale) {
            //     return path
            // }
            // return path
        }
    }
}
</script>

<style lang="scss">
.locale-select {}
</style>
