<template>
	<div ref="echartsRef" class="echarts-content"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import echarts from "@/plugins/echarts";
import { useEcharts } from "@/hooks/useEcharts";
const echartsRef = ref();
onMounted(() => {
	let myChart = echarts.init(echartsRef.value);
	let colorStopsArray = [
		[
			{
				offset: 0,
				color: "rgba(204,251,255, 0.8)"
				//  0%  处的颜色
			},
			{
				offset: 1,
				color: "rgba(239,150,197, 0.8)"
				//  100%  处的颜色
			}
		],
		[
			{
				offset: 0,
				color: "rgba(249,149,127, 0.8)"
				//  0%  处的颜色
			},
			{
				offset: 1,
				color: "rgba(242,245,208, 0.8)"
				//  100%  处的颜色
			}
		],
		[
			{
				offset: 0,
				color: "rgba(234,229,201, 0.8)"
				//  0%  处的颜色
			},
			{
				offset: 1,
				color: "rgba(108,198,203, 0.8)"
				//  100%  处的颜色
			}
		],
		[
			{
				offset: 0,
				color: "rgba(159,165,213, 0.8)"
				//  0%  处的颜色
			},
			{
				offset: 1,
				color: "rgba(232,245,200, 0.8)"
				//  100%  处的颜色
			}
		],
		[
			{
				offset: 0,
				color: "rgba(200,115,255, 0.8)"
				//  0%  处的颜色
			},
			{
				offset: 1,
				color: "rgba(174,186,248, 0.8)"
				//  100%  处的颜色
			}
		],
		[
			{
				offset: 0,
				color: "rgba(12,123,179, 0.8)"
				//  0%  处的颜色
			},
			{
				offset: 1,
				color: "rgba(242,186,232, 0.8)"
				//  100%  处的颜色
			}
		]
	];

	let riskName = ["销售部", "电商部", "技术部", "市场部", "硬件部", "人事部"];
	let riskData = [13, 16, 25, 18, 12, 9];
	let option = {
		backgroundColor: "#fff",
		grid: {
			left: "20px",
			top: "20px",
			bottom: "20px",
			right: "20px"
		},
		tooltip: {
			trigger: "axis",
			axisPointer: {
				type: "none"
			},
			extraCssText: "width:100px;height:60px;"
		},
		xAxis: {
			data: riskName,
			axisTick: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: "rgba(45, 140, 240, 0.65)",
					width: 1
					//这里是为了突出显示加上的
				}
			},
			axisLabel: {
				show: true,
				interval: 0,
				//代表显示所有x轴标签显示
				rotate: 0,
				//代表逆时针旋转45度
				margin: 8,
				color: "#1890FF",
				fontSize: 14,
				fontWeight: 400
			}
		},
		yAxis: [
			{
				splitNumber: 2,
				axisTick: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: "rgba(24,144,255, 0.15)",
						width: 1
					}
				},
				axisLabel: {
					inside: true,
					color: "#1890FF",
					fontWeight: 400,
					fontSize: 14
				},
				splitArea: {
					show: false,
					areaStyle: {
						color: "rgba(255,255,255,.5)"
					}
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: "rgba(24,144,255, 0.15)",
						width: 1,
						type: "solid"
					}
				}
			}
		],
		series: [
			{
				name: "人员",
				type: "pictorialBar",
				barCategoryGap: "-50%",
				symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
				label: {
					show: false,
					position: "top",
					distance: 15,
					color: "#1890FF",
					fontWeight: "bolder",
					fontSize: 14
				},
				itemStyle: {
					color: function (data) {
						let obj = {
							type: "linear",
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [colorStopsArray[data.dataIndex][0], colorStopsArray[data.dataIndex][1]],
							global: false
						};

						return obj;
					},
					emphasis: {
						opacity: 1
					}
				},
				data: riskData,
				z: 10
			}
		]
	};
	useEcharts(myChart, option);
});
</script>
