<template>
  <div class="container">
    <mt-header fixed title="我的失物招领">
        <router-link slot="left" to="">
                <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
            </router-link>
    </mt-header>
    <div class="main">
        <mt-cell-swipe
            v-for="item in lostList"
            :key="item.id"
            :title="item.des"
            :right="rightButtons"
            :value="item.lstatic"
            @touchstart.native="getid(item.id)"
        >
        <img slot="icon" :src="'http://' + item.image" width="30" height="30">
        </mt-cell-swipe>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { CellSwipe,Toast } from 'mint-ui';
Vue.component(CellSwipe.name, CellSwipe, Toast);
import store from "../../../store/store";
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
        lostList:[],
        id:''
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
        this.id=id
      },
      getList(){
          axios
            .post("/lf/testAllThing", 
            qs.stringify({           
            uid: this.userInformation.uid,
        }))
            .then(res => {
            // console.log(res);
            
            if (res.data.status == '0') {
                this.lostList = res.data.list
                // Toast(res.data.msg);
            } else {
                Toast(res.data.msg);
            }
            })
      },
      delList(id){
          axios
            .post("/lf/testDeleteTo", 
            qs.stringify({           
            id: this.id,
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