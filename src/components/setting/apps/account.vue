<template>
        <div class="container">
        <mt-header fixed title="账号与安全">
            <router-link to="/setting" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        <mt-button icon="xiazai" slot="right" @click.native="submitInformation">提交</mt-button>
        </mt-header>

        <mt-field label="账号" placeholder="请输入账号" v-model="userInformation.uid" readonly></mt-field>
        <mt-field label="密码" placeholder="请输入密码" v-model="userInformation.upsd" type="password" ></mt-field>
        <mt-field label="姓名" placeholder="请输入姓名" v-model="userInformation.uname"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" v-model="userInformation.uemail" type="email" ></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" v-model="userInformation.utel" type="tel" ></mt-field>
        <mt-field label="学院名称" placeholder="请输入学院名称" v-model="userInformation.udept"></mt-field>
        </div>
</template>

<script>
import Vue from "vue";
import Vuex from 'vuex';
import axios from "axios";
import router from "../../../router/index";
import store from "../../../store/store";
Vue.use(Vuex);
import { mapState, mapMutations } from "vuex";
import { Toast } from 'mint-ui';
import qs from 'Qs';
axios.defaults.baseURL = 'http://106.12.189.19';
axios.defaults.withCredentials = true;
export default {
    props: {

    },
    data() {
        return {
        };
    },
    computed: {
        ...mapState(["userInformation"]),
    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
      ...mapMutations(["update"]),
        submitInformation(){
        axios
          .post("/user/update", 
          qs.stringify({           
            uid: this.userInformation.uid, 
            upsd: this.userInformation.upsd,	
            uname: this.userInformation.uname,	
            uemail: this.userInformation.uemail,
            utel: this.userInformation.utel,
            udept: this.userInformation.udept,
            uimage: ""
        }))
          .then(res => {
            
            if (res.data.status == '0') {
              Toast(res.data.msg);
              this.update({
                uid: this.userInformation.uid, 
                upsd: this.userInformation.upsd,	
                uname: this.userInformation.uname,	
                uemail: this.userInformation.uemail,
                utel: this.userInformation.utel,
                udept: this.userInformation.udept,
                uimage: ""
            });
            } else {
              Toast(res.data.msg);
            }
          })
          .catch();
      }
    },
    components: {

    },
};
</script>

<style scoped lang="scss">

</style>
