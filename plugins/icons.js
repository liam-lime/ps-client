import Vue from 'vue'
import IconBase from "~/components/Icons/IconBase"
import IconEye from "~/components/Icons/IconEye"

Vue.prototype.$icon = {
    size: {
        default: 36,
        big: 64,
    }
}

Vue.component('IconBase', IconBase)
Vue.component('IconEye', IconEye)
