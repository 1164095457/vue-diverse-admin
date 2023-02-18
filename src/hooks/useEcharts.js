import { onActivated, onDeactivated, onBeforeUnmount } from "vue";
// import echarts from "@/plugins/echarts";
export const useEcharts = (myChart, options) => {
	if (options && typeof options === "object") {
		myChart.setOption(options);
	}
	const echartsResize = () => {
		myChart && myChart.resize();
	};

	window.addEventListener("resize", echartsResize);

	onActivated(() => {
		window.addEventListener("resize", echartsResize);
	});

	onDeactivated(() => {
		window.removeEventListener("resize", echartsResize);
	});

	onBeforeUnmount(() => {
		window.removeEventListener("resize", echartsResize);
	});
};
