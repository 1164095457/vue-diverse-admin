<template>
	<el-dropdown trigger="click">
		<el-button size="small" type="primary">
			<span>更多</span>
			<el-icon class="el-icon--right"><arrow-down /></el-icon>
		</el-button>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item @click="refresh">
					<el-icon><Refresh /></el-icon>刷新
				</el-dropdown-item>
				<el-dropdown-item @click="maximize">
					<el-icon><FullScreen /></el-icon>最大化
				</el-dropdown-item>
				<el-dropdown-item divided @click="closeCurrentTab">
					<el-icon><Remove /></el-icon>关闭当前
				</el-dropdown-item>
				<el-dropdown-item @click="closeOtherTab">
					<el-icon> <CircleClose /> </el-icon>关闭其他
				</el-dropdown-item>
				<el-dropdown-item @click="closeAllTab">
					<el-icon><FolderDelete /></el-icon>关闭所有
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script setup>
import { computed, inject, nextTick } from "vue";
import { HOME_URL } from "@/config/config";
import { GlobalStore } from "@/stores";
import { TabsStore } from "@/stores/modules/tabs";
import { KeepAliveStore } from "@/stores/modules/keepAlive";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const tabStore = TabsStore();
const globalStore = GlobalStore();
const keepAliveStore = KeepAliveStore();
const themeConfig = computed(() => globalStore.themeConfig);

const refreshCurrentPage = inject("refresh");
const refresh = () => {
	setTimeout(() => {
		keepAliveStore.removeKeepLiveName(route.name);
		refreshCurrentPage(false);
		nextTick(() => {
			keepAliveStore.addKeepLiveName(route.name);
			refreshCurrentPage(true);
		});
	}, 0);
};

// maximize current page
const maximize = () => {
	console.log(refreshCurrentPage);

	globalStore.setThemeConfig({ ...themeConfig.value, maximize: true });
};

// Close Current
const closeCurrentTab = () => {
	if (route.meta.isAffix) return;
	tabStore.removeTabs(route.fullPath);
	keepAliveStore.removeKeepLiveName(route.name);
};

// Close Other
const closeOtherTab = () => {
	tabStore.closeMultipleTab(route.fullPath);
	keepAliveStore.clearMultipleKeepAlive([route.name]);
};

// Close All
const closeAllTab = () => {
	tabStore.closeMultipleTab();
	keepAliveStore.clearMultipleKeepAlive();
	router.push(HOME_URL);
};
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
