import SnippetsApi from '../services/api/Snippets'

export const state = () => ({
    categories: {}
})

export const mutations = {
    SET_SNIPPETS (state, snippets) {
        state.snippets = snippets
    }
}

export const actions = {
    async GET_SNIPPETS ({ commit }) {
        const response = await SnippetsApi.getSnippets()
        commit('SET_SNIPPETS', response.data)
    }
}

export const getters = {
    SNIPPETS (state) {
        return (locale) => {
            return state.snippets[locale]
        }
    },

    SNIPPET (state) {
        return (locale, snippetSlug) => {
            return state.snippets[locale].find((article) => {
                return article.slug === snippetSlug
            })
        }
    }
}
