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
    icon: {
        size: {
            default: 36,
            big: 64
        }
    },
    border: {
        width: {
            default: 1
        }
    },
    padding: {
        minimal: 1,
        small: 30,
        default: 60,
        big: 120
    },
    container: {
        maxWidth: {
            default: 1330,
            small: 1024
        }
    },
    button: {
        view: {
            button: 'button',
            icon: 'icon',
        }
    }
}
