<template>
  <div class="container">
    <mt-header fixed title="故障报修管理">
        <router-link slot="left" to="">
                <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
            </router-link>
    </mt-header>
    <div class="main">
            <div class="nav">
                <mt-button size="small" @click.native.prevent="getList1">待维修</mt-button>
                <mt-button size="small" @click.native.prevent="getList2">已维修</mt-button>
            </div>
        <router-link 
        :to="{ name:'repairdetails', params: { repairList: item }}"
        v-for="item in repairList"
        :key="item.rid">
        <mt-cell-swipe
            :title="item.rdes"
            :right="rightButtons"
            :value="item.rid"
            @touchstart.native="getid(item)"
        >
        <img slot="icon" :src="'http://' + item.image" width="30" height="30">
        </mt-cell-swipe>
        </router-link>
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
export default {
  components: {

  },
  props: {

  },
  data() {
    return {
        repairList:[],
        rid:'',
        repairItem:[],
    }
  },
  computed: {
    ...mapState(["userInformation"]),
  },
  watch: {

  },
created() {
    this.getList1();
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
        this.$router.push({ name:'changerepair', params: { repairList: this.repairitem }})
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
        this.delList(this.rid)
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
      ...mapMutations(["updaterepair"]),
      getid(item){
        // console.log(id);
        this.repairItem = item
        this.rid=item.id
        this.updaterepair(this.repairItem)
        // console.log(this.repairItem)
      },
      getList1(){
          axios
            .post("/record/wwmessmy", 
            qs.stringify({           
        }))
            .then(res => {
            // console.log(res);
            
            if (res.data.status == '0') {
                this.repairList = res.data.list
                Toast(res.data.msg);
            } else {
                Toast(res.data.msg);
            }
            })
      },
      getList2(){
          axios
            .post("/record/wymessmy", 
            qs.stringify({           
            wid: this.userInformation.uid,
        }))
            .then(res => {
            // console.log(res);
            
            if (res.data.status == '0') {
                this.repairList = res.data.list
                Toast(res.data.msg);
            } else {
                Toast(res.data.msg);
            }
            })
      },
      delList(rid){
          axios
            .post("/record/deleteTo", 
            qs.stringify({           
            rid: rid,
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
.nav{
    margin-top: 50px;
    margin-bottom: 10px;
    text-align: center;
    .mint-button--default{
        // background-color: #4fb5eb;
        background-color:#44ceff;
        color: #ffffff;
    }
}
</style>