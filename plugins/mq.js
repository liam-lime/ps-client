import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
    breakpoints: {
        phone: 480,
        phoneBig: 720,
        tablet: 962,
        tabletBig: 1280,
        desktop: 1920,
        desktopBig: Infinity
    }
})
