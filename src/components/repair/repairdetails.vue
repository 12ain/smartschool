<template>
    <div class="container">
        <mt-header fixed :title="repairList.rdes">
            <router-link slot="left" to="">
                <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="main">
            <mt-swipe>
                <mt-swipe-item>
                    <img :src="'http://'+repairList.image" width="100%">
                </mt-swipe-item>
            </mt-swipe>
            <div class="show">
                <div class="show-title">{{ repairList.rdes }}</div>
                <div class="show-title">{{ repairList.radr }}</div>
                <div class="show-title">{{ repairList.rdate | dateFormat('yyyy-mm-dd')}}</div>
                <div class="show-id"><i class="mintui mintui-renyuanguanli"></i>{{ repairList.ruid }}</div>
                <div class="show-tel">{{ repairList.utel }}</div>
                <div class="show-tel">{{ repairList.wstatic }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {},
    data() {
        return {
            repairList:this.$route.params.repairList,
        };
    },
    computed: {

    },
    created() {
        console.log(this.repairList);
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