import Vue from 'vue'
import IconBase from "~/components/Icons/IconBase"
import IconEye from "~/components/Icons/IconEye"

const OPTIONS = {
    size: {
        default: 36,
        big: 64,
    }
}

Vue.prototype.$icon = OPTIONS

Vue.component('IconBase', IconBase)
Vue.component('IconEye', IconEye)
