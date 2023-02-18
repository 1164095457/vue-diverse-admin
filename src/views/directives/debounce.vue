<template>
	<div>
		<el-button type="primary" v-debounce="handleDebounce">防抖按钮 (0.2秒后执行)</el-button>
	</div>
</template>

<script setup name="debounce">
import { ElMessage } from "element-plus";
const handleDebounce = () => {
	ElMessage({
		message: "我是防抖指令",
		type: "success"
	});
};
</script>
