import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
    // 用户信息相关参数
    userInformation:{
      uid: "",
      upsd: "",
      ugrade: "",
      uimage: "",
      uname: "",
      udept: "",
      utel: "",
      uemail: "",
    }
    
}
const mutations = {
    // 更新账号密码
    update(state, userInfo) {
      state.userInformation.uid = userInfo.uid;
      state.userInformation.uimage = userInfo.uimage;
      state.userInformation.upsd = userInfo.upsd;
      state.userInformation.uname = userInfo.uname;
      state.userInformation.udept = userInfo.udept;
      state.userInformation.utel = userInfo.utel;
      state.userInformation.uemail = userInfo.uemail;
      state.userInformation.ugrade = userInfo.ugrade;
    },
}

export default new Vuex.Store({
  state,
  mutations
})