import Vue from 'vue'
import IconBase from "~/components/Icons/IconBase"
import IconEye from "~/components/Icons/IconEye"

const ICON = {
    size: {
        default: 36,
        big: 64,
    }
}

Vue.prototype.$icon = ICON

Vue.component('IconBase', IconBase)
Vue.component('IconEye', IconEye)
