// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

  Vue.use(Vuetify, {

      theme: {

          // primary: '#4989CC',
          back: '#fafafa',
          primary: '#1E4972',
          secondary: '#F7941D',
          accent: '#f77e12',
          error: '#FF5252',
          warning: '#FFC107',
          success: '#1a7e2a',
          grey: '#58595B'

      }

  })

import VueMoment from 'vue-moment'
import moment from 'moment-timezone'

Vue.use(VueMoment, {
    moment,
})
Vue.prototype.moment = moment


const $_localhost = Boolean(window.location.hostname === 'localhost' ||
        // [::1] is the IPv6 localhost address.
        window.location.hostname === '[::1]' ||
        // 127.0.0.1/8 is considered localhost for IPv4.
        window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

Vue.prototype.$localhost = $_localhost


import axios from 'axios'

const $_instanceAxios = axios.create({

    baseURL: $_localhost ? 'http://192.168.50.37:5000/api/' : '/api', //monitoring

});

$_instanceAxios.interceptors.response.use((response) => response, (error) => {

    // 401 (Unauthorized) response interceptor
    if (401 === error.response.status) {

        console.log('Axios', 'intersepts', '401')
        router.push('/')

    }

    return Promise.reject(error)
})

Vue.prototype.$http = $_instanceAxios


import VueWebsocket from 'vue-websocket'
// Vue.use(VueWebsocket, "ws://192.168.50.37:3000");


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
