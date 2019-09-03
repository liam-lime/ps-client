// plugin source: https://github.com/AlexandreBonaventure/vue-mq

import Vue from 'vue'
import VueMq from 'vue-mq'

const CONFIG = {
    breakpoints: {
        phone: 480,
        phoneBig: 720,
        tablet: 962,
        tabletBig: 1280,
        desktop: 1920,
        desktopBig: Infinity
    }
}

Vue.use(VueMq, CONFIG)
