<template>
	<div class="app-container">
		<el-row :gutter="10">
			<el-col :xs="24" :sm="24" :md="12" :lg="12">
				<HomeUser />
			</el-col>
			<el-col :xs="24" :sm="24" :md="6" :lg="6">
				<HomeCount :list="countList[0]" />
				<HomeCount :list="countList[1]" />
			</el-col>
			<el-col :xs="24" :sm="24" :md="6" :lg="6">
				<HomeCount :list="countList[2]" />
				<HomeCount :list="countList[3]" />
			</el-col>
			<el-col :xs="24" :sm="24" :md="8" :lg="8">
				<HomeTable />
			</el-col>
			<el-col :xs="24" :sm="24" :md="16" :lg="16">
				<HomeLine />
			</el-col>
			<!-- <el-col :xs="24" :sm="24" :md="24" :lg="24" >
        <HomeLine />
      </el-col> -->
		</el-row>
	</div>
</template>

<script setup name="home">
import HomeUser from "./components/HomeUser.vue";
import HomeCount from "./components/HomeCount.vue";
import HomeLine from "./components/HomeLine.vue";
import HomeTable from "./components/HomeTable.vue";
// import HomePie from './components/HomePie.vue'

const countList = [
	{
		name: "浏览量",
		date: "周",
		type: "",
		count: 2022,
		icon: new URL("@/assets/images/see.png", import.meta.url).href
	},
	{
		name: "下载量",
		date: "年",
		type: "success",
		count: 21999,
		icon: new URL("@/assets/images/upload.png", import.meta.url).href
	},
	{
		name: "成交金额",
		date: "日",
		type: "warning",
		count: 18000,
		icon: new URL("@/assets/images/money.png", import.meta.url).href
	},
	{
		name: "数据",
		date: "月",
		type: "danger",
		count: 18999,
		icon: new URL("@/assets/images/pie.png", import.meta.url).href
	}
];
</script>
