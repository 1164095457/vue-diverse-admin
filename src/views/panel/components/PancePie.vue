<template>
	<div ref="echartsRef" class="echarts-content"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import echarts from "@/plugins/echarts";
import { useEcharts } from "@/hooks/useEcharts";
const echartsRef = ref();
const data = ref([
	{ name: "今天", value: 100 },
	{ name: "昨天", value: 100 },
	{ name: "前天", value: 200 }
]);
onMounted(() => {
	let myChart = echarts.init(echartsRef.value);
	let option = {
		grid: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0
		},
		legend: {
			orient: "vertical",
			left: "left"
		},
		tooltip: {
			trigger: "item"
		},
		color: ["#F56C6C", "#409EFF", "#67C23A"],
		series: [
			{
				name: "Access From",
				type: "pie",
				radius: ["40%", "70%"],
				avoidLabelOverlap: false,
				itemStyle: {
					borderRadius: 10,
					borderColor: "#fff",
					borderWidth: 2
				},
				label: {
					show: false,
					position: "center"
				},
				labelLine: {
					show: false
				},
				data: data.value
			}
		]
	};
	useEcharts(myChart, option);
});
</script>
