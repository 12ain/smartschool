<template>
  <div class="container">
    <mt-header fixed title="考试报名入口">
        <router-link slot="left" to="">
                <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
            </router-link>
        <mt-button icon="tianjia" slot="right" @click.native="popupVisible=!popupVisible">添加</mt-button>
    </mt-header>
    <div class="main">
                <mt-cell-swipe 
                v-for="item in testList" 
                :key="item.tid"
                :title="item.tname"
                :label="item.tcollege" 
                :right="rightButtons"
                @touchstart.native="getid(item)"
                >
                </mt-cell-swipe>
                <mt-popup
                v-model="popupVisible"
                >
                <div calss="add">
                  <mt-field label="考试名称" placeholder="考试名称" v-model="newtestList.tname"></mt-field>
                  <mt-field label="考试报名网址" placeholder="考试报名网址" v-model="newtestList.turl"></mt-field>
                  <mt-field label="学院" placeholder="学院" v-model="newtestList.tcollege"></mt-field>
                  <mt-button @click.native="submitNew">提交</mt-button>
                </div>
              </mt-popup>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import mUpLoader from "../common/UpLoader";
export default {
  components: {
    mUpLoader
  },
  props: {

  },
  data() {
    return {
        src:'http://47.94.10.228/test/insertTest',
        popupVisible:false,  // 显示添加组件
        testList:[],        // 所有考试信息列表
        tid:'',
        newtestList:{
          tname:'',
          turl:'',
          tcollege:'',
        },
        testItem:[]
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
      this.$router.push({ name:'changeEntrance', params: { EntranceList: this.Entranceitem }})
    }else{
        // console.log('取消')
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
        // console.log('取消')
    }
})
    },
];

},
  mounted() {

  },
  methods: {
    ...mapMutations(["updateentrance"]),
      getid(item){
        this.entranceItem = item
        this.tid=item.tid
        this.updateentrance(this.entranceItem)
      },
      getList(){
          axios.post("/test/checktest")
            .then(res => {
            // console.log(res);
            
            if (res.data.status == '0') {
                this.testList = res.data.list
                // this.$toast(res.data.msg);
            } else {
                this.$toast(res.data.msg);
            }
            })
      },
      delList(){
          this.http
            .post(this.ports.api.test.deleteTest, 
            {           
            tid: this.tid,
            },res => {
            // console.log(res);
            if (res.data.status == '0') {
                this.$toast(res.data.msg);
                this.getList();
            } else {
                this.$toast(res.data.msg);
            }
          })
      },
      submitNew(){
          this.http
            .post(this.ports.api.test.insertTest, 
            {           
            tname: this.newtestList.tname,
            turl: this.newtestList.turl,
            tcollege: this.newtestList.tcollege,
            },
            res => {
            // console.log(res);
            if (res.data.status == '0') {
                this.$toast(res.data.msg);
                this.getList();
                this.popupVisible=false;
            } else {
                this.$toast(res.data.msg);
            }
            })
      },
  }
}
</script>

<style scoped lang="scss">
</style>