<template>
    <div class="card" style="height:400px;">
        <el-table :data="tableData" border style="width: 100%;height:100%">
    <el-table-column prop="date" label="日期" width="120" />
    <el-table-column prop="name" label="姓名" width="120" />
    <el-table-column prop="address" label="地址" />
  </el-table>
    </div>
</template>

<script setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: '广东省',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: '广东省',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: '广东省',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '广东省',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '广东省',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '广东省',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '广东省',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '广东省',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: '广东省',
  }
]
</script>