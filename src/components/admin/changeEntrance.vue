<template>
    <div class="container">
        <mt-header fixed :title="entranceList.tname">
            <router-link slot="left" to="">
                <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="main">
            <div class="show">
                <mt-field label="考试编号" v-model="userentrance.tid" readonly></mt-field>
                <mt-field label="考试名称" type="textarea" rows="3" v-model="userentrance.tname"></mt-field>
                <mt-field label="报名网址"  v-model="userentrance.turl"></mt-field>
                <mt-field label="学院"  v-model="userentrance.tcollege"></mt-field>
                <mt-button @click.native="submitEntrance">提交</mt-button>
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
            entranceList: [],
            userentrance: {},
            isAdmin:false,
            isRepair:false,
        };
    },
    computed: {
    ...mapState(["oldimg"]),
    ...mapState(["entranceInformation"]),
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
        this.entranceList=this.entranceInformation
    },
    decide(){
        this.userentrance.tid = this.entranceList.tid
        this.userentrance.tname = this.entranceList.tname
        this.userentrance.turl = this.entranceList.turl
        this.userentrance.tcollege = this.entranceList.tcollege
    },
    submitEntrance(){
        this.http.post(this.ports.api.test.updateTest, 
            {           
                tid: this.userentrance.tid,
                tname: this.userentrance.tname,
                turl: this.userentrance.turl,
                tcollege: this.userentrance.tcollege,
            }
            ,res => {
            // console.log(res);
            if (res.data.status == '0') {
                this.$toast(res.data.msg);
                this.$router.back(-1)
            } else {
                this.$toast(res.data.msg);
            }
        })
    }
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