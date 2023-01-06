<template>
	<div ref="echartsRef" class="content-box" style="height: 374px;background:#fff;"></div>
</template>

<script setup name="columnChart">
import { ref, onMounted } from "vue";
import echarts from "@/plugins/echarts";
import { useEcharts } from "@/hooks/useEcharts";
let value = 80;
const echartsRef = ref();
onMounted(() => {
	let myChart = echarts.init(echartsRef.value);
	let option = {
		title: {
			text: `${value}%`,
			subtext: "成功订单数",
			left: "center",
			top: "center", //top待调整
			textStyle: {
				color: "#222222",
				fontSize: 30,
				fontFamily: "DINAlternate-Bold"
			},
			subtextStyle: {
				color: "#ff",
				fontSize: 15,
				fontFamily: "PingFangSC-Regular",
				top: "center"
			},
			itemGap: -4 //主副标题间距
		},
		series: [
			{
				name: "pie1",
				type: "pie",
				// clockWise: true,
				radius: ["85%", "75%"], //   宽高
				itemStyle: {
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				},
				// hoverAnimation: false,
				data: [
					{
						value: value,
						// name: 'completed',
						itemStyle: {
							borderWidth: 5,
							borderColor: {
								colorStops: [
									{
										offset: 0,
										color: "#1d54f7" || "#00cefc" // 0% 处的颜色
									},
									{
										offset: 1,
										color: "#68eaf9" || "#367bec" // 100% 处的颜色
									}
								]
							},
							color: {
								// 完成的圆环的颜色
								colorStops: [
									{
										offset: 0,
										color: "#1d54f7" || "#00cefc" // 0% 处的颜色
									},
									{
										offset: 1,
										color: "#68eaf9" || "#367bec" // 100% 处的颜色
									}
								]
							},
							label: {
								show: false
							},
							labelLine: {
								show: false
							}
						}
					},
					{
						// name: 'gap',
						value: 100 - value,
						itemStyle: {
							label: {
								show: false
							},
							labelLine: {
								show: false
							},
							color: "rgba(0, 0, 0, 0)",
							borderColor: "rgba(0, 0, 0, 0)",
							borderWidth: 0
						}
					}
				]
			}
		]
	};
	useEcharts(myChart, option);
});
</script>
