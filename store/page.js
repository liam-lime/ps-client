export const state = () => ({
    title: ''
})

export const mutations = {
    SET_TITLE (state, pageTitle) {
        state.title = pageTitle
    }
}

export const getters = {
    TITLE (state) {
        return state.title
    }
}
