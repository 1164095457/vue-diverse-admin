<template>
	<div class="card">
		<div id="table">
			<el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="150" />
    <el-table-column label="Delivery Info">
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column label="Address Info">
        <el-table-column prop="state" label="State" width="120" />
        <el-table-column prop="city" label="City" width="120" />
        <el-table-column prop="address" label="Address" />
        <el-table-column prop="zip" label="Zip" width="120" />
      </el-table-column>
    </el-table-column>
  </el-table>
		</div>
		<el-button type="primary" @click="bindPrint" style="margin-top:10px;">导出</el-button>
	</div>
</template>
<script setup name="excel">
import { utils, write, writeFile } from "xlsx";
import FileSaver from "file-saver";
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
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  }
]
</script>
