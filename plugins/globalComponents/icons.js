import Vue from 'vue'
import IconBase from "~/components/Icons/IconBase"
import IconEye from "~/components/Icons/IconEye"

import IconJavascript from "~/components/Icons/IconJavascript"
import IconVue from "~/components/Icons/IconVue"
import IconCordova from "~/components/Icons/IconCordova"
import IconExpress from "~/components/Icons/IconExpress"
import IconNode from "~/components/Icons/IconNode"
import IconNuxt from "~/components/Icons/IconNuxt"
import IconWordpress from "~/components/Icons/IconWordpress"

const OPTIONS = {
    size: {
        default: 36,
        big: 64,
    }
}

Vue.prototype.$icon = OPTIONS

Vue.component('IconBase', IconBase)
Vue.component('IconEye', IconEye)

Vue.component('IconJavascript', IconJavascript)
Vue.component('IconVue', IconVue)
Vue.component('IconCordova', IconCordova)
Vue.component('IconExpress', IconExpress)
Vue.component('IconNode', IconNode)
Vue.component('IconNuxt', IconNuxt)
Vue.component('IconWordpress', IconWordpress)
