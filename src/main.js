// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import App from './App'
import Axios from 'axios'
import Vuelidate from 'vuelidate'
import router from './router'
import VueResource from 'vue-resource'

import accounting from 'accounting'
import pluralize from 'pluralize'
import store from './store'
import ZoomOnHover from '../node_modules/vue-zoom-on-hover/dist/index.esm.min.js'

Vue.use(ZoomOnHover)
Vue.use(require('vue-moment'))

Vue.config.productionTip = false
Vue.use({
  install (Vue) {
    Vue.prototype.$api = Axios.create({
      baseURL: 'http://localhost/my-project/public/api/'
    })
  }
})
Vue.use(Vuelidate)
Vue.use(VueMaterial)
Vue.use(VueResource)
Vue.filter('formatMoney', accounting.formatMoney)
Vue.filter('pluralize', pluralize)

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
