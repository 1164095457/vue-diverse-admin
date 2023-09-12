<template>
	<div class="user">
		<div class="greet">{{ getTimeState() }}~ 打工人</div>
		<img
			class="image"
			src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F14216793838%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1663220582&t=16bb878645d4db0f55c89b68f608463d"
			alt=""
		/>
		<div class="info">
			<div class="name">User</div>
			<div class="introduce">
				<el-link type="primary">{{ APPNAME }}</el-link>
				由vue3 + vite + element-plus + ts搭建，支持ts、js混用。自定义主题颜色。界面设置配置。支持4种Layouts布局切换。i18n等...
			</div>
			<div class="introduce">
				git地址：<el-link :href="url" target="_blank" type="danger">{{ url }}</el-link>
			</div>
			<el-tag>前端韭菜</el-tag>
			<div style="margin-top: 24px">
				<el-button type="primary">前往个人中心</el-button>
			</div>
		</div>
	</div>
</template>
<script setup>
import { APP_NAME } from "@/config/config";
const APPNAME = APP_NAME;
const url = "https://github.com/1164095457/vue-diverse-admin";
import { getTimeState } from "@/utils/util.js";
</script>
<style lang="scss" scoped>
.user {
	background: #fff;
	text-align: center;
	padding: 16px;
	height: 335px;
	.greet {
		text-align: left;
		display: flex;
		align-items: center;
	}
	.image {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		margin-top: 36px;
	}
	.info {
		.name {
			font-weight: bold;
			margin-top: 8px;
		}
		.introduce {
			font-size: 13px;
			color: #92959b;
			margin: 8px 0;
		}
	}
}
</style>
