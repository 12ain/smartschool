<template>
    <div class="container">
        <mt-header fixed title="二手信息"></mt-header>
        <!-- 选项卡 -->
        <mt-navbar v-model="active">
        <mt-tab-item id="tab-container1" @click.native="getthingLists">查看二手信息</mt-tab-item>
        <mt-tab-item id="tab-container2">发布二手信息</mt-tab-item>
        </mt-navbar>

        <!-- 内容分栏 -->
        <mt-tab-container v-model="active">
            <!-- 内容区1: 二手交易表单 -->
        <mt-tab-container-item id="tab-container2">
            <mt-field label="物品描述" placeholder="物品描述" type="textarea" rows="3" v-model="thingList.tdes"></mt-field>
            <mt-field label="物品价格" placeholder="请输入物品价格" v-model="thingList.tprice"></mt-field>
            <m-up-loader :src="src" :info="thingList"></m-up-loader>
        </mt-tab-container-item>
        
            <!-- 内容区2: 二手交易数据显示 -->

            <mt-tab-container-item id="tab-container1">
                <div class="main">
                    <router-link class="thing-list" v-for="item in thingLists" :key="item.tid" :to="{ name:'seconddetails', params: { secondList: item }}">
                        <img :src="'http://'+item.image" class="thing-list-img">
                        <span class="thing-list-title">{{item.tdes}}</span>
                        <span class="thing-list-price">￥{{item.tprice}}</span>
                    </router-link>
                </div>
            </mt-tab-container-item>

        </mt-tab-container> 
        <tabbar></tabbar>
    </div>
</template>

<script>
import tabbar from '../common/tabbar'
import mUpLoader from "../common/UpLoader"
import axios from "axios";
export default {
    props: {},
    data() {
        return {
            src: 'http://106.12.189.19/trade/insertTo',
            active : 'tab-container1',
            thingList:{
                tuid: window.localStorage.getItem("uid"),
                tdes:'',
                tprice:'',
            },              //二手信息提交
            thingLists:[]   //二手信息列表获取
        };
    },
    computed: {

    },
    created() {
        this.getthingLists();
    },
    mounted() {
    },
    watch: {

    },
    methods: {
        getthingLists(){
            axios({
                url: "/trade/rmess",
                method: "post",
                params: {}
                }).then(res => {
                // console.log(res)
                this.thingLists = res.data.list;
            });
        }
    },
    components: {
        tabbar,mUpLoader
    },
};
</script>

<style scoped lang="scss">
.mint-button--primary{
        background-color: #44ceff;
    }
    .mint-button--large{
        margin-top: 20px;
        left: 10%;
        width: 80%;
    }
.main{
    display: flex;
    flex-wrap: wrap;
    .thing-list{
        display: inline-flex;
        flex-wrap: wrap;
        width: 48%;
        background: rgb(255, 255, 255);
        margin:2% 1%;
        padding: 5% 0;
        border-radius: 5px;
        .thing-list-img{
            width: 88%;
            height: 78%;
            padding: 5%;
        };
        .thing-list-title{
            color: #1a1a1a;
            font-family: "微软雅黑";
            margin-left: 5%;
            font-weight: 500; 
            height: 10%;
        }
        .thing-list-price{
            color: red;
            width: 100%;  
            padding-bottom: 20px;   
            font-weight: 600;    
            margin-left: 5%;   
        }
    }
}
a{
    text-decoration: none;
}
</style>
