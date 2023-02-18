<template>
	<transition name="message-fade">
		<div v-show="visible" :class="styleClass" :style="{ top: top + 'px' }">
			<div class="message-item">
				<img v-if="type == 'success'" src="./image/success.png" class="type-icon" />
				<img v-if="type == 'warning'" src="./image/warning.png" class="type-icon" />
				<img v-if="type == 'error'" src="./image/error.png" class="type-icon" />
				<span>{{ message }}</span>
			</div>
		</div>
	</transition>
</template>
<script setup>
import { computed, reactive, toRefs } from "vue";
import types from "./types";
const props = defineProps({
	type: {
		type: String,
		default: types.MESSAGE,
		validator(value) {
			return Object.values(types).includes(value);
		}
	},
	message: {
		type: String,
		default: types.MESSAGE
	}
});

const state = reactive({
	visible: false,
	top: 0
});
let time = null;
const setVisible = isVisible => {
	return new Promise(resolve => {
		state.visible = isVisible;
		time = setTimeout(() => {
			clearTimeout(time);
			resolve("");
		}, 300);
	});
};
const setTop = top => {
	state.top = top;
	return top;
};

defineExpose({
	setVisible,
	setTop,
	height: 28,
	margin: 16
});
const styleClass = computed(() => ["message-box", props.type]);
const { visible, top } = toRefs(state);
</script>
<style lang="scss" scoped>
.message-box {
	position: fixed;
	display: flex;
	justify-content: center;
	width: 100%;
	transition: top 0.3s ease-out;
	pointer-events: none;
	z-index: 9999;
	.message-item {
		background: #fff;
		border-radius: 4px;
		-webkit-box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
		box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
		text-align: center;
		text-transform: none;
		font-size: 12px;
		padding: 8px 14px;
		color: rgba(0, 0, 0, 0.65);
		display: flex;
		align-items: center;
		.type-icon {
			width: 16px;
			height: 16px;
			margin-right: 6px;
		}
	}
}
.message-fade-enter-active {
	transition: all 0.3s ease-in;
}
.message-fade-leave-active {
	transition: all 0.3s ease-out;
}
.message-fade-enter-from,
.message-fade-leave-to {
	transform: translateY(-30px);
	opacity: 0;
}
</style>
