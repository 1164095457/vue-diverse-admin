<template>
	<div ref="echartsRef" class="echarts-content"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import echarts from "@/plugins/echarts";
import { useEcharts } from "@/hooks/useEcharts";
const echartsRef = ref();
let pointStyle = {
	borderColor: "#409eff",
	color: "#fff",
	borderWidth: 2
};
let labelStyle = {
	show: true,
	position: "top",
	lineHeight: 20,
	borderRadius: 5,
	backgroundColor: "rgba(255,255,255,.9)",
	borderColor: "#ccc",
	borderWidth: "1",
	padding: [5, 15, 4],
	color: "#000000",
	fontSize: 14
	// fontWeight: "normal"
};
let total = [55, 65, 68, 43, 88, 95];
let seriesData = [];
total = total.sort(function (a, b) {
	return a - b;
});
total.forEach((item, index) => {
	let ob = {
		value: item,
		itemStyle: pointStyle,
		label: labelStyle
	};
	if (index === total.length - 1) {
		ob.itemStyle = {
			borderColor: "#409eff",
			color: "#409eff",
			borderWidth: 3
		};
		ob.label = {
			show: true,
			position: "top",
			lineHeight: 20,
			backgroundColor: "#409eff",
			borderRadius: 5,
			borderColor: "#409eff",
			borderWidth: "1",
			padding: [5, 15, 4],
			color: "#fff",
			fontSize: 14,
			fontWeight: "normal"
		};
	}
	seriesData.push(ob);
});
onMounted(() => {
	let myChart = echarts.init(echartsRef.value);
	let option = {
		grid: {
			top: "25%",
			left: "0",
			right: "0",
			bottom: "20px"
		},
		xAxis: [
			{
				type: "category",
				axisTick: {
					show: false
				},

				splitLine: {
					show: true,
					lineStyle: {
						type: "dashed"
					}
				},
				data: ["1/1", "1/2", "1/3", "1/4", "1/5", "1/6"]
			}
		],

		yAxis: [
			{
				type: "value",
				min: 0,
				max: 100,
				splitNumber: 3,
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: true,
					lineStyle: {
						type: "dashed"
					}
				}
			}
		],
		series: [
			{
				type: "line",
				showAllSymbol: true,
				symbol: "circle",
				symbolSize: 10,
				lineStyle: {
					color: "#409eff",
					width: 5
				},
				tooltip: {
					show: false
				},
				areaStyle: {
					color: new echarts.graphic.LinearGradient(
						0,
						0,
						0,
						1,
						[
							{
								offset: 0,
								color: "rgba(33, 150, 243, 0.6)"
							},
							{
								offset: 1,
								color: "rgba(33, 150, 243, 0.6)"
							}
						],
						false
					)
				},
				data: seriesData,
				markLine: {
					symbol: ["none", "none"], //去掉箭头
					itemStyle: {
						lineStyle: {
							type: "dashed",
							color: "#ccc",
							width: 2
						}
					},
					data: [
						{
							name: "Y 轴值为 80 的水平线",
							yAxis: 80,
							label: {
								formatter: "(标准) 80"
							}
						}
					]
				}
			}
		]
	};
	useEcharts(myChart, option);
});
</script>
