<template>
    <div class="container">
        <mt-header fixed :title="lostList.des">
            <router-link slot="left" to="">
                <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="main">
            <mt-swipe>
                <mt-swipe-item>
                    <img :src="'http://'+lostList.image" width="100%">
                </mt-swipe-item>
            </mt-swipe>
            <div class="show">
                <div class="show-title">{{ lostList.des }}</div>
                <div class="show-title">{{ lostList.time | dateFormat('yyyy-mm-dd')}}</div>
                <div class="show-id"><i class="mintui mintui-renyuanguanli"></i>{{ lostList.uid }}</div>
                <div class="show-tel">{{ lostList.utel }}</div>
                <div class="show-tel">{{ lostList.lflag }}</div>
                <div class="show-tel">{{ lostList.wstatic }}</div>
                <div class="show-tel">{{ lostList.lstatic }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {},
    data() {
        return {
            lostList:this.$route.params.lostList,
        };
    },
    computed: {

    },
    created() {
        console.log(this.lostList);
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
.mint-swipe{
    height: 300px;
    width: 100%;
}
.show{
    display: flex;
    flex-direction: column;
    background-color: white;
    .show-title{
        font-size: 1.2rem;
    }
    .show-price{
        color: red;
        font-weight: 600; 
    }
}
</style>