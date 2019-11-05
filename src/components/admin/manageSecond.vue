<template>
  <div class="container">
    <mt-header fixed title="二手信息">
        <router-link slot="left" to="">
                <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
            </router-link>
    </mt-header>
    <div class="main">
        <router-link
        v-for="item in secondList"
        :key="item.tid"
        :to="{ name:'seconddetails', params: { secondList: item }}"
        >
        <mt-cell-swipe
            :title="item.tdes"
            :right="rightButtons"
            @touchstart.native="getid(item)"
        >
        <img slot="icon" :src="'http://' + item.image" width="30" height="30">
        </mt-cell-swipe>
        </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  components: {

  },
  props: {

  },
  data() {
    return {
        secondList:[],
        tid:'',
        secondItem:[],
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
        this.$router.push({ name:'changesecond', params: { secondList: this.seconditem }})
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
      ...mapMutations(["updatesecond"]),
     getid(item){
        // console.log(id);
        this.secondItem = item
        this.tid=item.tid
        this.updatesecond(this.secondItem)
        // console.log(this.secondItem)
      },
      getList(){
            this.http.post(this.ports.api.trade.rmess,
            {
            udept: window.localStorage.getItem("udept")
            },res => {
            // console.log(res);
            
            if (res.data.status == '0') {
                this.secondList = res.data.list
                // this.$toast(res.data.msg);
            } else {
                this.$toast(res.data.msg);
            }
            })
      },
      delList(tid){
          this.http.post(this.ports.api.trade.deleteTo, 
            {           
            tid: this.tid,
            },res => {
            // console.log(res);
            if (res.data.status == '0') {
                this.$toast(res.data.msg);
                this.getList();
            } else {
                this.$toast(res.data.msg);
                // console.log(res)
            }
            })
      },
  }
}
</script>

<style scoped lang="scss">

</style>