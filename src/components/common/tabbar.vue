<template>
    <div>
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/index">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/application">
				<span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
				<span class="mui-tab-label">应用</span>
			</router-link>
			<router-link class="mui-tab-item" to="/message">
				<span class="mui-icon mui-icon-email">
                    <!-- 消息提醒小红点 -->
                    <span class="mui-badge">0</span>
                </span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link class="mui-tab-item" to="/setting">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
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
    .mui-icon-extra-class{
        font-size: 20px;
    }
</style>
