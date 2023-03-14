<template>
	<img v-if="isIcon" src="@/assets/svg/quanping.svg" @click="goToFullScreen" style="width: 25px; height: 25px; cursor: pointer" />
	<img v-else src="@/assets/svg/quxiaoquanping.svg" @click="goToFullScreen" style="width: 25px; height: 25px; cursor: pointer" />
</template>
<script setup>
import { ref } from "vue";
const isIcon = ref(true);

//	全屏
const goToFullScreen = () => {
	const element = document.getElementById("app");
	isIcon.value = !isIcon.value;
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.msRequestFullscreen) {
		element.msRequestFullscreen();
	} else if (element.webkitRequestFullscreen) {
		element.webkitRequestFullScreen();
	}
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen();
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	}
};
</script>
