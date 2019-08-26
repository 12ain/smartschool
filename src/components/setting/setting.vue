<template>
    <div class="container">
		<mt-header fixed title="个人中心"></mt-header>
        <router-link to="/login">退出登录</router-link>
        <tabbar></tabbar>
    </div>
</template>

<script>
import tabbar from '../common/tabbar'
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
        tabbar,
    },
};
</script>

<style scoped lang="scss">
</style>
