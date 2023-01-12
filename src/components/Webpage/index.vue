<template>
	<iframe :src="url" frameborder="0" class="full-iframe"></iframe>
</template>

<script setup>
const props = defineProps({
    url:{
        type:String,
        default:'https://cn.vuejs.org/',
    }
})
</script>

<style scoped lang="scss">
.full-iframe {
	width: 100%;
	height: 100%;
}
</style>
