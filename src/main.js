// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
Vue.config.productionTip = false
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css';
import './assets/mui/css/mui.css'
import './assets/mui/css/icons-extra.css'

Vue.use(VueResource)
Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
