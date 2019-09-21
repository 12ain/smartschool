<template>
    <div class="container">
        <mt-header fixed :title="secondList.tdes">
            <router-link slot="left" to="">
                <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="main">
            <mt-swipe>
                <mt-swipe-item>
                    <img :src="'http://'+secondList.image" width="100%">
                </mt-swipe-item>
            </mt-swipe>
            <div class="show">
                <div class="show-title">{{ secondList.tdes }}</div>
                <div class="show-price">￥{{ secondList.tprice }}</div>
                <div class="show-id"><i class="mintui mintui-renyuanguanli"></i>{{ secondList.tuid }}</div>
                <div class="show-tel">{{ secondList.utel }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {},
    data() {
        return {
            secondList:this.$route.params.secondList,
        };
    },
    computed: {

    },
    created() {
        console.log(this.secondList);
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
    height: 400px;
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