<template>
    <div class="container">
        <!-- 顶栏 -->
		<mt-header fixed title="个人中心"></mt-header>

        <!-- 主体部分 -->
        <mt-cell title="用户名" class="setting-name" is-link to="/account">
            
        <img slot="icon" src="../../assets/images/logo.png" width="80" height="80">
        </mt-cell>

        <mt-cell title="青岛高校全景" is-link icon="ditu" class="setting-map"></mt-cell>

        <mt-cell title="编辑个人信息" to="/account" is-link></mt-cell>     
        <mt-cell title="我的二手信息" to="/second" is-link></mt-cell>     
        <mt-cell title="我的失物招领" to="/lost" is-link></mt-cell>     
        <mt-cell title="考试入口" to="/information" is-link></mt-cell>     
        <mt-cell title="退出登录" class="setting-exit" @click.native="exitLogin"></mt-cell>     
        <tabbar></tabbar>
    </div>
</template>

<script>
import tabbar from '../common/tabbar'
export default {
    props: {

    },
    data() {
        return {
            storage: window.localStorage,

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
    },
    watch: {

    },
    methods: {
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
    height: 80px;
    margin-top: 60px;
    margin-bottom: 20px;
    .mint-cell-title > img{
        border-radius: 50%;
        margin: 0 15px;
    }
}
.setting-map{
    margin-bottom: 20px;
    font-weight: bold;
}
.setting-exit{
    text-align: center;
    margin-top: 100px;
    background: #eb602e;
    border-radius: 15px;
    left: 25%;
    width: 50%;
    color: white;
}
.mint-cell{
    padding-left: 10px;
    border-radius: 10px;
}
</style>
