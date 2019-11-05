<template>
  <div class="container">
    <mt-header fixed title="失物招领">
      <router-link slot="left" to>
        <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
      </router-link>
    </mt-header>

    <div class="main">
      <div class="nav">
        <mt-button size="small" @click.native.prevent="getlostList">寻物启事</mt-button>
        <mt-button size="small" @click.native.prevent="getfoundList">失物招领</mt-button>
      </div>
      <mt-tab-container v-model="actives">
        <mt-tab-container-item id="lost-container">
          <router-link 
          v-for="item in lostList" 
          :key="item.id" 
          :to="{ name:'lostdetails', params: { lostList: item }}">
          <mt-cell-swipe 
          :title="item.des" 
          :label="item.lstatic"
          @touchstart.native="getid(item)"
          :right="rightButtons"
          >
          <img slot="icon" :src="'http://' + item.image" width="30" height="30">
          </mt-cell-swipe>
          </router-link>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: {},
  data() {
    return {
      actives: "lost-container",
      lostList: [], //信息列表
      id:'',
      lostItem:[],
    };
  },
  computed: {
    ...mapState(["userInformation"]),
  },
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
              this.$router.push({ name:'changelost', params: { lostList: this.lostitem }})
            } else {
              // console.log("取消");
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
              this.delList(this.id);
            } else {
              // console.log("取消");
            }
          })
      }
    ];
  },
  mounted() {},
  watch: {},
  methods: {
      ...mapMutations(["updatelost"]),
      getid(item){
        this.lostItem = item
        this.id=item.id
        this.updatelost(this.lostItem)
      },
    getlostList() {
      this.http.post(this.ports.api.lf.testAllLost,
      {
        lflag: "失主" ,
        udept: window.localStorage.getItem("udept"),
      },res => {
        this.lostList = res.data.list;
      })},
    getfoundList(){
      this.http.post(this.ports.api.lf.testAllFound,
        { 
          lflag: "得主" ,
          udept : window.localStorage.getItem("udept")
          }
      ,res => {
        this.lostList = res.data.list;
      });
    },
    delList(){
          this.http.post(this.ports.api.lf.testDeleteTo, 
            {           
              id: this.id,
            }
            ,res => {
            // console.log(res);
            if (res.data.status == '0') {
                this.$toast(res.data.msg);
                this.getlostList();
            } else {
                this.$toast(res.data.msg);
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
