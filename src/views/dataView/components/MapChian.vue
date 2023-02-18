<template>
	<div ref="mapChianRef" style="width: 100%; height: 100%"></div>
</template>

<script setup name="columnChart">
import { ref, onMounted } from "vue";
import echarts from "@/plugins/echarts";
import { useEcharts } from "@/hooks/useEcharts";
import mapJson from "../assets/china.json";
import { GeoCoordMap, GZData } from "../assets/region.js";

let geoCoordMap = GeoCoordMap();
let gZData = GZData();
let convertData = function (data) {
	let res = [];
	for (let i = 0; i < data.length; i++) {
		let dataItem = data[i];
		let fromCoord = geoCoordMap[dataItem[0].name];
		let toCoord = geoCoordMap[dataItem[1].name];
		if (fromCoord && toCoord) {
			res.push([
				{
					coord: fromCoord
				},
				{
					coord: toCoord
				}
			]);
		}
	}
	return res;
};

let series = [
	{
		name: "",
		type: "lines",
		coordinateSystem: "geo",
		polyline: false,
		zlevel: 10,
		effect: {
			show: true,
			symbol: "circle",
			symbolsize: [25, 30],
			period: 14,
			loop: true,
			trailLength: 0
		},
		markLine: {
			lineStyle: {
				color: "#f5b400",
				width: "6",
				type: "solid",
				opacity: 0.5,
				curveness: "0.2"
			}
		},
		lineStyle: {
			color: "#2ff83f",
			width: "6",
			type: "solid",

			curveness: "-0.2"
		},
		data: convertData(gZData)
	}
];

const mapChianRef = ref();
// const data = [];
// let planePath =
// "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";

onMounted(() => {
	let myChart = echarts.init(mapChianRef.value);
	echarts.registerMap("china", mapJson);
	let option = {
		// backgroundColor: "#031439",
		title: {
			left: "left",
			textStyle: {
				color: "#fff"
			}
		},
		tooltip: {
			trigger: "item"
		},
		geo: {
			map: "china",
			zoom: 1.2,
			label: {
				emphasis: {
					show: false
				}
			},

			roam: false,
			itemStyle: {
				normal: {
					areaColor: "rgba(35, 95, 157, 1)",
					borderColor: "#18cdfe",
					borderWidth: 2,
					shadowBlur: 0,
					shadowColor: "#18cdfe",
					shadowOffsetX: 0.5,
					shadowOffsetY: 1
				},
				emphasis: {
					label: {
						show: false
					},
					areaColor: "rgba(0, 255, 255, .1)"
				}
			}
		},
		series: series
	};

	useEcharts(myChart, option);
});
</script>
