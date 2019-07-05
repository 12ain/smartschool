<template>
    <div>
        <div class="mui-content">
            <div class="container">
                <img src="../../assets/images/logo.png" class="logo">
                <h2>智慧校园</h2>
            </div>
			<form class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
				<div class="mui-input-row">
					<label>确认</label>
					<input id='password_confirm' type="password" class="mui-input-clear mui-input" placeholder="请确认密码">
				</div>
				<div class="mui-input-row">
					<label>邮箱</label>
					<input id='email' type="email" class="mui-input-clear mui-input" placeholder="请输入邮箱">
				</div>
			</form>
			<div class="mui-content-padded">
				<button id='reg' class="mui-btn mui-btn-block mui-btn-primary">注册</button>
			</div>
			<div class="mui-content-padded">
				<router-link to="/">已有账号?点击登录</router-link>
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
