import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
    // 用户信息相关参数
    uid: "",
    upsd: "",
    ugrade: "",
    uimage: ""
}
const mutations = {
    // 更新账号密码
    update(state, userInfo) {
      state.uid = userInfo.uid;
      state.uimage = userInfo.uimage;
      state.upsd = userInfo.upsd;
      state.ugrade = userInfo.ugrade;
    },
}

export default new Vuex.Store({
  state,
  mutations
})