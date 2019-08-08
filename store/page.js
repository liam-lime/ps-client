export const state = () => ({
    pageTitle: ''
})

export const mutations = {
    SET_PAGE_TITLE (state, pageTitle) {
        state.pageTitle = pageTitle
    }
}

export const getters = {
    PAGE_TITLE (state) {
        return state.pageTitle
    }
}
