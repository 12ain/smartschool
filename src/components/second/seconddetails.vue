<template>
    <div class="container">
        <mt-header fixed :title="secondList.tdes">
            <router-link slot="left" to="">
                <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="main">
            <div class="img">
                <img :src="'http://'+secondList.image" width="100%">
            </div>
            <div class="show">
                <mt-field label="商品描述" :value="secondList.tdes" readonly></mt-field>
                <mt-field label="商品价格" :value="secondList.tprice" readonly></mt-field>
                <mt-field label="用户账号" :value="secondList.tuid" readonly></mt-field>
                <mt-field label="联系方式" :value="secondList.utel" readonly></mt-field>
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
        // console.log(this.secondList);
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