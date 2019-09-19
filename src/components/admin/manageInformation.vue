<template>
  <div class="container">
    <mt-header fixed title="考试通知">
        <router-link slot="left" to="">
                <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
            </router-link>
        <mt-button icon="tianjia" slot="right" @click.native="popupVisible=!popupVisible">添加</mt-button>
    </mt-header>
    <div class="main">
                <mt-cell-swipe 
                v-for="information in testList" 
                :key="information.testid"
                :title="information.testname"
                :label="information.testdate | dateFormat('yyyy-mm-dd')" 
                :right="rightButtons"
                @touchstart.native="getid(information.testid)"
                >
                  <img slot="icon" :src="'http://' + information.image" width="30" height="30">
                </mt-cell-swipe>

                <mt-popup
                v-model="popupVisible"
                >
                <div calss="add">
                  <mt-field label="考试名称" placeholder="考试名称" v-model="newtestList.testname"></mt-field>
                  <mt-field label="考试时间" placeholder="考试时间" v-model="newtestList.testdate" type="date"></mt-field>
                  <mt-field label="考试地点" placeholder="考试地点" v-model="newtestList.testarea"></mt-field>
                  <m-up-loader :src="src" :info="newtestList"></m-up-loader>
                </div>
              </mt-popup>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { CellSwipe,Toast } from 'mint-ui';
Vue.component(CellSwipe.name, CellSwipe, Toast);
import store from "../../store/store";
import { mapState, mapMutations } from "vuex";
import axios from 'axios';
import qs from 'Qs';
import mUpLoader from "../common/UpLoader";
export default {
  components: {
    mUpLoader
  },
  props: {

  },
  data() {
    return {
        src:'http://106.12.189.19/testtell/insertTell',
        popupVisible:false,  // 显示添加组件
        testList:[],        // 所有考试信息列表
        testid:'',
        newtestList:{
          testname:'',
          testdate:'',
          testarea:'',
        },
    }
  },
  computed: {
    ...mapState(["userInformation"]),
  },
  watch: {

  },
created() {
    this.getList();
    this.rightButtons = [
    {
    content: '编辑',
    style: { background: 'green', color: '#fff' },
    handler: () => this.$messagebox({
    title: '温馨提示',
    message: '即将进入编辑页面,请确认您填写信息的有效性.',
    showCancelButton: true,
    confirmButtonText:"继续",
    cancelButtonText:"取消"
    }).then(action => {
    if(action == 'confirm'){
        console.log('继续')
    }else{
        console.log('取消')
    }
})
    },
    {
    content: '删除',
    style: { background: 'red', color: '#fff' },
    handler: () => this.$messagebox({
    title: '温馨提示',
    message: '删除后不可恢复,是否继续',
    showCancelButton: true,
    confirmButtonText:"确认删除",
    cancelButtonText:"取消"
    }).then(action => {
    if(action == 'confirm'){
        // console.log(this.id)
        this.delList(this.tid)
    }else{
        console.log('取消')
    }
})
    },
];

},
  mounted() {

  },
  methods: {
      getid(id){
        // console.log(id);
        this.testid=id
      },
      getList(){
          axios
            .post("/testtell/checkTell")
            .then(res => {
            // console.log(res);
            
            if (res.data.status == '0') {
                this.testList = res.data.list
                // Toast(res.data.msg);
            } else {
                Toast(res.data.msg);
            }
            })
      },
      delList(rid){
          axios
            .post("/testtell/deleteTell", 
            qs.stringify({           
            testid: this.testid,
            }))
            .then(res => {
            // console.log(res);
            if (res.data.status == '0') {
                Toast(res.data.msg);
                this.getList();
            } else {
                Toast(res.data.msg);
            }
            })
      },
  }
}
</script>

<style scoped lang="scss">
</style>