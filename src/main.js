// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import "./assets/normalize/normalize.css"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css';
import App from './App'
Vue.config.productionTip = false
import router from './router'
import axios from 'axios';
import Vuex from 'vuex'
import store from './store/store'
Vue.use(MintUI)
Vue.use(Vuex);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://106.12.189.19';
// axios.defaults.baseURL = 'http://192.168.123.219';

// 时间处理过滤器
Vue.filter('dateFormat', function (dateStr, pattern = "") {
  let dt = new Date(dateStr)
  let y = dt.getFullYear()
  let m = (dt.getMonth() + 1).toString().padStart(2, '0')
  let d = dt.getDate().toString().padStart(2, '0')

  if (pattern.toLowerCase() === 'yyyy-mm-dd') {
    return `${y}-${m}-${d}`
  } if (pattern.toLowerCase() === 'yyyy/mm/dd'){
    return `${y}/${m}/${d}`
  }else {
    let hh = dt.getHours().toString().padStart(2, '0')
    let mm = dt.getMinutes().toString().padStart(2, '0')
    let ss = dt.getSeconds().toString().padStart(2, '0')
    return `${y}-${m}-${d} ${hh}:${mm}:${ss} `
  }
})

document.addEventListener('plusready', function () {
  var webview = plus.webview.currentWebview();
  plus.navigator.setStatusBarBackground('#e40113');//设置顶部颜色
  plus.key.addEventListener('backbutton', function () {
    webview.canBack(function (e) {
      if (e.canBack) {
        webview.back();
      } else {
        //首页返回键处理
        //处理逻辑：1秒内，连续两次按返回键，则退出应用；
        var first = null;
        plus.key.addEventListener('backbutton', function () {
          //首次按键，提示‘再按一次退出应用’
          if (!first) {
            first = new Date().getTime();
            alert('再按一次退出应用');//返回提示
            setTimeout(function () {
              first = null;
            }, 1000);
          } else {
            if (new Date().getTime() - first < 1500) {
              plus.runtime.quit();
            }
          }
        }, false);
      }
    })
  });

});
