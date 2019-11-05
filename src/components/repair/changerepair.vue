<template>
    <div class="container">
        <mt-header fixed :title="repairList.rdes">
            <router-link slot="left" to="">
                <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="main">
            <div class="img">
                <img :src="'http://'+oldimg" width="100%">
            </div>
            <div class="show" v-show="!isRepair">
                <mt-field label="报备编号" v-model="userRepair.rid" readonly></mt-field>
                <mt-field label="教室地点" placeholder="请输入教室地点" type="text" v-model="userRepair.radr"></mt-field>
                <mt-field label="设备类型" placeholder="请输入设备类型" type="text" v-model="userRepair.rtype"></mt-field>
                <mt-field label="详细描述" placeholder="详细描述" type="textarea" rows="3" v-model="userRepair.rdes"></mt-field>
                <m-up-loader :src="usersrc" :info="userRepair"></m-up-loader>
            </div>
            <div class="show" v-show="isRepair">
                <mt-field label="报备编号" v-model="repairRepair.rid" readonly></mt-field>
                <mt-field label="维修人员" v-model="repairRepair.wid" readonly></mt-field>
                <mt-field label="维修状态" v-model="repairRepair.wstatic"></mt-field>
                <mt-field label="维修时间" type="date" v-model="repairRepair.wdate"></mt-field>
                <mt-button @click.native="submitRepair">提交</mt-button>
                <!-- <m-up-loader :src="repairsrc" :info="repairRepair"></m-up-loader> -->
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import mUpLoader from "../common/UpLoader"
export default {
    props: {},
    data() {
        return {
            repairList: [],
            userRepair: {},
            repairRepair:{},
            usersrc: this.http.BASE_URL + this.ports.api.record.updateTo,
            repairsrc: this.http.BASE_URL + this.ports.api.record.delByW,
            isAdmin:false,
            isRepair:false,
        };
    },
    computed: {
      ...mapState(["oldimg"]),
      ...mapState(["repairInformation"]),
      ...mapState(["userInformation"]),
    },
    created() {
        this.give(),
        this.decide()
    },
    mounted() {
    },
    watch: {

    },
    methods: {
      give(){
        this.repairList=this.repairInformation
      },
      decide(){
        if (this.userInformation.ugrade === '2' || this.userInformation.ugrade === '0'){
              this.userRepair.rid = this.repairList.rid
              this.userRepair.radr = this.repairList.radr
              this.userRepair.rtype = this.repairList.rtype
              this.userRepair.rdes = this.repairList.rdes
              this.userRepair.udept = window.localStorage.getItem("udept")
            }
        if (this.userInformation.ugrade === '1'){        
              this.isRepair = true;
              this.repairRepair.rid = this.repairList.rid
              this.repairRepair.wid = this.userInformation.uid
              this.repairRepair.wstatic = this.repairList.wstatic
              this.repairRepair.wdate = this.repairList.wdate
              this.userRepair.udept = window.localStorage.getItem("udept")
          }
      },
        submitRepair(){
          this.http.post(this.ports.api.record.delByW, 
            {           
            rid: this.repairRepair.rid,
            wid: this.repairRepair.wid,
            wstatic: this.repairRepair.wstatic,
            wdate: this.repairRepair.wdate,
        },res => {
            // console.log(res);
            if (res.data.status == '0') {
                this.$toast(res.data.msg);
                this.$router.back(-1)
            } else {
                this.$toast(res.data.msg);
            }
            })
      },
    },
    components: {
      mUpLoader,
    },
};
</script>

<style scoped lang="scss">
.container{
    margin-bottom: 0;
}
.img{
        width: 100%;
        max-height: 50%;
    }
.show{
    display: flex;
    flex-direction: column;
    background-color: white;
    .show-title{
        font-size: 1.2rem;
    }
    .show-price{
        color: red;
        font-weight: 600; 
    }
}
</style>