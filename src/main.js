// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/styles/index.scss'

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
// Vue.config.productionTip = false
Vue.use(ElementUI)
// 设置session(这段代码一定要放在New Vue之前，否则不生效)
// Vue.http.interceptors.push((request, next) => {
//   request.withCredentials = true
//   next((response) => {
//     return response
//   })
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
