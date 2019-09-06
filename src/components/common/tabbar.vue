<template>
    <div>
        <mt-tabbar fixed>
        <mt-tab-item v-model="selected">
            <i slot="icon" class="mintui mintui-shandian"></i>
            <router-link to="/repair">
                <a>故障报备</a>
            </router-link>
        </mt-tab-item>
        <mt-tab-item>
            <i slot="icon" class="mintui mintui-ershoujiaoyi"></i>
            <router-link to="/second">
                <a>二手信息</a>
            </router-link>
        </mt-tab-item>
        <mt-tab-item>
            <i slot="icon" class="mintui mintui-tishi"></i>
            <router-link to="/information">
                <a>考试</a>
            </router-link>
        </mt-tab-item>
        <mt-tab-item>
            <i slot="icon" class="mintui mintui-xingzhuang9kaobei"></i>
            <router-link to="/lost">
                <a>失物招领</a>
            </router-link>
        </mt-tab-item>
        <mt-tab-item>
            <i slot="icon" class="mintui mintui-renyuanguanli"></i>
            <router-link to="/setting">
                <a>个人中心</a>
            </router-link>
        </mt-tab-item>
        </mt-tabbar>        
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            selected: true
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
    .mintui{
        font-size: 24px;
    }
    a{
        text-decoration: none;
        color: #fff;
        padding-top: 5px;
    }
    .mint-tabbar > .mint-tab-item.is-selected{
        color: #fff;
        background-color: #44ceff;
    }
</style>
