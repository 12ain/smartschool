<template>
    <div>
        <div class="mui-content">
            <div class="container">
                <img src="../../assets/images/logo.png" class="logo">
                <h2>智慧校园</h2>
            </div>
			<form id="login-form" class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id="account" type="text" class="mui-input-clear mui-input" placeholder="请输入账号" data-input-clear="2"><span class="mui-icon mui-icon-clear mui-hidden"></span>
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id="password" type="password" class="mui-input-clear mui-input" placeholder="请输入密码" data-input-clear="3"><span class="mui-icon mui-icon-clear mui-hidden"></span>
				</div>
			</form>
			<form class="mui-input-group">
				<ul class="mui-table-view mui-table-view-chevron">
					<li class="mui-table-view-cell" @click="toggle">
						自动登录
						<div v-if="flag" id="autoLogin" class="mui-switch" data-switch="1" style="transition-duration: 0.2s;">
							<div class="mui-switch-handle"></div>
						</div>
                        <div v-if="!flag" id="autoLogin" class="mui-switch mui-active" data-switch="1" style="transition-duration: 0.2s;">
							<div class="mui-switch-handle"></div>
						</div>
					</li>
				</ul>
			</form>
			<div class="mui-content-padded">
                <router-link id="login" type="button" class="mui-btn mui-btn-block mui-btn-primary" to="/tabbar">登录</router-link>
				<div class="link-area"><routerLink to="/register" id="reg">注册账号</routerLink> <span class="spliter">|</span> <a id="forgetPassword">忘记密码</a>
				</div>
			</div>
			<div class="mui-content-padded oauth-area">

			</div>
		</div>
    </div>
</template>

<script>
export default {
    props: {
        
    },
    data() {
        return {
            flag: true,
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
        toggle(){
            this.flag = !this.flag;
        }
    },
    components: {
    },
};
</script>

<style scoped lang="scss">
.area {
        margin: 20px auto 0px auto;
    }
    
    .mui-input-group {
        margin-top: 10px;
    }
    
    .mui-input-group:first-child {
        margin-top: 20px;
    }
    
    .mui-input-group label {
        width: 22%;
    }
    
    .mui-input-row label~input,
    .mui-input-row label~select,
    .mui-input-row label~textarea {
        width: 78%;
    }
    
    .mui-checkbox input[type=checkbox],
    .mui-radio input[type=radio] {
        top: 6px;
    }
    
    .mui-content-padded {
        margin-top: 25px;
    }
    
    .mui-btn {
        padding: 10px;
    }
    
    .link-area {
        display: block;
        margin-top: 25px;
        text-align: center;
    }
    
    .spliter {
        color: #bbb;
        padding: 0px 8px;
    }
    
    .oauth-area {
        position: absolute;
        bottom: 20px;
        left: 0px;
        text-align: center;
        width: 100%;
        padding: 0px;
        margin: 0px;
    }
    
    .oauth-area .oauth-btn {
        display: inline-block;
        width: 50px;
        height: 50px;
        background-size: 30px 30px;
        background-position: center center;
        background-repeat: no-repeat;
        margin: 0px 20px;
        /*-webkit-filter: grayscale(100%); */
        border: solid 1px #ddd;
        border-radius: 25px;
    }
    
    .oauth-area .oauth-btn:active {
        border: solid 1px #aaa;
    }
    
    .oauth-area .oauth-btn.disabled {
        background-color: #ddd;
    }
body{
    background-color: #fff;
    margin: 0;
    padding: 0;
}
.container h2{
    text-align: center;
}
.logo{
    padding-top: 15%;
    position: relative;
    left: 30%;
    width:150px;
}
.mui-switch .mui-active {
    border-color: #4cd964;
    background-color: #4cd964;
}
.mui-switch-handle{
    transition-duration: 0.2s; transform: translate(0px, 0px);
}
.mui-switch-handle-on
{   
    transition-duration: 0.2s; transform: translate(43px, 0px);
}
</style>
