<template>
  <div class="container">
    <mt-header fixed title="账号与安全">
        <router-link to="/setting" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
    <mt-button icon="xiazai" slot="right" @click.native="submitInformation">提交</mt-button>
    </mt-header>
    <router-link to="/avatar">
      <mt-cell title="头像" is-link>
        <img slot="icon" :src="userInformation.uimage" width="30" class="cell-avatar" v-show="avator">
        <img slot="icon" src="../../../assets/images/logo.png" width="30" class="cell-avatar" v-show="!avator">
      </mt-cell>
    </router-link>
    <mt-field label="账号" placeholder="请输入账号" v-model="userInformation.uid" readonly></mt-field>
    <mt-field label="密码" placeholder="请输入密码" v-model="userInformation.upsd" type="password" ></mt-field>
    <mt-field label="姓名" placeholder="请输入姓名" v-model="userInformation.uname"></mt-field>
    <mt-field label="邮箱" placeholder="请输入邮箱" v-model="userInformation.uemail" type="email" ></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" v-model="userInformation.utel" type="tel" ></mt-field>
  <a class="mint-cell mint-field">
    <div class="mint-cell-wrapper">
      <div class="mint-cell-title">
        <span class="mint-cell-text">学校</span>
      </div>
      <div class="mint-cell-value">
          <select v-model="userInformation.udept" class="mint-field-core">
            <option value="青岛工学院">青岛工学院</option>
            <option value="山东师范大学">山东师范大学</option>
            <option value="山东科技大学">山东科技大学</option>
            <option value="中国石油大学(华东)">中国石油大学(华东)</option>
            <option value="中国海洋大学">中国海洋大学</option>
            <option value="青岛大学">青岛大学</option>
            <option value="青岛科技大学">青岛科技大学</option>
            <option value="青岛理工大学">青岛理工大学</option>
            <option value="青岛农业大学">青岛农业大学</option>
            <option value="青岛滨海学院">青岛滨海学院</option>
            <option value="青岛恒星科技学院">青岛恒星科技学院</option>
            <option value="青岛黄海学院">青岛黄海学院</option>
            <option value="山东外贸职业学院">山东外贸职业学院</option>
            <option value="青岛农业大学海都学院">青岛农业大学海都学院</option>
            <option value="青岛职业技术学院">青岛职业技术学院</option>
            <option value="青岛理工大学琴岛学院">青岛理工大学琴岛学院</option>
            <option value="北京电影学院现代创意媒体学院">北京电影学院现代创意媒体学院</option>
            <option value="青岛酒店管理职业技术学院">青岛酒店管理职业技术学院</option>
            <option value="青岛求实职业技术学院">青岛求实职业技术学院</option>
            <option value="青岛远洋船员职业学院">青岛远洋船员职业学院</option>
            <option value="青岛飞洋职业技术学院">青岛飞洋职业技术学院</option>
            <option value="青岛港湾职业技术学院">青岛港湾职业技术学院</option>
          </select>
      </div>
    </div>
  </a>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    props: {

    },
    data() {
        return {
          avator:false,
        };
    },
    computed: {
        ...mapState(["userInformation"]),
    },
    created() {
      if (this.userInformation.uimage != null)
        this.avator=true;

    },
    mounted() {

    },
    watch: {

    },
    methods: {
      ...mapMutations(["update"]),
        submitInformation(){
        this.http.post(this.ports.api.user.update, 
          {           
            uid: this.userInformation.uid, 
            upsd: this.userInformation.upsd,	
            uname: this.userInformation.uname,	
            uemail: this.userInformation.uemail,
            utel: this.userInformation.utel,
            udept: this.userInformation.udept,
        },res => {
            
            if (res.data.status == '0') {
              this.$toast(res.data.msg);
              this.update({
                uid: this.userInformation.uid, 
                upsd: this.userInformation.upsd,	
                uname: this.userInformation.uname,	
                uemail: this.userInformation.uemail,
                utel: this.userInformation.utel,
                udept: this.userInformation.udept,
                ugrade: this.userInformation.ugrade,
                uimage: this.userInformation.uimage
            });
            } else {
              this.$toast(res.data.msg);
            }
          })
      }
    },
    components: {

    },
};
</script>

<style scoped lang="scss">
  .cell-avatar{
    float: right;
    border-radius: 50%;
  }
  .sch{
    width: 100%;
    border: 0;
  }
</style>
