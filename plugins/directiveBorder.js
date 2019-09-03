import Vue from 'vue'
import { capitalize } from '../services/helper/strings'

Vue.directive('border', {
    inserted(element, binding, vnode) {
        const value = binding.value ? binding.value : {}
        const width = value.hasOwnProperty('width') ? value.width : vnode.context.$css.border.width.default
        const color = value.hasOwnProperty('color') ? value.color : vnode.context.$css.color.gray

        for (let modifier in binding.modifiers) {
            element.style[`border${capitalize(modifier)}`] = `${width}px solid ${color}`
        }
    }
})

Vue.prototype.$border = {
    width: {
        default: 1,
    }
}
