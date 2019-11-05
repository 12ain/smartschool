<template>
    <div class="container">
        <!-- 顶栏 -->
		<mt-header fixed>
            <router-link slot="left" to="">
                <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
            </router-link>
        </mt-header>
            <mt-cell 
                v-for="(item) in testList" 
                :key="item.tid"
                :title="item.tname"
                :label="item.tcollege" 
                value="点击报名" 
                is-link
                :to="{ name:'view', query: { vsrc: item.turl }}"
                >
            </mt-cell>
    </div>
</template>

<script>
import tabbar from "../common/tabbar";
export default {
    props: {
    },
    data() {
        return {
            testList:[], // 考试入口信息
                        // "Tid" ： "考试编号"  
                        // "Tname" : "考试名称"
                        // "Turl" : "考试报名网址" 
                        // "Tcollege" : "学院"
        };
    },
    computed: {

    },
    created() {
        this.http.post(this.ports.api.test.checkcollege,
            {           
                tcollege: this.$route.query.collegeName
        },res => {
            // console.log(res);           
            if (res.data.status == '0') {
            //   this.$toast(res.data.msg);
                this.testList = res.data.list;
            } else {
                this.$toast(res.data.msg);
            }
        })
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
</style>