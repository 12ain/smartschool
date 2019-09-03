<template>
    <div class="container">
        <mt-header fixed title="失物招领"></mt-header>
        <!-- 选项卡 -->
        <mt-navbar v-model="active">
        <mt-tab-item id="tab-container1">发布信息</mt-tab-item>
        <mt-tab-item id="tab-container2">查看信息</mt-tab-item>
        </mt-navbar>

        <!-- 内容分栏 -->
        <mt-tab-container v-model="active">
            <!-- 内容区1: 失物招领表单 -->
        <mt-tab-container-item id="tab-container1">
            <mt-field label="物品名称" placeholder="请输入物品名称" v-model="ruid"></mt-field>
            <mt-field label="时间" placeholder="请输入时间" type="date" v-model="rdate"></mt-field>
            <mt-field label="物品描述" placeholder="物品描述" type="textarea" rows="3" v-model="rdes"></mt-field>
            <mt-field label="手机号" placeholder="请输入手机号" v-model="ruid"></mt-field>
            
            <mt-radio
            title="身份"
            v-model="value"
            :options="['得主', '失主']">
            </mt-radio>

            <mt-radio
            title="状态"
            v-model="value"
            :options="['已解决', '未解决']">
            </mt-radio>

            <mt-field label="上传图片" placeholder="上传图片" type="file" v-model="image"></mt-field>
            <mt-button type="primary" size="large">提交</mt-button>
        </mt-tab-container-item>
        
            <!-- 内容区2: 失物招领数据显示 -->

            <mt-tab-container-item id="tab-container2">
                <mt-search
                v-model="value"
                cancel-text="取消"
                placeholder="搜索">
                </mt-search>                
            </mt-tab-container-item>

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
            active : 'tab-container1',
            ruid: '',
            rdate: '',
            radr: '',
            rtype: '',
            rdes: '',
            image: '',
            list:[
                
            ],
            value: ''
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
.mint-button--primary{
        background-color: #44ceff;
    }
    .mint-button--large{
        margin-top: 20px;
        left: 10%;
        width: 80%;
    }
</style>
