<template>
  <div class="container">
      <mt-header fixed title="管理员">
            <router-link slot="left" to="">
                <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="main">
          <routerLink  :to="item.path" v-for="item in entrance" :key="item.id">
              <mt-button>{{item.name}}</mt-button>
          </routerLink>
        </div>
  </div>
</template>

<script>
import Vue from "vue";
import store from "../../store/store";
import { mapState, mapMutations } from "vuex";
export default {
  components: {

  },
  props: {

  },
  data() {
    return {
      title: "",
      entranceAdmin:[
        {
          id:1,
          name:'二手信息管理',
          path:'/manageSecond'
        },
        {
          id:2,
          name:'失物招领管理',
          path:'/manageLost'
        },
        {
          id:3,
          name:'考试通知管理',
          path:'/manageInformation'
        },
        {
          id:4,
          name:'考试报名入口管理',
          path:'/manageEntrance'
        },
      ],
      entranceRepair:[
        {
          id:0,
          name:'故障报备管理',
          path:'/manageRepair'
        },
      ],
      entrance:[],
    }
  },
  computed: {
    ...mapState(["userInformation"]),

  },
  watch: {

  },
  created() {
    this.decide()
  },
  mounted() {

  },
  methods: {
    decide(){
      if(this.userInformation.ugrade === '2'){
        this.entrance = this.entranceAdmin
      }
      if (this.userInformation.ugrade === '1') {
        this.entrance = this.entranceRepair
      }
    }
  }
}
</script>

<style scoped lang="scss">
.main{
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  text-align: center;
  a{
    // width: 50%;
    padding: 3% 0;
  .mint-button{
    width: 50%;
    height: 80px;
    background-color: #44ceff;
    color: white;
  }
  }
}
</style>