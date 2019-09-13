import Vue from 'vue'
import { capitalize } from '../services/helper/strings'

const OPTIONS = {
    width: {
        default: 1,
    }
}

Vue.prototype.$border = OPTIONS

Vue.directive('border', {
    inserted(element, binding, vnode) {
        const value = binding.value ? binding.value : {}
        const width = value.hasOwnProperty('width') ? value.width : vnode.context.$border.width.default
        const color = value.hasOwnProperty('color') ? value.color : vnode.context.$color.gray

        for (let modifier in binding.modifiers) {
            element.style[`border${capitalize(modifier)}`] = `${width}px solid ${color}`
        }
    }
})
