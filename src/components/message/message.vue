<template>
    <div class="container">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">维修提醒 
                <span class="mui-badge mui-badge-primary">11</span>
            </li>
            <li class="mui-table-view-cell">我的交易 
                <span class="mui-badge mui-badge-success">22</span>
            </li>
        </ul>
        <mt-header fixed title="消息"></mt-header>
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
        tabbar
    },
};
</script>

<style scoped lang="scss">
.container{
        padding-top: 40px;
    }
</style>
