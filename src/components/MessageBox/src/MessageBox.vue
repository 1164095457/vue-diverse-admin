<template>
	<transition name="messagebox-fade">
		<div v-show="visible" class="messageBox-box" @click="cancalBtnClick">
			<div class="messageBox-item" @click.stop>
				<div>{{ title }}</div>
				<content-view :field="field" style="color: rgba(0, 0, 0, 0.6)"></content-view>
				<div class="messageBox-btn">
					<button class="btn" style="margin-right: 20px" @click="cancalBtnClick" v-if="cancelBtnText">{{ cancelBtnText }}</button>
					<button class="btn" @click="confirmBtnClick">{{ confirmBtnText }}</button>
				</div>
				<img src="./image/close.png" class="close-icon" @click="cancalBtnClick" />
			</div>
		</div>
	</transition>
</template>
<script setup>
import { reactive, toRefs, h } from "vue";
import { fields } from "./index";
// const fields = reactive(['confirm','prompt'])
const props = defineProps({
	title: {
		type: String,
		default() {
			return "提示";
		}
	},
	content: {
		type: String,
		default() {
			return "Message Content";
		}
	},
	showCancalBtn: {
		type: Boolean,
		default() {
			return false;
		}
	},
	confirmBtnText: {
		type: String,
		default() {
			return "OK";
		}
	},
	cancelBtnText: {
		type: String,
		default() {
			return "";
		}
	},
	field: {
		type: String,
		default() {
			return "confirm";
		},
		validator: value => {
			return fields.includes(value);
		}
	}
});
const state = reactive({
	visible: false,
	promptValue: "",
	type: ""
});
const { visible } = toRefs(state);
const setVisible = isVisible => {
	state.visible = isVisible;
};
const confirmBtnClick = () => {
	state.type = "confirm";
	setVisible(false);
};
const cancalBtnClick = () => {
	state.type = "cancel";
	setVisible(false);
};
const ContentView = ({ field }) => {
	switch (field) {
		case !field || "confirm":
			return h("p", null, props.content);
		case "prompt":
			return h("input", {
				value: state.promptValue,
				onInput: e => (state.promptValue = e.target.value),
				class: "message-input"
			});
		default:
			return "";
	}
};
defineExpose({
	setVisible,
	state
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
	background: rgba(0, 0, 0, 0.6);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99999;
	.messageBox-item {
		position: relative;
		background: #ffffff;
		border-radius: 4px;
		padding: 16px 24px;
		min-width: 400px;
		animation: identifier 0.2s;
		.messageBox-btn {
			display: flex;
			justify-content: flex-end;
			.btn {
				border: none;
				background: #1890ff;
				border-radius: 2px;
				text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
				box-shadow: 0 2px #0000000b;
				padding: 4px 15px;
				color: #fff;
				cursor: pointer;
				&:hover {
					background: #2994f9;
				}
			}
		}
		.close-icon {
			position: absolute;
			top: 16px;
			right: 14px;
			width: 16px;
			height: 16px;
			cursor: pointer;
		}
	}
	@keyframes identifier {
		0% {
			margin-top: -30vh;
		}
		100% {
			margin-top: 0;
		}
	}
}
.message-input {
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
</style>
