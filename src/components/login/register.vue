<template>
<div class="am-g myapp-login">
	<div class="myapp-login-logo-block">
		<div class="myapp-login-logo">
			<img class="myapp-login-logo-image" src="../../assets/images/logo.png">
		</div>
		<div class="myapp-login-logo-text">
		</div>

		<div class="login-font">
			<router-link to="/login">登录</router-link> or <router-link to="/register" class="active">注册</router-link>
		</div>
		<div class="am-u-sm-10 login-am-center">
			<form class="am-form">
				<fieldset>
					<div class="am-form-group">
						<input type="text" class="" placeholder="请输入账号" v-model="userInfo.uid" @blur="checkUid">
					</div>

					<div class="am-form-group">
						<input type="password" class="" placeholder="请输入密码" v-model="userInfo.upsd" @blur="checkPwd">
					</div>

          <div class="am-form-group">
						<input type="password" class="" placeholder="请输入确认密码" v-model="confirmpwd" @blur="checkConfirmPwd">
					</div>

          <div class="am-form-group">
						<input type="text" class="" placeholder="请输入姓名" v-model="userInfo.uname" @blur="checkName">
					</div>

          <div class="am-form-group">
						<input type="email" class="" placeholder="请输入邮箱" v-model="userInfo.uemail" @blur="checkUemail">
					</div>

          <div class="am-form-group">
						<input type="text" class="" placeholder="请输入手机号" v-model="userInfo.utel" @blur="checkTel">
					</div>

          <div class="am-form-group">
						<input type="text" class="" placeholder="请输入学校名称" v-model="userInfo.udept">
					</div>

          <select v-model="userInfo.ugrade">
            <option value="0">学生</option>
            <option value="0">老师</option>
            <option value="1">维修人员</option>
            <option value="2" disabled>管理员</option>
          </select>
              <p><button class="am-btn am-btn-default" @click.prevent="submitRegister">注册</button></p>
				</fieldset>
			</form>
		</div>
	</div>
</div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import router from "../../router/index";
import store from "../../store/store";
import { mapState, mapMutations } from "vuex";
import { Toast } from 'mint-ui';
import qs from 'Qs';

axios.defaults.withCredentials = true;

export default {
  components: {

  },
  props: {

  },
  data() {
    return {
      userInfo: {
        uid: "",          //账号(学/工)   必填
        upsd: "",         //密码		必填
        confirmpwd: "",
        uname: "",				//姓名		必填
        uemail: "",			  //邮箱		必填
        utel: "",				  //手机号		必填
        udept: "",			  //学院		选填
        ugrade: '0'   
                    //学生或老师，Ugrade为0，
                    // 维修人员Ugrade为1
                    //管理员权限为2，         
      },
      
      // 正则表达式
      regUser: {
        // 手机号
        utel: /(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}/,
        // 用户名： 中文、英文、数字，不包括下划线等特殊符号
        uid: /[\u4E00-\u9FA5A-Za-z0-9]+$/,
        // 密码： 字母数字下划线，6-16位
        upsd: /\w{6,16}/,
        uemail: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
      },
      store,
      confirmpwd: "",
    }
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {

  },
  methods: {
  
    // 正则检测用户名
    checkUid() {
      if (this.userInfo.uid == "") {
        Toast("请输入账号");
      } else if (
        this.userInfo.uid != "" &&
        !this.regUser.uid.test(this.userInfo.uid)
      ) {
        Toast("用户名不符合要求");
      } else {
        return true;
      }
    },
    // 正则检测密码
    checkPwd() {
      if (this.userInfo.upsd == "") {
        Toast("请输入密码");
      } else if (
        this.userInfo.upsd != "" &&
        !this.regUser.upsd.test(this.userInfo.upsd)
      ) {
        Toast("密码不符合要求");
      } else {
        return true;
      }
    },
    // 检测confirmPwd
    checkConfirmPwd() {
      if (this.confirmpwd == "" ){
        Toast("请输入确认密码");
      } else if(this.confirmpwd != this.userInfo.upsd){
        Toast("两次输入密码不一致");
      } else {
        return true;
      }      
    },
    // 正则检测手机号
    checkTel() {
      if (this.userInfo.utel == "") {
        Toast("请输入手机号");
      } else if (
        this.userInfo.utel != "" &&
        !this.regUser.utel.test(this.userInfo.utel)
      ) {
        Toast("手机号不符合要求");
      } else {
        return true;
      }
    },
    // 检测姓名
    checkName() {
      if (this.userInfo.uname == "") {
        Toast("请输入姓名");
      }  else {
        return true;
      }
    },
    // 检测邮箱合法性
    checkUemail(){
      if (this.userInfo.uemail == "") {
        Toast("请输入邮箱");
      } else if (
        this.userInfo.uemail != "" &&
        !this.regUser.uemail.test(this.userInfo.uemail)
      ) {
        Toast("邮箱不符合要求");
      } else {
        return true;
      }
    },
    // 注册请求
    submitRegister() {
      if (
        this.checkUid() &&
        this.checkPwd() &&
        this.checkConfirmPwd() &&
        this.checkName() &&
        this.checkTel()  &&
        this.checkUemail()
      ) {
        axios
          .post("/user/register", 
          qs.stringify({           
            uid: this.userInfo.uid, 
            upsd: this.userInfo.upsd,	
            uname: this.userInfo.uname,	
            uemail: this.userInfo.uemail,
            utel: this.userInfo.utel,
            udept: this.userInfo.udept,
            ugrade: this.userInfo.ugrade
          }))
          .then(res => {
            console.log(res);
            
            if (res.data.status == '0') {
              Toast(res.data.msg);
              this.$router.push("/login");
              // console.log('注册成功')
            } else {
              Toast(res.data.msg);
              // console.log('注册失败')
            }
          })
          .catch();
      }
    }
  }
}
</script>

<style scoped>
@import url('../../assets/normalize/normalize.css');
@import url('./css/amazeui.min.css');
@import url('./css/app.css');
*{
  margin: 0;
  padding: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
.myapp-login-logo-block{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.app{
  min-height: 100vh;
}
.login-am-center .am-form input{
  background:#fff ;
}
.login-am-center .am-form input{
  line-height: 18px;
}
.myapp-login-logo-image{
  margin: 0;
  width: 15%;
  height: 15%;
}
.am-form select {
  border-radius: 20px;
  font-size: 10px;
  padding: 6px;
  line-height: 18px;
}
.am-form-group{
  margin-bottom: 0.6rem;
}
fieldset{
  margin-bottom: 0;
}
</style>
