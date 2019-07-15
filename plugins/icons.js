import Vue from 'vue'
import IconBase from "~/components/Icons/IconBase"
import IconEye from "~/components/Icons/IconEye"

Vue.component('IconBase', IconBase)
Vue.component('IconEye', IconEye)

Vue.prototype.$icon = {
    color: {
        base: '#63303e'
    },
    size: {
        base: 32
    }
}
