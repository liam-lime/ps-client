import Vue from 'vue'

Vue.directive('background', {
    inserted(element, binding, vnode) {
        element.style.background = binding.value ? binding.value : vnode.context.$css.color.lightestGray
    }
})
