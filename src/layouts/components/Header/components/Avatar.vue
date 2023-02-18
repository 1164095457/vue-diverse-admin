<template>
	<el-dropdown trigger="click">
		<div class="avatar">
			<img src="https://img2.baidu.com/it/u=2779580288,2898080432&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="avatar" />
		</div>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item @click="openDialog('infoRef')">
					<el-icon><User /></el-icon>个人信息
				</el-dropdown-item>
				<el-dropdown-item @click="openDialog('passwordRef')">
					<el-icon><Edit /></el-icon>修改密码
				</el-dropdown-item>
				<el-dropdown-item @click="logout" divided>
					<el-icon><SwitchButton /></el-icon>退出登录
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
	<!-- infoDialog -->
	<InfoDialog ref="infoRef"></InfoDialog>
	<!-- passwordDialog -->
	<PasswordDialog ref="passwordRef"></PasswordDialog>
</template>

<script setup>
import { ref } from "vue";
import { GlobalStore } from "@/stores";
import { LOGIN_URL } from "@/config/config";
import { resetRouter } from "@/routers/index";
import { useRouter } from "vue-router";
import InfoDialog from "./InfoDialog.vue";
import PasswordDialog from "./PasswordDialog.vue";
import { AuthStore } from "@/stores/modules/auth";

const router = useRouter();
const globalStore = GlobalStore();
const authStore = AuthStore();

// 退出登录
const logout = () => {
	globalStore.setToken("");
	authStore.authMenuList = [];
	resetRouter();
	router.replace(LOGIN_URL);
};

const infoRef = ref(null);
const passwordRef = ref(null);
// 打开修改密码和个人信息弹窗
const openDialog = refName => {
	if (refName == "infoRef") infoRef.value?.openDialog();
	else passwordRef.value?.openDialog();
};
</script>

<style scoped lang="scss">
.avatar {
	width: 40px;
	height: 40px;
	overflow: hidden;
	cursor: pointer;
	border-radius: 50%;
	img {
		width: 100%;
		height: 100%;
	}
}
</style>
