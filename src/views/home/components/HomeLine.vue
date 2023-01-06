<template>
	<div ref="echartsRef" class="card content-box" style="height: 400px"></div>
</template>

<script setup name="columnChart">
import { ref, onMounted } from "vue";
import echarts from "@/plugins/echarts";
import { useEcharts } from "@/hooks/useEcharts";
const echartsRef = ref();
onMounted(() => {
	let myChart = echarts.init(echartsRef.value);
	let option = {
		xAxis: {
			type: "category",
			data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Sun"]
		},
		yAxis: {
			type: "value"
		},
		series: [
			{
				data: [120, 200, 150, 80, 70, 120, 200, 150, 80, 70, 110, 130, 110, 130, 20],
				type: "bar",
				showBackground: true,
				barWidth: 24,
				backgroundStyle: {
					color: "rgba(180, 180, 180, 0.2)"
				}
			}
		]
	};
	useEcharts(myChart, option);
});
</script>
