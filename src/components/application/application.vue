<template>
    <div class="container">
        <mt-header fixed title="应用"></mt-header>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/repair">
                    <span class="iconfont iconwangluoguzhang"></span>
                    <div class="mui-media-body">故障报修</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/lost">
                    <span class="iconfont iconxingzhuang9kaobei"></span>
                    <div class="mui-media-body">失物招领</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/second">
                    <span class="iconfont iconershoujiaoyi"></span>
                    <div class="mui-media-body">二手交易</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">搜索</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-info"></span>
                    <div class="mui-media-body">关于</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-more"></span>
                    <div class="mui-media-body">更多</div></a></li>
		</ul> 
        <router-view></router-view>
        <tabbar></tabbar>
    </div>
</template>

<script>
import tabbar from '../common/tabbar'
import lost from '../application/apps/lost'
import repair from '../application/apps/repair'
import second from '../application/apps/second'
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

<style>
.container{
        padding-top: 40px;
    }
.iconfont{
    font-size: 2em;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    font-size: 13px;
}
</style>
