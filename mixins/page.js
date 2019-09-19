export default {
    methods: {
        setPageTitle(title) {
            this.$store.commit('page/SET_TITLE', title)
        }
    }
}
