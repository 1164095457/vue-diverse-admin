<template>
	<div ref="echartsRef" style="height: 50px; width: 100%"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import echarts from "@/plugins/echarts";
import { useEcharts } from "@/hooks/useEcharts";
const echartsRef = ref();
const total = ref([100]);
const current = ref([80]);
onMounted(() => {
	let myChart = echarts.init(echartsRef.value);
	let option = {
		grid: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0
		},
		xAxis: {
			show: false,
			type: "value",
			boundaryGap: [0, 0]
		},
		yAxis: [
			{
				type: "category",
				data: [""],
				axisLine: { show: false },
				axisTick: [
					{
						show: false
					}
				]
			}
		],
		series: [
			{
				name: "金额",
				type: "bar",
				zlevel: 1,
				itemStyle: {
					borderRadius: 300,
					color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
						{
							offset: 1,
							color: "rgba(123, 80, 201, 1)"
						},
						{
							offset: 0,
							color: "rgba(33, 150, 243, 0.6)"
						}
					])
				},
				barWidth: 20,
				data: current.value
			},
			{
				name: "背景",
				type: "bar",
				barWidth: 20,
				barGap: "-100%",
				data: total.value,
				itemStyle: {
					color: "rgba(28, 128, 213, 0.19)",
					borderRadius: 30
				}
			}
		]
	};
	useEcharts(myChart, option);
});
</script>
