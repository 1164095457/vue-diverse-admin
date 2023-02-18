<template>
	<img src="@/assets/svg/pifu.svg" @click="openDrawer" style="width: 20x; height: 20px; cursor: pointer" />
</template>

<script setup>
import mittBus from "@/utils/mittBus";
const openDrawer = () => {
	mittBus.emit("openThemeDrawer");
};
</script>
