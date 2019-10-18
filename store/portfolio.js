export const state = () => ({
    portfolio: {
        en: {
            about: 'Couple words about me.',
            services: [
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
            technologies: [
                {
                    title: 'Vue.js'
                },
                {
                    title: 'React.js'
                },
                {
                    title: 'Vue.js'
                },
                {
                    title: 'React.js'
                },
                {
                    title: 'Vue.js'
                },
                {
                    title: 'React.js'
                },
            ]
        },
        ru: {
            about: 'Несколько слов обо мне.',
            services: [
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
            technologies: [
                {
                    title: 'Vue.js'
                },
                {
                    title: 'React.js'
                },
            ]
        },
        ua: {
            about: 'Декiлька слiв про мене.',
            services: [
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
            technologies: [
                {
                    title: 'Vue.js'
                },
                {
                    title: 'React.js'
                },
            ]
        }
    }
})

export const mutations = {}

export const getters = {
    PORTFOLIO (state) {
        return (locale) => {
            return state.portfolio[locale]
        }
    }
}
