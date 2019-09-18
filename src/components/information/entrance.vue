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
import Vue from "vue";
import axios from "axios";
import tabbar from "../common/tabbar";
import { Toast } from 'mint-ui';
import qs from 'Qs';
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
        axios
            .post("/test/checkcollege",
            qs.stringify({           
                tcollege: this.$route.query.collegeName
        }))
        .then(res => {
            // console.log(res);           
            if (res.data.status == '0') {
            //   Toast(res.data.msg);
                this.testList = res.data.list;
            } else {
                Toast(res.data.msg);
            }
        })
    .catch();
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