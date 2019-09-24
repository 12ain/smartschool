<template>
    <div class="container">
        <!-- 顶栏 -->
		<mt-header fixed title="个人中心"></mt-header>

        <!-- 主体部分 -->
        <mt-cell :title="this.userInformation.uname" class="setting-name" is-link to="/account" v-show="!avator">
            
        <img slot="icon" src="../../assets/images/logo.png" width="80" height="80">
        </mt-cell>

        <mt-cell :title="this.userInformation.uname" class="setting-name" is-link to="/account" v-show="avator">
            
        <img slot="icon" :src="'http://'+this.userInformation.uimage" width="80" height="80">
        </mt-cell>

        <mt-cell title="青岛高校全景" is-link icon="ditu" class="setting-map" to="/school"></mt-cell>

        <mt-cell title="编辑个人信息" to="/account" is-link></mt-cell> 
        <mt-cell title="我的故障报修" to="/myRepair" is-link></mt-cell>     
        <mt-cell title="我的二手信息" to="/mySecond" is-link></mt-cell>     
        <mt-cell title="我的失物招领" to="/myLost" is-link></mt-cell>
        <mt-cell title="维修人员" to="/admin" is-link  class="setting-map" v-show="isRepair"></mt-cell>     
        <mt-cell title="管理员" to="/admin" is-link  class="setting-map" v-show="isAdmin"></mt-cell>   
        <mt-cell title="退出登录" class="setting-exit" @click.native="exitLogin"></mt-cell>     
        <tabbar></tabbar>
    </div>
</template>

<script>
import tabbar from '../common/tabbar'
import store from "../../store/store";
import { mapState, mapMutations } from "vuex";
export default {
    props: {

    },
    data() {
        return {
            storage: window.localStorage,
            isAdmin:false,
            isRepair:false,
            avator:false,

        };
    },
    computed: {
        ...mapState(["userInformation"]),

    },
    created() {
        // 判断用户类型,是否显示对应管理入口
        if (this.userInformation.ugrade === '2')
        this.isAdmin=true;
        if (this.userInformation.ugrade === '1')
        this.isRepair=true;
        if (this.userInformation.uimage != null)
        this.avator=true;
    },
    mounted() {
    },
    watch: {

    },
    methods: {
        ...mapMutations(["update"]),
        // 退出登录函数
        exitLogin(){
            this.storage.clear();
            this.$router.push("/login");
        }
    },
    components: {
        tabbar,
    },
};
</script>

<style scoped lang="scss">
.setting-name{
    height: 100px;
    margin-top: 60px;
    margin-bottom: 20px;
    .mint-cell-title > img{
        border-radius: 50%;
        margin: 10px 15px;
    }
}
.setting-map{
    margin-bottom: 20px;
    font-weight: bold;
}
.setting-exit{
    text-align: center;
    margin-top: 8%;
    background: #eb602e;
    border-radius: 15px;
    left: 25%;
    width: 50%;
    color: white;
}
.mint-cell{
    padding-left: 10px;
}
</style>
