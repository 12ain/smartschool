<template>
    <div class="container">
        <mt-header fixed title="报修">
            <router-link to="/application" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <!-- 报修表单主体 -->
        <form class="mui-input-group">
            <div class="mui-input-row">
                <label>故障地点</label>
            <input type="text" class="mui-input-clear" placeholder="请输入故障地点">
            </div>
            <div class="mui-input-row">
                <label>故障类型</label>
            <input type="text" class="mui-input-clear" placeholder="请输入故障类型">
            </div>
            <div class="mui-input-row">
                <label>故障时间</label>
            <input type="text" class="mui-input-clear" placeholder="请输入故障时间">
            </div>
            <div class="mui-button-row">
                <button type="button" class="mui-btn mui-btn-primary" >提交</button>
                <button type="button" class="mui-btn mui-btn-danger" >取消</button>
            </div>
</form>
    </div>
</template>

<script>
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

    },
};
</script>

<style scoped lang="scss">
    .container{
        padding-top: 40px;
    }
</style>
