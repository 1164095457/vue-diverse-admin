<template>
	<el-color-picker v-model="themeConfig.primary" :predefine="colorList" @change="changePrimary" />
</template>

<script setup>
import { computed } from "vue";
import { GlobalStore } from "@/stores";
import { useTheme } from "@/hooks/useTheme";
import { DEFAULT_PRIMARY } from "@/config/config";

// 义主题颜色
const colorList = [
	DEFAULT_PRIMARY,
	"#F44336",
	"#E91E63",
	"#9C27B0",
	"#673AB7",
	"#2196F3",
	"#03A9F4",
	"#00BCD4",
	"#009688",
	"#4CAF50",
	"#FFEB3B",
	"#FFC107",
	"#FF5722",
	"#9E9E9E",
	"#607D8B"
];

const globalStore = GlobalStore();
const themeConfig = computed(() => globalStore.themeConfig);

const { changePrimary } = useTheme();
</script>
