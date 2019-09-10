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
                <mt-cell 
                v-for="information in testList" 
                :key="information.testid"
                :title="information.testname"
                :label="information.testdate | dateFormat()" 
                value="详情" 
                is-link 
                @click.native="showDetails(information.testid)"  
                >
                </mt-cell>
            </mt-tab-container-item>
            <mt-popup
                v-for="information in testList" 
                    :key="information.testid"
                v-model="popupVisible"
                popup-transition="popup-fade"
                >
                <div class="mint-popup-container">
                    <span class="mint-popup-title">通知</span>
                    <div class="mint-popup-image">
                        <img src="http://106.12.189.19/uploads/46068ba7fd634e6fba9e8b04b5e8798f_软考.jpg">
                    </div>
                        <span class="mint-popup-cell">考试名称:<span>{{ information.testname }}</span></span>
                        <span class="mint-popup-cell">考试时间: <span>2019年10月28日</span></span>
                        <span class="mint-popup-cell">考试地点: <span>{{ information.testid }}</span></span>
                </div>
                </mt-popup> 
            <!-- 内容区2: 考试入口 -->
            <mt-tab-container id="tab-container2"> 
                <mt-cell title="标题文字" value="说明文字"></mt-cell>
                <mt-cell title="标题文字" value="说明文字"></mt-cell>
                <mt-cell title="标题文字" value="说明文字"></mt-cell>
                <mt-cell title="标题文字" value="说明文字"></mt-cell>
            </mt-tab-container>
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
axios.defaults.baseURL = 'http://106.12.189.19';
axios.defaults.withCredentials = true;
export default {
    props: {

    },
    data() {
        return {
            active: "tab-container1",
            popupVisible: false,
            testList:[]
        };
    },
    computed: {

    },
    created() {
        {
        axios
          .post("/testtell/checkTell")
          .then(res => {
            // console.log(res);
            
            if (res.data.status == '0') {
              Toast(res.data.msg);
              this.testList = res.data.list;
            } else {
              Toast(res.data.msg);
            }
          })
          .catch();
      }

    },
    mounted() {
    },
    watch: {

    },
    methods: {    
        ...mapMutations(["update"]),
        showDetails(testid){
            this.popupVisible = !this.popupVisible;
            console.log(testid)
        }
    },
    components: {
        tabbar,
    },
};
</script>

<style scoped lang="scss">
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
