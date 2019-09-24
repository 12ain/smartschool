<template>
    <div class="container">
        <mt-header fixed :title="repairList.rdes">
            <router-link slot="left" to="">
                <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="main">
            <div class="img">
                <img :src="'http://'+repairList.image" width="100%">
            </div>
            <div class="show">
                <mt-field label="报备描述" :value="repairList.rdes" readonly></mt-field>
                <mt-field label="发布时间" :value="repairList.rdate | dateFormat('yyyy-mm-dd')" readonly></mt-field>
                <mt-field label="报备地点" :value="repairList.radr" readonly></mt-field>
                <mt-field label="报备人员" :value="repairList.ruid" readonly></mt-field>
                <mt-field label="联系电话" :value="repairList.utel" readonly></mt-field>
                <mt-field label="当前状态" :value="repairList.wstatic" readonly></mt-field>
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
.container{
    margin-bottom:0;
}
.img{
        width: 100%;
        max-height: 50%;
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
>>>.mint-field{
    line-height: 1.2;
}
</style>