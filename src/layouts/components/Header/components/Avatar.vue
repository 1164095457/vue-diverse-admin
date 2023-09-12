<template>
	<el-dropdown trigger="click">
		<div class="avatar">
			<img src="https://img2.baidu.com/it/u=2779580288,2898080432&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="avatar" />
		</div>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item @click="logout">
					<el-icon><SwitchButton /></el-icon>退出登录
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script setup>
import { GlobalStore } from "@/stores";
import { LOGIN_URL } from "@/config/config";
import { resetRouter } from "@/routers/index";
import { useRouter } from "vue-router";
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
