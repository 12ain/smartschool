<template>
<div class="am-g myapp-login">
	<div class="myapp-login-logo-block">
		<div class="myapp-login-logo">
			<img class="myapp-login-logo-image" src="../../assets/images/logo.png">
		</div>
		<div class="myapp-login-logo-text">
			<div class="myapp-login-logo-text">
				<!-- Js<span>Fiddle</span> -->
				<!-- <div class="info">上大学,一个APP就够了</div> -->
			</div>
		</div>

		<div class="login-font">
			<router-link to="/login">登录</router-link> or <router-link to="/register" class="active">注册</router-link>
		</div>
		<div class="am-u-sm-10 login-am-center">
			<form class="am-form">
				<fieldset>
					<div class="am-form-group">
						<input type="text" class="" placeholder="输入账号">
					</div>

					<div class="am-form-group">
						<input type="password" class="" placeholder="密码">
					</div>

          <div class="am-form-group">
						<input type="text" class="" placeholder="姓名">
					</div>

          <div class="am-form-group">
						<input type="email" class="" placeholder="邮箱">
					</div>

          <div class="am-form-group">
						<input type="text" class="" placeholder="手机号">
					</div>

          <div class="am-radio-inline">
              <input type="radio" name="ugrade" value="0" checked>学生
          </div>
          <div class="am-radio-inline">
              <input type="radio" name="ugrade" value="0">老师
          </div>
          <div class="am-radio-inline">
              <input type="radio" name="ugrade" value="1">维修人员
          </div>
					<!-- <button><button type="submit" class="am-btn am-btn-default">登录</button></p> -->
                    <p><router-link class="am-btn am-btn-default" to="/login">注册</router-link></p>
				</fieldset>
			</form>
		</div>
	</div>
  <br><br>
</div>
</template>

<script>
export default {
  components: {

  },
  props: {

  },
  data() {
    return {

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
.app{
  width: 100%;
  height: 100%;
}
.myapp-login{
  width: 100%;
  height: 100%;
}
.login-am-center .am-form input{
  background:#fff ;
}
.myapp-login-logo-text .info{
  border: 0;
  /* margin-top: 50px; */
}
.myapp-login-logo-image{
  width: 150px;
  /* margin-top: 60px; */
}
.myapp-login{
  background-size:100% 100%;
}
.login-am-center .am-form input{
  line-height: 15px;
}
</style>
