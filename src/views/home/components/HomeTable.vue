<template>
    <div class="card" style="height:400px;">
        <el-tag type="success">这周的工作计划</el-tag>
        <el-divider />
    <el-table :data="tableData" border style="width: 100%;">
        <el-table-column prop="date" label="日期" width="120" />
        <el-table-column prop="name" label="计划" />
    </el-table>
    </div>
</template>

<script setup>
const tableData = [
  {
    date: '星期一',
    name: '星期一计划'
  },
  {
    date: '星期二',
    name: '星期二计划'
  },
  {
    date: '星期三',
    name: '星期三计划'
  },
  {
    date: '星期四',
    name: '星期四计划'
  },
  {
    date: '星期五',
    name: '星期五计划'
  },
]
</script>