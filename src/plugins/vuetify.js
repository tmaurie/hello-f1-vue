import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'mdiSvg',
    },
    theme: {
        dark: true,
        themes : {
            dark: {
                primary: '#FF004D',
            },
            light: {
                primary: '#FF004D',
            },
        },

    },
}

export default new Vuetify(opts)
