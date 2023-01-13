<template>
	<div class="card">
		<div id="printTable">
			<p>我是普通</p>
			<p style="color: red">我是带样式</p>
			<img src="https://img2.baidu.com/it/u=2779580288,2898080432&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="" />
		</div>
		<el-button type="primary" @click="bindPrint">打印</el-button>
	</div>
</template>
<script setup name="print">
import printJS from "print-js";

const bindPrint = () => {
	printJS({
		printable: "printTable",
		type: "html",
		header: null,
		targetStyles: ["*"],
		style: "@page {margin:0 10mm}"
	});
};
</script>
