<template>
    <div>
        <mt-tabbar fixed>
        <mt-tab-item v-model="selected">
            <i slot="icon" class="iconfont iconshandian"></i>
            <router-link to="/repair">
                <a>故障报备</a>
            </router-link>
        </mt-tab-item>
        <mt-tab-item>
            <i slot="icon" class="iconfont iconershoujiaoyi"></i>
            <router-link to="/second">
                <a>二手信息提供</a>
            </router-link>
        </mt-tab-item>
        <mt-tab-item>
            <i slot="icon" class="iconfont icontishi"></i>
            <router-link to="/information">
                <a>考试</a>
            </router-link>
        </mt-tab-item>
        <mt-tab-item>
            <i slot="icon" class="iconfont iconxingzhuang9kaobei"></i>
            <router-link to="/lost">
                <a>失物招领</a>
            </router-link>
        </mt-tab-item>
        <mt-tab-item>
            <i slot="icon" class="iconfont iconrenyuanguanli"></i>
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
    .iconfont{
        font-size: 24px;
    }
    a{
        text-decoration: none;
        color: #fff;
    }
    .mint-tabbar > .mint-tab-item.is-selected{
        color: #fff;
        background-color: #1cbe99;
    }
</style>
