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
                primary: '#FF385C',
            },
            light: {
                primary: '#FF385C',
            },
        },

    },
}

export default new Vuetify(opts)
