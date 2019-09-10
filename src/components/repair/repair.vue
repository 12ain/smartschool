<template>
  <div class="container">
    <!-- 顶栏 -->
    <mt-header fixed title="故障报备"></mt-header>

    <!-- 选项卡 -->
    <mt-navbar v-model="active">
      <mt-tab-item id="tab-container1">故障报备</mt-tab-item>
      <mt-tab-item id="tab-container2">报备信息</mt-tab-item>
    </mt-navbar>

    <!-- 内容分栏 -->
    <mt-tab-container v-model="active">
      <!-- 内容区1: 报备表单 -->
      <mt-tab-container-item id="tab-container1">
        <mt-field label="报备时间" placeholder="请输入报备时间" type="date" v-model="repairList.rdate"></mt-field>
        <mt-field label="教室地点" placeholder="请输入教室地点" type="text" v-model="repairList.radr"></mt-field>
        <mt-field label="设备类型" placeholder="请输入设备类型" type="text" v-model="repairList.rtype"></mt-field>
        <mt-field
          label="详细描述"
          placeholder="详细描述"
          type="textarea"
          rows="3"
          v-model="repairList.rdes"
        ></mt-field>
        <input type="file" accept="image/jpeg,image/x-png,image/gif" @change="fileImage">
        <mt-button type="primary" size="large" @click.native="submitRepairList">提交</mt-button>
      </mt-tab-container-item>

      <!-- 内容区2: 报修数据显示 -->

      <mt-tab-container-item id="tab-container2">
        <mt-cell-swipe
          v-for="item in repairInfo"
          :key="item.rid"
          :title="item.rdes"
          :label="item.wstatic"
        ></mt-cell-swipe>
      </mt-tab-container-item>
    </mt-tab-container>

    <tabbar></tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import tabbar from "../common/tabbar";
import { Toast } from "mint-ui";
export default {
  props: {},
  data() {
    return {
      active: "tab-container1",
      repairList: {
        ruid: window.localStorage.getItem("uid"),
        rdate: "2019/9/10",
        radr: "",
        rtype: "",
        rdes: "",
        wstatic: "待维修",
        image: ""
      },
      repairInfo: []
    };
  },
  computed: {},
  created() {},
  // created() {
  //     this.rightButtons = [
  //     {
  //       content: '编辑',
  //       style: { background: 'green', color: '#fff' },
  //       handler: () => this.$messagebox({
  //       title: '温馨提示',
  //       message: '即将进入编辑页面,请确认您填写信息的有效性.',
  //       showCancelButton: true,
  //       confirmButtonText:"继续",
  //       cancelButtonText:"取消"
  //     }).then(action => {
  //       if(action == 'confirm'){
  //         console.log('继续')
  //       }else{
  //         console.log('取消')
  //       }
  //   })
  //     },
  //     {
  //       content: '删除',
  //       style: { background: 'red', color: '#fff' },
  //       handler: () => this.$messagebox({
  //       title: '温馨提示',
  //       message: '删除后不可恢复,是否继续',
  //       showCancelButton: true,
  //       confirmButtonText:"确认删除",
  //       cancelButtonText:"取消"
  //     }).then(action => {
  //       if(action == 'confirm'){
  //         console.log('继续')
  //       }else{
  //         console.log('取消')
  //       }
  //   })
  //     },
  //   ];

  // },
  mounted() {
    axios({
      url: "/record/rmess",
      method: "post",
      params: {}
    }).then(res => {
      // Toast({
      //     message: res.data.msg,
      //     position: 'bottom',
      //     duration: 3000
      //     });
      this.repairInfo = res.data.list;
    });
  },
  watch: {},
  methods: {
    fileImage(){},
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
    }
  },
  components: {
    tabbar
  }
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
</style>
