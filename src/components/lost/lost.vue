<template>
    <div class="container">
        <mt-header fixed title="失物招领"></mt-header>
        <!-- 选项卡 -->
        <mt-navbar v-model="active">
        <mt-tab-item id="tab-container1" @click.native="getlostList">查看信息</mt-tab-item>
        <mt-tab-item id="tab-container2">发布信息</mt-tab-item>
        </mt-navbar>

        <!-- 内容分栏 -->
        <mt-tab-container v-model="active">
            <!-- 内容区1: 失物招领表单 -->
        <mt-tab-container-item id="tab-container2">
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

            <mt-tab-container-item id="tab-container1">
                <div class="nav">
                    <mt-button size="small" @click.native.prevent="actives = 'lost-container'">寻物启事</mt-button>
                    <mt-button size="small" @click.native.prevent="actives = 'get-container'">失物招领</mt-button>
                </div>
                <mt-tab-container v-model="actives">
                    <mt-tab-container-item id="lost-container">
                        <router-link 
                        v-for="item in lostLists" 
                        :key="item.id"  
                        :to="{ name:'lostdetails', params: { lostList: item }}"
                        class="thing-list"
                        >
                        <img :src="'http://'+item.image" class="thing-list-img">
                        <span class="thing-list-title">{{item.des}}</span>
                        <span class="thing-list-static">{{item.lstatic}}</span>
                        </router-link>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="get-container">
                        <router-link 
                        v-for="item in getLists" 
                        :key="item.id" 
                        :to="{ name:'lostdetails', params: { lostList: item }}"
                        class="thing-list"
                        >
                        <img :src="'http://'+item.image" class="thing-list-img">
                        <span class="thing-list-title">{{item.des}}</span>
                        <span class="thing-list-static">{{item.lstatic}}</span>
                        <!-- <mt-cell 
                        :title="item.des" 
                        :label="item.lstatic"
                        ></mt-cell>     -->
                        </router-link>     
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
export default {
    props: {

    },
    data() {
        return {
            src: 'http://47.94.10.228/lf/testInsertTo',
            active : 'tab-container1',
            actives : 'lost-container',
            lostList:{
                des : "",   // 物品名称及相关信息
                time : "",  // 丢失时间
                uid : window.localStorage.getItem("uid"),
                lflag : "失主",     // 失主/得主
                lstatic: "未解决", 
                udept: window.localStorage.getItem('udept')
            },
            lostLists:[],   //失主信息列表
            getLists:[],    //得主信息列表
        };
    },
    computed: {

    },
    created() {
        this.getlostList();
    },
    mounted() {
    },
    watch: {

    },
    methods: {
        getlostList(){
            this.http.post(this.ports.api.lf.testAllLost,
                {
                    lflag : "失主",
                    udept: window.localStorage.getItem("udept")
                    }
                ,res => {
                this.lostLists = res.data.list;
    });
            this.http.post(this.ports.api.lf.testAllFound,
                {
                    lflag : "得主",
                    udept : window.localStorage.getItem("udept")
                }
                ,res => {
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
.nav{
    text-align: center;
    .mint-button--default{
        // background-color: #4fb5eb;
        background-color:#44ceff;
        color: #ffffff;
    }
}
.thing-list{
        display: inline-flex;
        flex-wrap: wrap;
        width: 48%;
        background: rgb(255, 255, 255);
        margin:2% 1%;
        padding: 3% 0;
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
        }
        .thing-list-static{
            // color: red;
            width: 100%;  
            font-size: 0.8rem;
            margin-top: 5%;   
            // font-weight: 600;    
            margin-left: 5%;   
            color: #c0c0c0;
        }
    }
</style>
