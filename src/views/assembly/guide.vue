<template>
	<div class="card content-box">
		<el-button type="primary" @click.prevent.stop="guide">打开引导页</el-button>
	</div>
</template>

<script setup name="guide">
import Driver from "driver.js";
import "driver.js/dist/driver.min.css";

const guide = () => {
	const driver = new Driver({
		allowClose: false,
		doneBtnText: "结束",
		closeBtnText: "关闭",
		nextBtnText: "下一步",
		prevBtnText: "上一步"
	});
	driver.defineSteps(steps);
	driver.start();
};

const steps = [
	{
		element: "#collapseIcon",
		popover: {
			title: "折叠菜单",
			description: "点击可折叠&展开",
			position: "right"
		}
	},
	{
		element: "#breadcrumb",
		popover: {
			title: "面包屑",
			description: "记录当前层级",
			position: "right"
		}
	},
	{
		element: "#assemblySize",
		popover: {
			title: "Switch Assembly Size",
			description: "Switch the system size",
			position: "left"
		}
	},
	{
		element: "#language",
		popover: {
			title: "语言切换",
			description: "切换中英文",
			position: "left"
		}
	}
];
</script>
