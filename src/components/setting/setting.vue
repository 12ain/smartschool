<template>
    <div class="container">
        <!-- 顶栏 -->
		<mt-header fixed title="个人中心"></mt-header>

        <!-- 主体部分 -->
        <mt-cell title="昵称">
        <span></span>
        <img slot="icon" src="../../assets/images/logo.png" width="24" height="24">
        </mt-cell>

        <mt-cell
            title="退出登录"
            to="/login">
        </mt-cell>     


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

    },
    components: {
        tabbar,
    },
};
</script>

<style scoped lang="scss">
</style>
