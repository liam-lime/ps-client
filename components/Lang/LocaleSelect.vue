<template lang="html">
    <div class="locale-select">
        <Select v-model="locale" :options="selectOptions" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            locale: null
        }
    },
    computed: {
        locales() {
            return this.$store.getters['lang/LOCALES']
        },
        selectOptions() {
            let options = []

            for (let i =0; i < this.locales.length; i++) {
                options.push({
                    code: this.locales[i],
                    name: this.$t(`lang.${this.locales[i]}`)
                })
            }

            return options
        }
    },
    watch: {
        locale(locale) {
            this.changeLocale(locale.code)
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
