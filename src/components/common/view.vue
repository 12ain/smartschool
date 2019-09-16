<template>
    <div class="container">
        <!-- 顶栏 -->
		<mt-header fixed>
            <router-link slot="left" to="">
                <mt-button icon="back" @click.native="$router.back(-1)">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="main">
            <iframe width=100% height=100% frameborder="0" name="ExpoonPanorama" allowfullscreen="true" scrolling="no" :src="this.$route.params.vsrc"></iframe>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import tabbar from "../common/tabbar";
export default {
    props: {
    },
    data() {
        return {

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
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}
</style>