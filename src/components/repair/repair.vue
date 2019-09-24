<template>
  <div class="container">
    <!-- 顶栏 -->
    <mt-header fixed title="故障报备"></mt-header>
    <div class="main">
    <!-- 选项卡 -->
    <mt-navbar v-model="active">
      <mt-tab-item id="tab-container2" @click.native="getRepairLists">报备信息</mt-tab-item>
      <mt-tab-item id="tab-container1">故障报备</mt-tab-item>
    </mt-navbar>

    <!-- 内容分栏 -->
    <mt-tab-container v-model="active">
      <!-- 内容区1: 报备表单 -->
      <mt-tab-container-item id="tab-container1">
        <mt-field label="报备时间" placeholder="请输入报备时间" type="date" v-model="repairList.rdate"></mt-field>
        <mt-field label="报备地点" placeholder="请输入报备地点" type="text" v-model="repairList.radr"></mt-field>
        <mt-field label="设备类型" placeholder="请输入设备类型" type="text" v-model="repairList.rtype"></mt-field>
        <mt-field label="详细描述" placeholder="详细描述" type="textarea" rows="3" v-model="repairList.rdes"></mt-field>
        <!-- <input type="file" accept="image/jpeg,image/x-png,image/gif" @change="fileImage"> -->
        <m-up-loader :src="src" :info="repairList"></m-up-loader>
        <!-- <mt-button type="primary" size="large" @click.native="submitRepairList">提交</mt-button> -->
      </mt-tab-container-item>

      <!-- 内容区2: 报修数据显示 -->

      <mt-tab-container-item id="tab-container2">
        <router-link v-for="item in repairInfo"
          :key="item.rid" 
          :to="{ name:'repairdetails', params: { repairList: item }}"
          class="item"
          >
          <div class="item-main">
            <div class="item-title">{{ item.rdes }}</div>
              <div class="item-label">{{ item.wstatic }}
                <span class="item-date">
                  {{ item.rdate | dateFormat('yyyy-mm-dd') }}
                  </span>
              </div>
            </div>
            <div class="img">
          <img :src="'http://' + item.image" width="60" height="60" class="img-icon">
            </div>
        </router-link>
      </mt-tab-container-item>
    </mt-tab-container>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import tabbar from "../common/tabbar";
import { Toast } from "mint-ui";
import mUpLoader from "../common/UpLoader"
export default {
  props: {},
  data() {
    return {
      src: 'http://106.12.189.19/record/insertTo',
      active: "tab-container2",
      repairList: {
        ruid: window.localStorage.getItem("uid"),
        rdate: "",
        radr: "",
        rtype: "",
        rdes: "",
        wstatic: "待维修",
      },
      repairInfo: []
    };
  },
  computed: {},
  created() {
    this.getRepairLists();
  },
  mounted() {},
  watch: {},
  methods: {
    submitRepairList() {
      let formData = new FormData();
      formData.append("ruid", this.repairList.ruid);
      formData.append("rdate", this.repairList.rdate);
      formData.append("radr", this.repairList.radr);
      formData.append("rtype", this.repairList.rtype);
      formData.append("rdes", this.repairList.rdes);
      formData.append("wstatic", this.repairList.wstatic);
      formData.append("image", );
      console.log(this.repairList.image)
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      axios.post("/record/insertTo", formData, config)
      .then(res => {
        if (res.status === 200) {
            console.log(res);
        }
      });
    },
    getRepairLists(){
      axios({
      url: "/record/rmess",
      method: "post",
    }).then(res => {
      // Toast({
      //     message: res.data.msg,
      //     position: 'bottom',
      //     duration: 3000
      //     });
      this.repairInfo = res.data.list;
    });
    }
  },
  components: {
    tabbar,mUpLoader
  }
};
</script>

<style lang="scss" scoped>
.item{
  display: inline-flex;
  width: 96%;
  position: relative;
  left:1%;
  flex-direction: row;
  border: solid 1px white;
  border-left:solid 3px #44ceff;
  margin: 3% 0;
  background-color: white;
  border-radius: 3px;
  .item-main{
    display: inline-flex;
    flex-direction: column;
    width: 90%;
  }
  .img{
    margin: 15px 15px;
  }
  .img-icon{
    border-radius: 3px;
  }
  .item-title{
    flex: 4;
    font-size: 1.1rem;
    font-weight: 600;
    margin-top: 6%;
    margin-left: 3%;
  }
  .item-label{
    font-size: 0.8rem;
    margin-bottom: 6%;
    margin-left: 3%;
  }
}
</style>
