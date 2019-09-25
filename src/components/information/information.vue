<template>
    <div class="container">
        <mt-header fixed title="考试信息"></mt-header>

        <!-- 选项卡 -->
        <mt-navbar v-model="active">
        <mt-tab-item id="tab-container1">考试通知</mt-tab-item>
        <mt-tab-item id="tab-container2">考试入口</mt-tab-item>
        </mt-navbar>

        <!-- 内容分栏 -->
        <mt-tab-container v-model="active">
            <!-- 内容区1: 考试通知 -->
            <mt-tab-container-item id="tab-container1">
                <div v-for="(information,i) in testList"
                    :key="information.testid" 
                    class="item"
                    @click="showDetails(i)"
                    >
                    <div class="item-main">
                        <div class="item-title">{{ information.testname }}</div>
                        <div class="item-label">
                            <span class="item-date">
                            {{ information.testdate | dateFormat('yyyy-mm-dd') }}
                            </span>
                        </div>
                    </div>
                    <div class="img">
                        <img :src="'http://'+information.image" width="60" height="60" class="img-icon">
                    </div>
                </div>
                <!-- <mt-cell 
                v-for="(information,i) in testList" 
                :key="information.testid"
                :title="information.testname"
                :label="information.testdate | dateFormat('yyyy-mm-dd')" 
                value="详情" 
                is-link 
                @click.native="showDetails(i)"  
                >
                </mt-cell> -->
            </mt-tab-container-item>
            <mt-popup
                v-model="popupVisible"
                popup-transition="popup-fade"
                >
                <div class="mint-popup-container">
                    <span class="mint-popup-title">通知</span>
                    <div class="mint-popup-image">
                        <img :src="'http://'+everyTest.image">
                    </div>
                        <span class="mint-popup-cell">考试名称:<span>{{ everyTest.testname }}</span></span>
                        <span class="mint-popup-cell">考试时间: <span>{{ everyTest.testdate | dateFormat('yyyy-mm-dd') }}</span></span>
                        <span class="mint-popup-cell">考试地点: <span>{{ everyTest.testarea }}</span></span>
                </div>
                </mt-popup> 
            <!-- 内容区2: 考试入口 -->
            <mt-tab-container-item id="tab-container2"> 
                <mt-cell
                v-for="(item) in collegeList"
                :key="item.id"
                :title="item.name"
                is-link
                :to="{ name:'entrance', query: { collegeName: item.name }}"
                >
                </mt-cell>
            </mt-tab-container-item>
        </mt-tab-container>
        <tabbar></tabbar>
    </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import router from "../../router/index";
import store from "../../store/store";
import { mapState, mapMutations } from "vuex";
import { Toast } from 'mint-ui';
import tabbar from '../common/tabbar'
import qs from 'Qs';
axios.defaults.baseURL = 'http://47.94.10.228';
axios.defaults.withCredentials = true;
export default {
    props: {

    },
    data() {
        return {
            active: "tab-container1",
            popupVisible: false,
            testList:[],        // 所有考试信息列表
            everyTest:[],       // 单独考试信息
            collegeList: [      // 学院列表
                {
                    name:'公共考试',
                    id: 0,
                },
                {
                    name:'信息工程学院',
                    id: 1,
                },
                {
                    name:'建筑工程学院',
                    id: 2,
                },
                {
                    name:'机电工程学院',
                    id: 3,
                },
                {
                    name:'经济管理学院',
                    id: 4,
                },
                {
                    name:'职业技术学院',
                    id: 5,
                },
                {
                    name:'航空学院',
                    id: 6,
                },
                {
                    name:'外语学院',
                    id: 7,
                }
            ]
        };
    },
    computed: {

    },
    created() {
    axios
        .post("/testtell/checkTell",
        qs.stringify({
            udept:window.localStorage.getItem('udept')}
        ))
        .then(res => {
        // console.log(res);
        
        if (res.data.status == '0') {
        //   Toast(res.data.msg);
            this.testList = res.data.list;
        } else {
            Toast(res.data.msg);
        }
        })
        .catch();

    },
    mounted() {
    },
    watch: {

    },
    methods: {    
        ...mapMutations(["update"]),
        showDetails(key){
            this.popupVisible = !this.popupVisible;
            this.everyTest = this.testList[key];
            // console.log(this.testList[key])
        }
    },
    components: {
        tabbar,
    },
};
</script>

<style scoped lang="scss">
.item{
  display: inline-flex;
  width: 96%;
  position: relative;
  left:2%;
  flex-direction: row;
  border: solid 1px white;
  border-left:solid 3px #44ceff;
  margin: 3% 0;
  background-color: white;
  border-radius: 3px;
  .item-main{
    display: inline-flex;
    flex-direction: column;
    width: 90%;
  }
  .img{
    margin: 15px 15px;
  }
  .img-icon{
    border-radius: 3px;
  }
  .item-title{
    flex: 4;
    font-size: 1.1rem;
    margin-top: 6%;
    margin-left: 3%;
    font-weight: 600;
  }
  .item-label{
    font-size: 0.8rem;
    margin-bottom: 6%;
    margin-left: 3%;
  }
}
.mint-cell{
    border-radius: 15px;
    margin: 20px 0;
}
.mint-popup{
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    justify-content:center;
    .mint-popup-container{
        display: flex;
        // flex-basis: 350px;
        width: 280px;
        flex-direction: column;
        // justify-content:center;
        align-items: center;
        .mint-popup-title{
            font-size: 20px;
            margin: 10px;
            padding-bottom: 10px;
        }
        .mint-popup-cell{
            padding: 5px 0;
        }
        .mint-popup-image{
            text-align: center;
            img{
            max-width: 50%;
            max-height: 50%;
        }
        } 
    }
}
</style>
