<template>
    <div class="container">
        <mt-header fixed :title="secondList.des">
            <router-link slot="left" to="">
                <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="main">
                <div class="img">
                    <img :src="'http://'+oldimg" width="100%">
                </div>
            <div class="show">
                <mt-field label="交易编号" v-model="usersecond.tid" readonly></mt-field>
                <mt-field label="物品信息" type="textarea" rows="3" v-model="usersecond.tdes"></mt-field>
                <mt-field label="价格"  v-model="usersecond.tprice"></mt-field>
                <m-up-loader :src="usersrc" :info="usersecond"></m-up-loader>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import store from "../../store/store";
import axios from 'axios';
import qs from 'Qs';
import { mapState, mapMutations } from "vuex";
import mUpLoader from "../common/UpLoader"
export default {
    props: {},
    data() {
        return {
            secondList: [],
            usersecond: {},
            usersrc: 'http://47.94.10.228/trade/updateTo',
            isAdmin:false,
            isRepair:false,
        };
    },
    computed: {
      ...mapState(["oldimg"]),
      ...mapState(["secondInformation"]),
      ...mapState(["userInformation"]),
    },
    created() {
        this.give(),
        this.decide()
    },
    mounted() {
    },
    watch: {

    },
    methods: {
      give(){
        this.secondList=this.secondInformation
      },
      decide(){
        this.usersecond.tid = this.secondList.tid
        this.usersecond.tdes = this.secondList.tdes
        this.usersecond.tprice = this.secondList.tprice
        this.usersecond.udept = window.localStorage.getItem("udept")
      },
    },
    components: {
      mUpLoader,
    },
};
</script>

<style scoped lang="scss">
.container{
    margin-bottom: 0;
}
.img{
        width: 100%;
        max-height: 50%;
    }
.show{
    display: flex;
    flex-direction: column;
    background-color: white;
    .show-title{
        font-size: 1.2rem;
    }
    .show-price{
        color: red;
        font-weight: 600; 
    }
}
</style>