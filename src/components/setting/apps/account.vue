<template>
        <div class="container">
        <mt-header fixed title="账号与安全">
            <router-link to="/setting" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="mui-page-content">
				<div class="mui-scroll-wrapper" data-scroll="3">
					<div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms;">
						<ul class="mui-table-view">
							<li class="mui-table-view-cell">
								<a id="head" class="mui-navigate-right">头像
								<span class="mui-pull-right head">
									<img class="head-img mui-action-preview" id="head-img1" src="../../../assets/images/logo.png">
								</span>
							</a>
							</li>
							<li class="mui-table-view-cell">
								<a class="">姓名<span class="mui-pull-right">Admin</span></a>
							</li>
							<li class="mui-table-view-cell">
								<a class="">账号<span class="mui-pull-right">admin888</span></a>
							</li>
						</ul>
						<ul class="mui-table-view">
							<li class="mui-table-view-cell">
								<a class="">QQ号<span class="mui-pull-right">88888888</span></a>
							</li>
							<li class="mui-table-view-cell">
								<a class="">手机号<span class="mui-pull-right">1501234567</span></a>
							</li>
							<li class="mui-table-view-cell">
								<a class="">邮箱地址<span class="mui-pull-right">admin@888.com</span></a>
							</li>
						</ul>
					</div>
				<div class="mui-scrollbar mui-scrollbar-vertical"><div class="mui-scrollbar-indicator" style="transition-duration: 0ms; display: none; height: 619px; transform: translate3d(0px, 0px, 0px) translateZ(0px);"></div></div></div>
			</div>
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

</style>
