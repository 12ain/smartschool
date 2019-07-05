<template>
    <div class="container">
        <mt-header fixed title="问题反馈">
            <router-link to="/setting" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        <mt-button slot="right">发送</mt-button>
        </mt-header>
        <div id="feedback" class="mui-page feedback mui-page-center" style="">
			
			<div class="mui-page-content">
				<div class="mui-content-padded">
					<div class="mui-inline">问题和意见</div>
					<!--快捷输入具体内容，开发者可自己替换常用语-->
				</div>
				<div class="row mui-input-row">
					<textarea id="question" class="mui-input-clear question" placeholder="请详细描述你的问题和意见..."></textarea>
				</div>
				<p>图片(选填,提供问题截图,总大小10M以下)</p>
				<div id="image-list" class="row image-list"><div class="image-item space"><div class="image-close" id="img-1">X</div><div class="image-up"></div><div class="file" id="image-1"></div></div></div>
				<p>QQ/邮箱</p>
				<div class="mui-input-row">
					<input id="contact" type="text" class="mui-input-clear contact" placeholder="(选填,方便我们联系你 )" data-input-clear="20"><span class="mui-icon mui-icon-clear mui-hidden"></span>
				</div>
				<div class="mui-content-padded">
					<div class="mui-inline">应用评分</div>
					<div class="icons mui-inline" style="margin-left: 6px;">
						<i data-index="1" class="mui-icon mui-icon-star-filled"></i>
						<i data-index="2" class="mui-icon mui-icon-star-filled"></i>
						<i data-index="3" class="mui-icon mui-icon-star-filled"></i>
						<i data-index="4" class="mui-icon mui-icon-star-filled"></i>
						<i data-index="5" class="mui-icon mui-icon-star-filled"></i>
					</div>
				</div><br>
			</div>
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
.mui-pages .mui-page {
    display: block;
}
.mui-views, .mui-view, .mui-pages, .mui-page, .mui-page-content {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #efeff4;
}
* {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-user-select: none;
    outline: 0;
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: transparent;
}
div {
    display: block;
}
body {
    font-family: 'Helvetica Neue',Helvetica,sans-serif;
    font-size: 17px;
    line-height: 21px;
    color: #000;
    }
.feedback body {
	background-color: #EFEFF4;
}
.feedback input,
.feedback textarea {
	border: none !important;
}
.feedback textarea {
	height: 100px;
	margin-bottom: 0 !important;
	padding-bottom: 0 !important;
}
.feedback .row {
	width: 100%;
	background-color: #fff;
}
.feedback p {
	padding: 10px 15px 0;
}
/*.feedback button#submit { 
	width: 90%;
	height: 46px;
	left: 50%;
	-webkit-transform: translate(-50%);
}*/

input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{
	font-size: 14px;
}

.feedback .hidden {
	display: none;
}
.feedback .image-list {
	width: 100%;
	height: 85px;
	background-size: cover;
	padding: 10px 10px;
	overflow: hidden;
}
.feedback .image-item {
	width: 65px;
	height: 65px;
	/*background-image: url(../images/iconfont-tianjia.png);*/
	background-size: 100% 100%;
	display: inline-block;
	position: relative;
	border-radius: 5px;
	margin-right: 10px;
	margin-bottom: 10px;
	border: solid 1px #e8e8e8;
	vertical-align: top;
}
.feedback .image-item .file {
	position: absolute;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	opacity: 0;
	cursor: pointer;
	z-index: 0;
}
.feedback .image-item.space {
	border: none;
}
.feedback .image-item .image-close {
	position: absolute;
	display: inline-block;
	right: -6px;
	top: -6px;
	width: 20px;
	height: 20px;
	text-align: center;
	line-height: 20px;
	border-radius: 12px;
	background-color: #FF5053;
	color: #f3f3f3;
	border: solid 1px #FF5053;
	font-size: 9px;
	font-weight: 200;
	z-index: 1;
}
.feedback .image-item .image-up{
	height: 65px;
	width: 65px;
	border-radius: 10px;
	line-height: 65px;
	border: 1px solid #ccc;
	color: #ccc; 
	display: inline-block;
	text-align: center;
}
.feedback .image-item .image-up:after{
	font-family: "寰蒋闆呴粦";
	content: '+';
	font-size: 60px;
}
.feedback .image-item.space .image-close {
	display: none;
}
.feedback .mui-inline{
	vertical-align: bottom;
	font-size: 14px;
	color: #8f8f94;
}
.mui-icon-star{
	color: #B5B5B5;
	font-size: 22px;
}
.mui-icon-star-filled{
	color: #FFB400;
	font-size: 22px;
} 
.mui-popover {
	height: 180px;
}
.stream{
	display: none;
}
.mui-plus-stream .stream{
	display: block;
}
.mui-views[data-v-5b8528ba], .mui-view[data-v-5b8528ba], .mui-pages[data-v-5b8528ba], .mui-page[data-v-5b8528ba], .mui-page-content[data-v-5b8528ba]{
    top:25px;
}
</style>