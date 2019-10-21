import SnippetsApi from '../services/api/Snippets'

export const state = () => ({
    snippets: {
        en: [
            {
                id: 1,
                published: true,
                date: '2018-01-12',
                title: "nextTick()",
                slug: "vuejs-next-tick",
                additionalLinks: [
                    {
                        url: "https://ru.vuejs.org/v2/api/index.html#Vue-nextTick",
                        text: "Документация"
                    },
                    {
                        url: "https://medium.com/js-dojo/what-the-tick-is-vue-nexttick-c3f9870bc311",
                        text: "Статья с медиума"
                    }
                ],
                content: "<p>Callback функция, которая вызывается после каждого 'круга обновления' DOM структуры. Каждый раз когда Vue.js делает реальный ре-рендер DOM структуры.</p><pre>mounted() {this.$nextTick(() => {// The whole view is rendered, so I can safely access or query// the DOM. ¯\_(ツ)_/¯})}</pre><pre>Vue.nextTick(function () {// do something cool})</pre>"
        ],
        ua: [
            {
                id: 4,
                published: false,
                date: '2018-01-12',
                title: "nextTick()",
                slug: "vuejs-next-tick"
            }
        ],
        ru: [
            {
                id: 7,
                published: false,
                date: '2018-01-12',
                title: "nextTick()",
                slug: "vuejs-next-tick",
            }
        ]
    },
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
