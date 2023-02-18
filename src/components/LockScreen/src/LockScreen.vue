<template>
	<transition name="messagebox-fade">
		<div v-show="visible" class="messageBox-box">
			<div class="lockscreen-item">
				<div class="loc-date">
					{{ date }}
				</div>
				<div class="loc-week">
					{{ week }}
				</div>
				<div class="loc-time">
					{{ time }}
				</div>
				<div class="loc-input">
					<input type="text" v-model="state.lockValue" />
				</div>
				<div class="loc-btn">
					<el-button type="primary" @click="cancalBtnClick">解锁</el-button>
				</div>
			</div>
		</div>
	</transition>
</template>
<script setup>
import { reactive, toRefs, onMounted, ref } from "vue";
import { getTime } from "@/utils/util";
import { ElMessage } from "element-plus";

const state = reactive({
	visible: false,
	promptValue: "",
	type: "",
	lockValue: ""
});
const { visible } = toRefs(state);
const setVisible = isVisible => {
	state.visible = isVisible;
};
const cancalBtnClick = () => {
	let item = localStorage.getItem("lockScreen");
	if (item === state.lockValue) {
		localStorage.removeItem("lockScreen");
		setVisible(false);
	} else {
		return ElMessage.error("密码错误");
	}
};
defineExpose({
	setVisible,
	state
});
const date = ref("loading..");
const time = ref("loading..");
const week = ref("loading..");
onMounted(() => {
	setInterval(() => {
		date.value = getTime(1);
		time.value = getTime(2);
		week.value = getTime(3);
	}, 1000);
});
</script>
<style lang="scss" scoped>
.messagebox-fade-enter-from,
.messagebox-fade-leave-to {
	opacity: 0;
}
.messagebox-fade-enter-active {
	transition: opacity 0.2s ease-in;
}
.messagebox-fade-leave-active {
	transition: opacity 0.2s ease-out;
}
.messageBox-box {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #000;
	display: flex;
	justify-content: center;
	// align-items: center;
	z-index: 2000;
	animation: identifier 0.8s;
	@keyframes identifier {
		0% {
			margin-left: 100vw;
		}
		100% {
			margin-top: 0;
		}
	}
	.lockscreen-item {
		color: #fff;
		text-align: center;
	}

	.loc-date {
		text-align: center;
		font-size: 30px;
		margin-top: 50px;
	}
	.loc-week {
		text-align: center;
		font-size: 30px;
		margin-top: 10px;
	}
	.loc-time {
		font-size: 80px;
		font-weight: bold;
		margin-top: 10px;
	}
	.loc-input {
		margin-top: 10px;
		input {
			margin: 40px 0;
			box-sizing: border-box;
			font-variant: tabular-nums;
			list-style: none;
			font-feature-settings: tnum;
			position: relative;
			display: inline-block;
			width: 100%;
			padding: 4px 11px;
			color: #000000d9;
			font-size: 14px;
			line-height: 1.5715;
			background-color: #fff;
			background-image: none;
			border: 1px solid #d9d9d9;
			border-radius: 2px;
			transition: all 0.3s;
			outline: none;
		}
	}
}
</style>
