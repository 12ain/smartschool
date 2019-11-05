<template>
    <div class="container">
        <mt-header fixed :title="testList.des">
            <router-link slot="left" to="">
                <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="main">
            <div class="img">
                <img :src="'http://'+oldimg" width="100%">
            </div>
            <div class="show">
                <mt-field label="考试编号" v-model="usertest.testid" readonly></mt-field>
                <mt-field label="考试名称" v-model="usertest.testname"></mt-field>
                <mt-field label="考试地点" v-model="usertest.testarea"></mt-field>
                <mt-field label="考试时间" type="date" v-model="usertest.testdate"></mt-field>
                <m-up-loader :src="usersrc" :info="usertest"></m-up-loader>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import mUpLoader from "../common/UpLoader"
export default {
    props: {},
    data() {
        return {
            testList: [],
            usertest: {},
            usersrc: 'http://47.94.10.228/testtell/updateTell',
            isAdmin:false,
            isRepair:false,
        };
    },
    computed: {
      ...mapState(["oldimg"]),
      ...mapState(["testInformation"]),
      ...mapState(["userInformation"]),
    },
    created() {
        this.give(),
        this.decide()
    },
    mounted() {
    },
    watch: {

    },
    methods: {
      give(){
        this.testList=this.testInformation
      },
      decide(){
        this.usertest.testid = this.testList.testid
        this.usertest.testname = this.testList.testname
        this.usertest.testarea = this.testList.testarea
        this.usertest.testdate = this.testList.testdate
        this.usertest.udept = window.localStorage.getItem('udept')

      },
    },
    components: {
      mUpLoader,
    },
};
</script>

<style scoped lang="scss">
.mint-swipe{
    height: 200px;
    width: 100%;
}
.container{
    margin-bottom: 0;
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
</style>