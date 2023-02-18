<template>
	<div>
		<el-button type="primary" v-throttle="throttleClick">节流按钮 (每隔1S秒后执行)</el-button>
	</div>
</template>

<script setup name="throttle">
import { ElMessage } from "element-plus";
const throttleClick = () => {
	ElMessage({
		message: "我是节流指令",
		type: "success"
	});
};
</script>
