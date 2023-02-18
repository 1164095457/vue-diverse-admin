<template>
	<div class="card">
		<div id="table">
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="date" label="date" width="150" />
				<el-table-column prop="name" label="name" width="150" />
				<el-table-column prop="address" label="address" width="150" />
				<el-table-column prop="state" label="state" width="150" />
				<el-table-column prop="city" label="city" width="150" />
				<el-table-column prop="zip" label="zip" />
			</el-table>
		</div>

		<el-button type="primary" @click="bindPrint" style="margin-top: 10px">导出</el-button>
		<el-divider />
		<el-upload
			class="upload-demo"
			action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
			multiple
			:on-change="handleChange"
		>
			<el-button type="success">导入</el-button>
		</el-upload>
	</div>
</template>
<script setup name="excel">
import { reactive } from "vue";
import { utils, write, read } from "xlsx";
import FileSaver from "file-saver";
import { readFile } from "@/utils/util.js";
const bindPrint = () => {
	const wb = utils.table_to_book(document.getElementById("table"), {
		raw: true
	});
	const wbout = write(wb, {
		bookType: "xlsx",
		bookSST: true,
		type: "array"
	});
	FileSaver.saveAs(
		new Blob([wbout], {
			type: "application/octet-stream"
		}),
		Date.now() + ".xlsx"
	);
};
const tableData = reactive([
	{
		date: "时间1",
		name: "name1",
		state: "state1",
		city: "city1",
		address: "address1",
		zip: "zip1"
	},
	{
		date: "时间2",
		name: "name2",
		state: "state2",
		city: "city2",
		address: "address2",
		zip: "zip2"
	},
	{
		date: "时间3",
		name: "name3",
		state: "state3",
		city: "city3",
		address: "address3",
		zip: "zip3"
	}
]);

const handleChange = async e => {
	let file = e.raw;
	if (!file) return;
	console.log(file);
	// 读取file文件的内容(转换为json格式)
	let data = await readFile(file);
	//console.log(data); //解析出的二进制文件
	// type :'binary' 类型为二进制
	let eleData = read(data, { type: "binary" });
	//console.log(eleData);
	let eleDataSheet = eleData.Sheets[eleData.SheetNames[0]];
	eleData = utils.sheet_to_json(eleDataSheet); // 将解析出的数据转换为json格式（xlsx自带的方法）
	//eleData最终结果
	tableData.push.apply(tableData, eleData);
};
</script>
