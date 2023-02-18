<template>
	<el-row :gutter="10">
		<el-col :xs="24" :sm="24" :md="16" :lg="16">
			<div class="card h-300">
				<div class="title">总金额</div>
				<div class="count">
					<CountTo prefix="$" :cutting="true" :endVal="10009988000" />
				</div>
				<progressBar />
				<div class="graphical">
					<div class="graphical-left">
						<PancePice />
					</div>
					<div class="graphical-right">
						<PancelLine />
					</div>
				</div>
			</div>
		</el-col>
		<el-col :xs="24" :sm="24" :md="8" :lg="8">
			<div class="card h-300">
				<div class="ranking-title">排行版</div>
				<div class="ranking">
					<img
						src="https://img2.baidu.com/it/u=2779580288,2898080432&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
						class="ranking-user user-left"
					/>
					<img
						src="https://img2.baidu.com/it/u=2779580288,2898080432&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
						class="ranking-user"
					/>
					<img
						src="https://img2.baidu.com/it/u=2779580288,2898080432&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
						class="ranking-user user-right"
					/>
				</div>
				<div class="ranking-table">
					<el-table :data="tableData" style="width: 100%">
						<el-table-column prop="name" label="姓名" width="120" />
						<el-table-column prop="section" label="部门" width="120">
							<template #default="scope">
								<el-tag size="small">{{ scope.row.section }}</el-tag>
							</template>
						</el-table-column>
						<el-table-column prop="money" label="成交金额">
							<template #default="scope">
								<CountTo prefix="$" :cutting="true" :endVal="scope.row.money" />
							</template>
						</el-table-column>
					</el-table>
				</div>
			</div>
		</el-col>
		<el-col :xs="24" :sm="24" :md="24" :lg="24">
			<div class="card" style="margin-top: 10px; height: 400px">
				<PancelPictorialBar />
			</div>
		</el-col>
	</el-row>
</template>

<script setup name="panel">
import CountTo from "@/components/CountTo";
import PancelLine from "./components/PancelLine.vue";
import progressBar from "./components/progressBar.vue";
import PancePice from "./components/PancePie.vue";
import PancelPictorialBar from "./components/PancelPictorialBar.vue";
// const countList = [
// 	{
// 		name: "浏览量",
// 		date: "周",
// 		type: "",
// 		count: 2022,
// 		icon: new URL("@/assets/images/see.png", import.meta.url).href
// 	},
// 	{
// 		name: "下载量",
// 		date: "年",
// 		type: "success",
// 		count: 21999,
// 		icon: new URL("@/assets/images/upload.png", import.meta.url).href
// 	},
// 	{
// 		name: "成交金额",
// 		date: "日",
// 		type: "warning",
// 		count: 18000,
// 		icon: new URL("@/assets/images/money.png", import.meta.url).href
// 	},
// 	{
// 		name: "数据",
// 		date: "月",
// 		type: "danger",
// 		count: 18999,
// 		icon: new URL("@/assets/images/pie.png", import.meta.url).href
// 	}
// ];
const tableData = [
	{
		name: "王二蛋",
		section: "销售部",
		money: 10000
	},
	{
		name: "张小明",
		section: "销售部",
		money: 10000
	},
	{
		name: "坤哥",
		section: "销售部",
		money: 199999
	}
];
</script>

<style lang="scss" scoped>
.h-300 {
	height: 300px;
}
.h-400 {
	height: 400px;
}
.title {
	font-size: 18px;
}
.count {
	font-size: 28px;
	font-weight: bold;
}
.graphical {
	display: flex;
	height: 145px;
	.graphical-left {
		width: 35%;
	}
	.graphical-right {
		width: 65%;
	}
}
.ranking-title {
	text-align: center;
	padding-bottom: 10px;
	font-weight: bold;
}
.ranking {
	position: relative;
	width: 60px;
	height: 60px;
	// display: flex;
	// justify-content: center;
	margin: 0 auto;
	.ranking-user {
		width: 60px;
		height: 60px;
		border-radius: 50%;
	}
	.user-left {
		position: absolute;
		top: 0;
		left: 0;
		animation: uleft 0.4s linear;
		animation-fill-mode: forwards;
	}
	.user-right {
		position: absolute;
		top: 0;
		right: 0;
		animation: uright 0.4s linear;
		animation-fill-mode: forwards;
	}
	@keyframes uleft {
		0% {
			left: 0;
		}
		100% {
			left: -65px;
		}
	}
	@keyframes uright {
		0% {
			left: 0;
		}
		100% {
			left: 65px;
		}
	}
}
.ranking-table {
	margin-top: 6px;
	display: flex;
	justify-content: space-around;
}
</style>
