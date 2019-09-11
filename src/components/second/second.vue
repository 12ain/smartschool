<template>
    <div class="container">
        <mt-header fixed title="二手交易信息"></mt-header>
        <!-- 选项卡 -->
        <mt-navbar v-model="active">
        <mt-tab-item id="tab-container1">发布交易信息</mt-tab-item>
        <mt-tab-item id="tab-container2" @click.native="getthingLists">查看交易信息</mt-tab-item>
        </mt-navbar>

        <!-- 内容分栏 -->
        <mt-tab-container v-model="active">
            <!-- 内容区1: 二手交易表单 -->
        <mt-tab-container-item id="tab-container1">
            <mt-field label="物品描述" placeholder="物品描述" type="textarea" rows="3" v-model="thingList.tdes"></mt-field>
            <mt-field label="物品价格" placeholder="请输入物品价格" v-model="thingList.tprice"></mt-field>
            <m-up-loader :src="src" :info="thingList"></m-up-loader>

            <!-- <mt-field label="上传图片" placeholder="上传图片" type="file" v-model="image"></mt-field>
            <mt-button type="primary" size="large">提交</mt-button> -->
        </mt-tab-container-item>
        
            <!-- 内容区2: 二手交易数据显示 -->

            <mt-tab-container-item id="tab-container2">
                <mt-cell v-for="item in thingLists" :key="item.tid" :title="item.tdes" :label="item.tprice.toString()"></mt-cell>
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
    props: {

    },
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
                console.log(res)
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
</style>
