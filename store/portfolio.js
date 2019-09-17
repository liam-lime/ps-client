export const state = () => ({
    about: {
        en: 'Couple words about me.',
        ru: 'Несколько слов обо мне.',
        ua: 'Декiлька слiв про мене.'
    },
    services: {
        en: [
            {
                title: 'Javascript',
                content: "UI/UX involves planning and iterating a site's structure and layout. Once the proper information architecture is in place, I design the visual layer to create a beautiful user experience."
            },
            {
                title: 'WordPress',
                content: "Front End Development is building out the visual components of a website. Using HTML, CSS , and Javascript, I build fast, interactive websites. This also may include integrating a CMS."
            },
            {
                title: 'Some Design',
                content: "While most of my attention is on interactive projects, I do branding and collateral from time to time. This includes logo design, business cards, and other printed materials."
            }
        ],
        ru: [{title: 'Javascript', content: 'Javascript описание'}, {title: 'Wordpress', content: 'Wordpress описание'}],
        ua: [{title: 'Javascript', content: 'Javascript детальнiше'}, {title: 'Wordpress', content: 'Wordpress детальнiше'}]
    }
})

export const mutations = {}

export const getters = {
    ABOUT (state) {
        return (locale) => {
            return state.about[locale]
        }
    },

    SERVICES (state) {
        return (locale) => {
            return state.services[locale]
        }
    }
}
