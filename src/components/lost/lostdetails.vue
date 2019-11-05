<template>
    <div class="container">
        <mt-header fixed :title="lostList.des">
            <router-link slot="left" to="">
                <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="main">
            <div class="img">
                <img :src="'http://'+lostList.image" width="100%">
            </div>
            <div class="show">
                <mt-field label="物品描述" :value="lostList.des" readonly></mt-field>
                <mt-field label="发布时间" :value="lostList.time | dateFormat('yyyy-mm-dd')" readonly></mt-field>
                <mt-field label="用户名" :value="lostList.uid" readonly></mt-field>
                <mt-field label="联系方式" :value="lostList.utel" readonly></mt-field>
                <mt-field label="用户身份" :value="lostList.lflag" readonly></mt-field>
                <mt-field label="当前状态" :value="lostList.lstatic" readonly></mt-field>
                <!-- <div class="show-title">{{ lostList.des }}</div>
                <div class="show-title">{{ lostList.time | dateFormat('yyyy-mm-dd')}}</div>
                <div class="show-id"><i class="mintui mintui-renyuanguanli"></i>{{ lostList.uid }}</div>
                <div class="show-tel">{{ lostList.utel }}</div>
                <div class="show-tel">{{ lostList.lflag }}</div>
                <div class="show-tel">{{ lostList.lstatic }}</div> -->
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
        // console.log(this.lostList);
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
    margin-bottom:0;
}
.main{
    display: flex;
    flex-direction: column;
    .img{
        width: 100%;
        max-height: 50%;
    }
    .show{
        display: inline-flex;
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
}
</style>