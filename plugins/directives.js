import Vue from 'vue'
import { capitalize } from '../services/helper/strings'

Vue.directive('background', {
    inserted(element, binding) {
        element.style.background = binding.value
    }
})

Vue.directive('border', {
    inserted(element, binding) {
        const width = binding.arg ? binding.arg : '1'
        for (let modifier in binding.modifiers) {
            element.style[`border${capitalize(modifier)}`] = `${width}px solid ${binding.value}`
        }
    }
})
