<template>
	<div class="dataView-container">
		<div class="dataView" ref="dataViewRef">
			<div class="data-header">开发中</div>
			<div class="data-main">
				<div class="data-main-left">
					<div class="left-item">开发中</div>
					<div class="left-item">开发中</div>
				</div>
				<div class="data-main-right">
					<div class="right-item">开发中</div>
					<div class="right-item">开发中</div>
				</div>
			</div>
			<div class="echarts-map-chian">
				<MapChian />
			</div>
			<div class="data-footer">开发中</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import MapChian from "./components/MapChian.vue";
const dataViewRef = ref(null);
onMounted(() => {
	if (dataViewRef.value) {
		dataViewRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
		dataViewRef.value.style.width = `1920px`;
		dataViewRef.value.style.height = `1080px`;
	}
	window.addEventListener("resize", resize);
});

const getScale = (width = 1920, height = 1080) => {
	let ww = window.innerWidth / width;
	let wh = window.innerHeight / height;
	return ww < wh ? ww : wh;
};
const resize = () => {
	if (dataViewRef.value) {
		dataViewRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
	}
};
</script>

<style lang="scss" scoped>
.dataView-container {
	width: 100%;
	height: 100%;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
	background-size: 100% 100%;
	background-size: cover;
	background: #191a20;
	.dataView {
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 999;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		transition: all 0.3s;
		transform-origin: left top;
		.data-header {
			height: 100px;
			background: #fff;
		}
		.data-main {
			width: 100%;
			display: flex;
			justify-content: space-between;
			margin-top: 20px;
			.data-main-left {
				.left-item {
					width: 380px;
					height: 320px;
					background: #fff;
					margin-bottom: 20px;
				}
			}
			.data-main-right {
				.right-item {
					width: 380px;
					height: 320px;
					background: #fff;
					margin-bottom: 20px;
				}
			}
		}
		.echarts-map-chian {
			position: absolute;
			top: 150px;
			left: 50%;
			margin-left: -350px;
			width: 700px;
			height: 700px;
		}
		.data-footer {
			width: 100%;
			height: 280px;
			background: #fff;
			z-index: 2;
		}
	}
}
</style>
