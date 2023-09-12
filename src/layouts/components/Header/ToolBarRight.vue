<template>
	<div class="tool-bar-ri">
		<div class="header-icon">
			<LockScreen />
			<FullScreen />
			<Language id="language" />
			<SearchMenu id="searchMenu" />
			<ColorPicker />
			<ThemeSetting id="themeSetting" />
		</div>
		<span class="username">打工人</span>
		<Avatar />
	</div>
</template>

<script setup>
import SearchMenu from "./components/SearchMenu.vue";
import Language from "./components/Language.vue";
import ThemeSetting from "./components/ThemeSetting.vue";
import LockScreen from "./components/LockScreen.vue";
import FullScreen from "./components/FullScreen.vue";
import Avatar from "./components/Avatar.vue";
import ColorPicker from "./components/ColorPicker.vue";
</script>

<style scoped lang="scss">
.tool-bar-ri {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 30px;
	.header-icon {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 180px;
		margin-right: 22px;
	}
	.username {
		margin: 0 20px 0 0;
		font-size: 15px;
	}
}
</style>
