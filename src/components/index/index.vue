<template>
    <div class="container">
        <mt-header fixed title="首页"></mt-header>
            <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
            </mt-swipe>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media">
                    <a href="http://121.251.136.100/jwxt/home.aspx">
                        <img class="mui-media-object mui-pull-left" src="../../assets/images/logo.png">
                        <div class="mui-media-body">
                            通知
                            <p class='mui-ellipsis'>青岛工学院关于2019年度本科专业设置校内评审结果的公示</p>
                        </div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="http://121.251.136.100/jwxt/home.aspx">
                        <img class="mui-media-object mui-pull-left" src="../../assets/images/logo.png">
                        <div class="mui-media-body">
                            通知
                            <p class='mui-ellipsis'>关于2019年6月份全国大学英语四六级考试试音通知</p>
                        </div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="http://121.251.136.100/jwxt/home.aspx">
                        <img class="mui-media-object mui-pull-left" src="../../assets/images/logo.png">
                        <div class="mui-media-body">
                            通知
                            <p class='mui-ellipsis'>2019年9月全国计算机等级考试青岛工学院考点报名工作通知</p>
                        </div>
                    </a>
                </li>
            </ul>                   
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

<style lang="scss" scoped>
    .container{
        padding-top: 40px;
    }
    .mint-swipe{
        height: 200px;
    .mint-swipe-item{
        &:nth-child(1){
            background-color: rgb(255, 193, 143);
        }
        &:nth-child(2){
            background-color: rgb(19, 211, 131);
        }
        &:nth-child(3){
            background-color: rgb(19, 93, 211);
        }
            
        }
    }
</style>
