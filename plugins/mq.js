import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
    breakpoints: {
        phone: 414,
        tablet: 834,
        desktop: 1366,
        large: Infinity,
    }
})
