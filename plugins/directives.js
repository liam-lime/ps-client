import Vue from 'vue'
import { capitalize } from '../services/helper/strings'

Vue.directive('background', {
    inserted(element, binding) {
        element.style.background = binding.value
    }
})

Vue.directive('border', {
    inserted(element, binding, vnode) {
        const value = binding.value ? binding.value : {}
        const width = value.hasOwnProperty('width') ? value.width : vnode.context.$css.border.width.default
        const color = value.hasOwnProperty('color') ? value.color : vnode.context.$css.color.border.default

        for (let modifier in binding.modifiers) {
            element.style[`border${capitalize(modifier)}`] = `${width} solid ${color}`
        }
    }
})
