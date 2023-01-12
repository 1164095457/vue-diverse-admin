<template>
	<template v-for="subItem in menuList" :key="subItem.path">
		<el-sub-menu v-if="subItem.children && subItem.children.length > 0" :index="subItem.path">
			<template #title>
				<el-icon v-if="subItem.meta.icon">
					<component :is="subItem.meta.icon"></component>
				</el-icon>
				<span>{{ subItem.meta.title }}</span>
			</template>
			<SubMenu :menuList="subItem.children" />
		</el-sub-menu>
		<el-menu-item v-else :index="subItem.path" @click="handleClickMenu(subItem)">
			<el-icon v-if="subItem.meta.icon">
				<component :is="subItem.meta.icon"></component>
			</el-icon>
			<template #title>
				<span>{{ subItem.meta.title }}</span>
			</template>
		</el-menu-item>
	</template>
</template>

<script setup>
import { useRouter } from "vue-router";

defineProps({
	menuList:{
		type:Array
	}
});

const router = useRouter();
const handleClickMenu = (subItem) => {
	if (subItem.meta.isLink) return window.open(subItem.meta.isLink, "_blank");
	router.push(subItem.path);
};
</script>
