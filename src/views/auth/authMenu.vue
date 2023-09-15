<template>
	<div>
		<el-card>
			<el-tree ref="tree" :props="defaultProps" :data="data" show-checkbox node-key="id" :default-checked-keys="checkedActive" />
			<el-button type="primary" @click="checkChange">确认</el-button>
		</el-card>
	</div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { AuthStore } from "@/stores/modules/auth";
import DynamicRouter from "@/assets/json/routerList.json";
import { useRouter } from "vue-router";
import { GlobalStore } from "@/stores";
import { LOGIN_URL } from "@/config/config";

const globalStore = GlobalStore();
const router = useRouter();
const authStore = AuthStore();
const defaultProps = {
	children: "children",
	label: "title"
};
const tree = ref(null);
const data = ref([]);
const checkedActive = ref([]);
const checkChange = () => {
	ElMessageBox.confirm("给予权限菜单之后会退出登录", "提示", {
		confirmButtonText: "确定",
		cancelButtonText: "取消",
		type: "warning"
	}).then(() => {
		const checkedMenuIds = tree.value.getCheckedNodes(false, true).map(e => e.id);
		localStorage.setItem("router", JSON.stringify(checkedMenuIds));
		globalStore.setToken("");
		router.replace(LOGIN_URL);
	});
};
onMounted(() => {
	data.value = DynamicRouter.data;
	const routerIdList = JSON.parse(localStorage.getItem("router")) || [];
	const cannotList = authStore.flatMenuListGet.filter(e => e.disabled).map(e => e.id);
	const filterList = authStore.flatMenuListGet.filter(e => e.parentCheck).map(e => e.id);
	checkedActive.value = routerIdList.filter(value => !filterList.includes(value));
	checkedActive.value = [...checkedActive.value, ...cannotList];
});
</script>
