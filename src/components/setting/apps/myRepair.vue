<template>
  <div class="container">
    <mt-header fixed title="我的故障报修">
        <router-link slot="left" to="">
                <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
            </router-link>
    </mt-header>
    <div class="main">
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
import { mapState, mapMutations } from "vuex";
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
        this.$router.push({ name:'changerepair', params: { repairList: this.repairitem }})
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
        this.delList(this.rid)
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
      ...mapMutations(["updaterepair"]),
      getid(item){
        // console.log(id);
        this.repairItem = item
        this.rid=item.rid
        this.updaterepair(this.repairItem)
        // console.log(this.repairItem)
      },
      getList(){
          this.http.post(this.ports.api.record.rmessmy, 
            {           
            ruid: this.userInformation.uid, 
            },res => {
            // console.log(res);
            
            if (res.data.status == '0') {
                this.repairList = res.data.list
                this.$toast(res.data.msg);
            } else {
                this.$toast(res.data.msg);
            }
            })
      },
      delList(rid){
          this.http.post(this.ports.api.record.deleteTo, 
            {           
            rid: rid,
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
  }
}
</script>

<style scoped lang="scss">

</style>