<template>
    <div class="container">
        <mt-header fixed title="失物招领"></mt-header>
        <!-- 选项卡 -->
        <mt-navbar v-model="active">
        <mt-tab-item id="tab-container1">发布信息</mt-tab-item>
        <mt-tab-item id="tab-container2" @click.native="getlostList">查看信息</mt-tab-item>
        </mt-navbar>

        <!-- 内容分栏 -->
        <mt-tab-container v-model="active">
            <!-- 内容区1: 失物招领表单 -->
        <mt-tab-container-item id="tab-container1">
            <mt-field label="时间" placeholder="请输入时间" type="date" v-model="lostList.time"></mt-field>
            <mt-field label="物品描述" placeholder="物品描述" type="textarea" rows="3" v-model="lostList.des"></mt-field>            
            <mt-radio
            title="我丢失了:失主/我捡到了:得主"
            v-model="lostList.lflag"
            :options="['失主','得主']">
            </mt-radio>
            <m-up-loader :src="src" :info="lostList"></m-up-loader>

        </mt-tab-container-item>
        
            <!-- 内容区2: 失物招领数据显示 -->

            <mt-tab-container-item id="tab-container2">
                <div class="nav">
                    <mt-button size="small" @click.native.prevent="actives = 'lost-container'">寻物启事</mt-button>
                    <mt-button size="small" @click.native.prevent="actives = 'get-container'">失物招领</mt-button>
                </div>
                <mt-tab-container v-model="actives">
                    <mt-tab-container-item id="lost-container">
                        <mt-cell v-for="item in lostLists" :key="item.id" :title="item.des" :label="item.lstatic"></mt-cell> 
                    </mt-tab-container-item>
                    <mt-tab-container-item id="get-container">
                        <mt-cell v-for="item in getLists" :key="item.id" :title="item.des" :label="item.lstatic"></mt-cell>         
                    </mt-tab-container-item>
                    </mt-tab-container> 
                
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
            src: 'http://106.12.189.19/lf/testInsertTo',
            active : 'tab-container1',
            actives : 'lost-container',
            lostList:{
                des : "",   // 物品名称及相关信息
                time : "",  // 丢失时间
                uid : window.localStorage.getItem("uid"),
                lflag : "失主",     // 失主/得主
                lstatic: "未解决", 
            },
            lostLists:[],   //失主信息列表
            getLists:[],    //得主信息列表
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
        getlostList(){
            axios({
                url: "/lf/testAllLost",
                method: "post",
                params: {lflag : "失主"}
                }).then(res => {
                // Toast({
                //     message: res.data.msg,
                //     position: 'bottom',
                //     duration: 3000
                //     });
                console.log(res)
                this.lostLists = res.data.list;
    });
            axios({
                url: "lf/testAllFound",
                method: "post",
                params: {lflag : "得主"}
                }).then(res => {
                // Toast({
                //     message: res.data.msg,
                //     position: 'bottom',
                //     duration: 3000
                //     });
                console.log(res)
                this.getLists = res.data.list;
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
