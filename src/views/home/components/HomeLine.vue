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
		tooltip: {
			show: true,
			trigger: "axis",
			axisPointer: {
				type: "shadow",
				z: 100,
				shadowStyle: {
					shadowColor: "rgba(167, 167, 167, 1)",
					shadowBlur: 10,
					color: "rgba(255, 255, 255, 1)"
				}
			}
			//  鼠标移入触发
			// formatter: function (params) {
			// 	console.log(params);
			// }
		},
		grid: {
			top: 20,
			bottom: 20,
			left: 30,
			right: 20
		},
		xAxis: [
			{
				type: "category",
				axisTick: {
					show: false,
					alignWithLabel: true
				},
				axisLine: {
					lineStyle: {
						color: "#889fcc"
					}
				},
				data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
			}
		],
		yAxis: [
			{
				type: "value",
				splitLine: {
					show: true,
					lineStyle: {
						color: "rgba(136, 159, 204, .2)"
					}
				},
				axisLine: {
					show: false,
					lineStyle: {
						color: "#889fcc"
					}
				},
				axisTick: {
					show: false
				}
			}
		],
		series: [
			{
				z: 200,
				type: "line",
				smooth: true,
				symbolSize: 15,
				showSymbol: false,
				// itemStyle: {

				// },
				show: false,
				color: "#3282FF", //改变折线点的颜色
				lineStyle: {
					color: "#3282FF" //改变折线颜色
				},
				label: {
					show: false, //开启显示
					position: "top", //在上方显示
					//数值样式
					color: "#999999",
					fontSize: 10
				},
				emphasis: {
					show: true,
					color: "#3282FF",
					borderColor: "#ffffff",
					label: {
						show: true, //开启显示
						position: "top", //在上方显示
						//数值样式
						color: "##fff",
						fontSize: 14
					}
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
								color: "rgba(50,130,255,0.3)"
							},
							{
								offset: 1,
								color: "rgba(50,130,255,0)"
							}
						],
						false
					),
					shadowColor: "rgba(59, 34, 201,1)",
					shadowBlur: 10
				},
				data: [5.9, 6.9, 10.1, 11.7, 4.3, 6.2, 21.6, 43.6, 51.4, 10.4, 17.3, 0.7]
			},
			{
				z: 200,
				type: "bar",
				barWidth: "5",
				itemStyle: {
					normal: {
						color: "transparent"
					},
					emphasis: {
						color: "#2B75D4"
					}
				},
				data: [5.9, 6.9, 10.1, 11.7, 4.3, 6.2, 21.6, 43.6, 51.4, 10.4, 17.3, 0.7]
			}
		]
	};
	useEcharts(myChart, option);
});
</script>
