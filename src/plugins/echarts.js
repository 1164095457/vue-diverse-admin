import * as echarts from "echarts/core";

import {
	BarChart,
	LineChart,
	PieChart,
	MapChart,
	PictorialBarChart,
	RadarChart,
	ScatterChart,
	LinesChart,
	GraphChart
} from "echarts/charts";

import {
	TitleComponent,
	TooltipComponent,
	GridComponent,
	PolarComponent,
	AriaComponent,
	ParallelComponent,
	LegendComponent,
	RadarComponent,
	ToolboxComponent,
	DataZoomComponent,
	VisualMapComponent,
	TimelineComponent,
	CalendarComponent,
	GraphicComponent
} from "echarts/components";

import { LabelLayout, UniversalTransition } from "echarts/features";

import { CanvasRenderer } from "echarts/renderers";

// 注册必须的组件
echarts.use([
	LegendComponent,
	TitleComponent,
	TooltipComponent,
	GridComponent,
	PolarComponent,
	AriaComponent,
	ParallelComponent,
	BarChart,
	LineChart,
	PieChart,
	MapChart,
	RadarChart,
	PictorialBarChart,
	RadarComponent,
	ToolboxComponent,
	DataZoomComponent,
	VisualMapComponent,
	TimelineComponent,
	CalendarComponent,
	GraphicComponent,
	ScatterChart,
	LabelLayout,
	UniversalTransition,
	CanvasRenderer,
	LinesChart,
	GraphChart
]);

// 导出
export default echarts;
