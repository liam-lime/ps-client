<template>
    <div class="section" :style="cssProperties">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        backgroundColor: {
            type: String,
            default: 'transparent'
        },
        borderTop: {
            type: Boolean,
            default: false
        },
        borderBottom: {
            type: Boolean,
            default: false
        },
        borderColor: {
            type: String,
            default: '#EDEDED'
        },
        paddingSize: {
            type: Number,
            default: 50
        }
    },
    computed: {
        cssProperties() {
            return {
                'background-color': this.backgroundColor,
                'padding-top': `${this.paddingSize}px`,
                'padding-bottom': `${this.paddingSize}px`,
                'border-top': this.borderTop ? `1px solid ${this.borderColor}` : '',
                'border-bottom': this.borderBottom ? `1px solid ${this.borderColor}` : ''
            }
        }
    }
}
</script>
