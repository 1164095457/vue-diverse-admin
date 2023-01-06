<template>
	<div class="tool-bar-ri">
		<div class="header-icon">
			<LockScreen />
			<Language id="language" />
			<SearchMenu id="searchMenu" />
			<ThemeSetting id="themeSetting" />
		</div>
		<span class="username">User</span>
		<Avatar />
	</div>
</template>

<script setup>
import SearchMenu from "./components/SearchMenu.vue";
import Language from "./components/Language.vue";
import ThemeSetting from "./components/ThemeSetting.vue";
import LockScreen from "./components/LockScreen.vue";
import Avatar from "./components/Avatar.vue";
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
		width: 120px;
		margin-right: 22px;
	}
	.username {
		margin: 0 20px 0 0;
		font-size: 15px;
	}
}
</style>
