<template>
    <div class="container">
        <mt-header fixed title="考试信息"></mt-header>

        <!-- 选项卡 -->
        <mt-navbar v-model="active">
        <mt-tab-item id="tab-container1">考试通知</mt-tab-item>
        <mt-tab-item id="tab-container2">考试入口</mt-tab-item>
        </mt-navbar>

        <!-- 内容分栏 -->
        <mt-tab-container v-model="active">
            <!-- 内容区1: 考试通知 -->
            <mt-tab-container-item id="tab-container1">
                <mt-cell title="计算机等级考试" label="2019年10月28日" value="详情" is-link @click.native="popupVisible = !popupVisible"></mt-cell>
                <mt-cell title="计算机等级考试" label="2019年10月28日" value="详情" is-link></mt-cell>
                <mt-cell title="计算机等级考试" label="2019年10月28日" value="详情" is-link></mt-cell>
            </mt-tab-container-item>
            <!-- 内容区2: 考试入口 -->
            <mt-tab-container id="tab-container2">
                <mt-popup
                v-model="popupVisible"
                popup-transition="popup-fade">
                <span>考试时间: 2019年10月28日</span>
                <span>报名网址: https://www.baidu.com</span>
                <span>学院: 信息工程学院</span>
                </mt-popup>                
            </mt-tab-container>
        </mt-tab-container>
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
            active: "tab-container1",
            // popupVisible: false,
            popupVisible: true,
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
.mint-cell{
    border-radius: 15px;
    margin: 20px 0;
}
.mint-popup{
    background-color:  #44ceff;
    border-radius: 20px;
}
</style>
