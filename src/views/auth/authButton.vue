<template>
	<div>
		<el-card>
			<el-divider content-position="left">自定义指令控制(单条件)</el-divider>
			<el-button type="primary" v-authButton="'create'">新增</el-button>
			<el-button type="danger" v-authButton="'remove'">删除</el-button>
			<el-divider content-position="left">自定义指令控制(多条件)</el-divider>
			<el-button type="primary" v-authButton="['create', 'remove']">新增</el-button>
			<el-divider content-position="left">Hooks控制</el-divider>
			<el-button type="primary" v-if="isButton.create">新增</el-button>
			<el-button type="danger" v-if="isButton.remove">新增</el-button>
		</el-card>
	</div>
</template>
<script setup>
import { useAuthButtons } from "@/hooks/useAuthButtons";
const isButton = useAuthButtons();
</script>
