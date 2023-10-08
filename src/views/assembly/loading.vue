<template>
	<div class="card">
		<el-row :gutter="2">
			<el-col :md="4" class="card" v-for="(item, index) in componentList" :key="index">
				<div class="loading-card">
					<component :is="item" />
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script setup>
import loading1 from "@/components/Loading/loading-01.vue";
import loading2 from "@/components/Loading/loading-02.vue";
import loading3 from "@/components/Loading/loading-03.vue";
import loading4 from "@/components/Loading/loading-04.vue";
import loading5 from "@/components/Loading/loading-05.vue";
import loading6 from "@/components/Loading/loading-06.vue";
import loading7 from "@/components/Loading/loading-07.vue";
import loading8 from "@/components/Loading/loading-08.vue";
import loading9 from "@/components/Loading/loading-09.vue";
import loading10 from "@/components/Loading/loading-10.vue";
import loading11 from "@/components/Loading/loading-11.vue";
import loading12 from "@/components/Loading/loading-12.vue";
import loading13 from "@/components/Loading/loading-13.vue";
import loading14 from "@/components/Loading/loading-14.vue";
import loading15 from "@/components/Loading/loading-15.vue";
import loading16 from "@/components/Loading/loading-16.vue";
import loading17 from "@/components/Loading/loading-17.vue";
import loading18 from "@/components/Loading/loading-18.vue";
const componentList = [
	loading1,
	loading2,
	loading3,
	loading4,
	loading5,
	loading6,
	loading7,
	loading8,
	loading9,
	loading10,
	loading11,
	loading12,
	loading13,
	loading14,
	loading15,
	loading16,
	loading17,
	loading18
];
</script>
<style scoped>
.loading-card {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 150px;
}
</style>
