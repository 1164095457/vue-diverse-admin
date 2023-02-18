<template>
	<img src="@/assets/svg/suotou.svg" @click="handleLockScreen" style="width: 25x; height: 25px; cursor: pointer" />
</template>
<script setup>
import { onMounted } from "vue";
import { MessageBox } from "@/components/MessageBox";
import { LockScreen } from "@/components/LockScreen";
//  锁屏
const handleLockScreen = () => {
	MessageBox.prompt({
		confirmBtnText: "锁屏",
		title: "请输入锁屏密码"
	})
		.then(value => {
			if (!value)
				return ElMessage({
					message: "请输入",
					type: "warning"
				});
			localStorage.setItem("lockScreen", value);
			LockScreen();
		})
		.catch(() => {
			console.log("取消");
		});
};

onMounted(() => {
	let lock = localStorage.getItem("lockScreen") || "";
	if (lock) {
		LockScreen();
	}
});
</script>
