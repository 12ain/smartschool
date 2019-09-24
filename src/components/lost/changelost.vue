<template>
    <div class="container">
        <mt-header fixed :title="lostList.des">
            <router-link slot="left" to="">
                <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="main">
            <div class="img">
                <img :src="'http://'+oldimg" width="100%">
            </div>
            <div class="show">
                <mt-field label="物品编号" v-model="userLost.id" readonly></mt-field>
                <mt-field label="物品信息" type="textarea" rows="3" v-model="userLost.des"></mt-field>
                <mt-field label="时间" type="date" v-model="userLost.time"></mt-field>                
                <mt-field label="解决状态"  v-model="userLost.lstatic"></mt-field>
                <m-up-loader :src="usersrc" :info="userLost"></m-up-loader>
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
            lostList: [],
            userLost: {},
            usersrc: 'http://106.12.189.19/lf/testUpdateTo',
            isAdmin:false,
            isRepair:false,
        };
    },
    computed: {
    ...mapState(["oldimg"]),
    ...mapState(["lostInformation"]),
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
        this.lostList=this.lostInformation
    },
    decide(){
        this.userLost.id = this.lostList.id
        this.userLost.time = this.lostList.time
        this.userLost.lstatic = this.lostList.lstatic
        this.userLost.des = this.lostList.des
        this.userLost.udept = window.localStorage.getItem("udept")      
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
.mint-swipe{
    height: 200px;
    width: 100%;
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