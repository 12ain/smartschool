<template>
  <div class="container">
    <mt-header fixed title="失物招领">
      <router-link slot="left" to>
        <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
      </router-link>
    </mt-header>

    <div class="main">
      <div class="nav">
        <mt-button size="small" @click.native.prevent="actives = 'lost-container'">寻物启事</mt-button>
        <mt-button size="small" @click.native.prevent="actives = 'get-container'">失物招领</mt-button>
      </div>
      <mt-tab-container v-model="actives">
        <mt-tab-container-item id="lost-container">
          <mt-cell-swipe 
          v-for="item in lostLists" 
          :key="item.id" 
          :title="item.des" 
          :label="item.lstatic"
          @touchstart.native="getid(item.id)"
          :right="rightButtons"
          >
          </mt-cell-swipe>
        </mt-tab-container-item>
        <mt-tab-container-item id="get-container">
          <mt-cell-swipe 
          v-for="item in getLists" 
          :key="item.id" 
          :title="item.des" 
          :label="item.lstatic"
          @touchstart.native="getid(item.id)"
          :right="rightButtons"
          >
          </mt-cell-swipe>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from 'vue'
import { CellSwipe,Toast } from 'mint-ui';
Vue.component(CellSwipe.name, CellSwipe, Toast);
import store from "../../store/store";
import { mapState, mapMutations } from "vuex";
import qs from 'Qs';
export default {
  props: {},
  data() {
    return {
      actives: "lost-container",
      lostList: {
        des: "", // 物品名称及相关信息
        time: "", // 丢失时间
        uid: window.localStorage.getItem("uid"),
        lflag: "失主", // 失主/得主
        lstatic: "未解决"
      },
      lostLists: [], //失主信息列表
      getLists: [] //得主信息列表
    };
  },
  computed: {},
  created() {
    this.getlostList();
    this.rightButtons = [
      {
        content: "编辑",
        style: { background: "green", color: "#fff" },
        handler: () =>
          this.$messagebox({
            title: "温馨提示",
            message: "即将进入编辑页面,请确认您填写信息的有效性.",
            showCancelButton: true,
            confirmButtonText: "继续",
            cancelButtonText: "取消"
          }).then(action => {
            if (action == "confirm") {
              console.log("继续");
            } else {
              console.log("取消");
            }
          })
      },
      {
        content: "删除",
        style: { background: "red", color: "#fff" },
        handler: () =>
          this.$messagebox({
            title: "温馨提示",
            message: "删除后不可恢复,是否继续",
            showCancelButton: true,
            confirmButtonText: "确认删除",
            cancelButtonText: "取消"
          }).then(action => {
            if (action == "confirm") {
              // console.log(this.id)
              this.delList(this.tid);
            } else {
              console.log("取消");
            }
          })
      }
    ];
  },
  mounted() {},
  watch: {},
  methods: {
      getid(id){
        // console.log(id);
        this.id=id
      },
    getlostList() {
      axios({
        url: "/lf/testAllLost",
        method: "post",
        params: { lflag: "失主" }
      }).then(res => {
        this.lostLists = res.data.list;
      });
      axios({
        url: "/lf/testAllFound",
        method: "post",
        params: { lflag: "得主" }
      }).then(res => {
        this.getLists = res.data.list;
      });
    },
    delList(){
          axios
            .post("/lf/testDeleteTo", 
            qs.stringify({           
            id: this.id,
            }))
            .then(res => {
            // console.log(res);
            if (res.data.status == '0') {
                Toast(res.data.msg);
                this.getlostList();
            } else {
                Toast(res.data.msg);
            }
            })
      },
  },
  components: {}
};
</script>

<style scoped lang="scss">
.mint-button--primary {
  background-color: #44ceff;
}
.mint-button--large {
  margin-top: 20px;
  left: 10%;
  width: 80%;
}
.nav {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 10px;
  .mint-button--default {
    // background-color: #4fb5eb;
    background-color: #44ceff;
    color: #ffffff;
  }
}
</style>
