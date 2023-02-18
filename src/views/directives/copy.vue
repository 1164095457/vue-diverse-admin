<template>
	<div>
		<el-input v-model="copy" placeholder="Please input" class="input-with-select" style="width: 400px">
			<template #append>
				<el-button v-copy="copy">复制</el-button>
			</template>
		</el-input>
	</div>
</template>
<script setup name="copy">
import { ref } from "vue";
const copy = ref("我是复制内容");
</script>
