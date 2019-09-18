<template>
    <div class="container">
        <!-- 顶栏 -->
		<mt-header fixed>
            <router-link slot="left" to="">
                <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="main">
            <router-link class="school-list" v-for="item in schoolList" :key="item.sid" :to="{ name:'view', query: { vsrc: item.surl }}">
                <img :src="item.simage" class="school-list-img">
                <span class="school-list-title">{{item.sname}}</span>
            </router-link>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import tabbar from "../../common/tabbar";
export default {
    props: {

    },
    data() {
        return {
            schoolList:[
                {   
                    sid: 0,
                    sname:'青岛工学院',
                    simage:'http://f.expoon.com/sub/user/logo/1/321354_364x216_2.jpg',
                    surl:'https://www.expoon.com/26301/panorama'
                },               
                {   
                    sid: 1,
                    sname:'青岛大学',
                    simage:'http://f.expoon.com/sub/user/logo/14/887180_364x216_2.jpg',
                    surl:'https://www.expoon.com/26714/panorama'
                },
                {   
                    sid: 2,
                    sname:'青岛飞洋职业技术学院',
                    simage:'http://f.expoon.com/sub/user/logo/73/116794_364x216_2.jpg',
                    surl:'https://www.expoon.com/26273/panorama'
                },
                {   
                    sid: 3,
                    sname:'青岛港湾职业技术学院',
                    simage:'http://f.expoon.com/sub/user/logo/99/555977_364x216_2.jpg',
                    surl:'https://www.expoon.com/26299/panorama/181755/2'
                },
                {   
                    sid: 4,
                    sname:'青岛滨海学院',
                    simage:'http://f.expoon.com/sub/user/logo/68/595587_364x216_2.jpg',
                    surl:'https://www.expoon.com/27368/panorama'
                },
                {   
                    sid: 5,
                    sname:'青岛恒星科技学院',
                    simage:'http://f.expoon.com/sub/user/logo/55/866748_364x216_2.jpg',
                    surl:'https://www.expoon.com/26055/panorama'
                },
                {   
                    sid: 6,
                    sname:'青岛黄海学院',
                    simage:'http://f.expoon.com/sub/user/logo/70/823410_364x216_2.jpg',
                    surl:'https://www.expoon.com/27370/panorama'
                },
                {   
                    sid: 7,
                    sname:'青岛科技大学',
                    simage:'http://f.expoon.com/sub/user/logo/9/730611_364x216_2.jpg',
                    surl:'https://www.expoon.com/25309/panorama'
                },
                {   
                    sid: 8,
                    sname:'青岛理工大学',
                    simage:'http://f.expoon.com/sub/user/logo/15/986510_364x216_2.jpg',
                    surl:'https://www.expoon.com/26715/panorama/183604/2'
                },
                {   
                    sid: 9,
                    sname:'青岛农业大学',
                    simage:'http://f.expoon.com/sub/user/logo/82/577550_364x216_2.jpg',
                    surl:'https://www.expoon.com/27182/panorama/182937/2'
                },
                {   
                    sid: 10,
                    sname:'青岛求实职业技术学院',
                    simage:'http://f.expoon.com/sub/user/logo/72/941537_364x216_2.jpg',
                    surl:'https://www.expoon.com/26272/panorama'
                },
                {   
                    sid: 11,
                    sname:'青岛远洋船员职业学院',
                    simage:'http://f.expoon.com/sub/user/logo/93/412316_364x216_2.jpg',
                    surl:'https://www.expoon.com/27193/panorama/185685/2'
                }
            ]
        };
    },
    computed: {

    },
    created() {

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
.main{
    display: flex;
    flex-wrap: wrap;
    .school-list{
        display: inline-flex;
        flex-wrap: wrap;
        width: 50%;
        .school-list-img{
            width: 88%;
            height: 75%;
            margin: 5%;
        };
        .school-list-title{
            flex-grow: 1;
            text-align: center;
            color: #707070;
        }
    }
}
a{
    text-decoration: none;
}
</style>