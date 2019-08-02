import Vue from 'vue'

Vue.prototype.$css = {
    color: {
        cheese: '#FFBE93',
        purple: '#220F33',
        colar: '#F67E7D',
        ruby: '#843B62',
        taupe: '#74546A',
        white: '#FFF',

        lightestGray: '#FAFAFA',
        lightGray: '#F3F3F3',
        gray: '#EDEDED',

        textPrimary: 'rgba(0, 0, 0, .80)',
        textSeconadary: 'rgba(0, 0, 0, .35)'
    },
    border: {
        width: {
            default: '1px'
        }
    },
    padding: {
        none: '0px',
        small: '25px',
        default: '50px',
        big: '100px'
    },
    container: {
        maxWidth: {
            default: '1330px',
            small: '1024px'
        }
    }
}
